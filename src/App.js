import React, {Component} from 'react';
import './App.css';

// Component Import
import Header from './Header/header'
import SkillTree from './SkillTree/skillTree'

// Function Import
import {fixSkillDependencyAdd,
  fixSkillDependencyDelete,
  getClassSkillList,
  exportSkillList,
  firstDegSkills,
  calculateTotalSP,
  linkedSkills,
  listIntersect,
  deepCopy} from './helpers'

function defaultState() {
  return {
    level: 1,
    retirementIdx: 0,
    skillsChosen: {},
    activeClassIdx: 0,
    activeSubclassIdx: -1,
    activeSubclassFlag: false,
    subclassToggle: false,
    maxLevel: 70,
    gameID: "eo3"
  };
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = defaultState()
    this.firstDegSkills = firstDegSkills(this.state.activeClassIdx, this.state.gameID);
    this.calculateSpRemaining = this.calculateSpRemaining.bind(this)
  }

  calculateSpRemaining(skillState) {
    const sp = calculateTotalSP(skillState.level, skillState.retirementIdx, skillState.activeSubclassFlag)
    const activeFDegSkills = listIntersect(Object.keys(skillState.skillsChosen), this.firstDegSkills);
    const skillsChosen = skillState.skillsChosen;
    const activeLinkedSkills = listIntersect(Object.keys(skillState.skillsChosen), linkedSkills(skillState.activeClassIdx, this.state.gameID))

    let totalSpSpent = 0;
    Object.keys(skillsChosen).forEach(function (key) {
      if (activeLinkedSkills.includes(key)) {
        return
      }
      totalSpSpent += skillsChosen[key];
    });

    return sp - totalSpSpent + activeFDegSkills.length;
  }

  copySkillsClipboard() {
    const remainingSP = this.calculateSpRemaining(this.state);
    const output = exportSkillList(this.state, remainingSP);

    navigator.clipboard.writeText(output);
    alert("Copied build to clipboard");
  }

  updateState(key, value=undefined) {
    // Reset Everything
    if (key === undefined) {
      console.log('Resetting State...')
        this.firstDegSkills = firstDegSkills(defaultState().activeClassIdx)
        const newState = defaultState();
        newState.gameID = this.state.gameID;
        this.setState(newState);
      return;
    }
    //Set a specific part of state
    let oldState = deepCopy(this.state);
    if (value === undefined) {
      value = defaultState()[key]
    }
    // Changing class resets everything
    if (key === 'activeClassIdx') { 
      console.log('Class change -> resetting state...')
      oldState = defaultState();
      oldState.gameID = this.state.gameID;
      this.firstDegSkills = firstDegSkills(value)
    } 
    if (key === 'activeSubclassIdx') {
      console.log('Subclass change -> Clear subclass skills')
      oldState.activeSubclassFlag = (value === -1 ? false : true)
      oldState.subclassToggle = (value === -1 ? false : true)

      // Get skills for the subclass
      let subclassSkillsToDelete = [];
      if (this.state.activeSubclassIdx !== -1) {
        subclassSkillsToDelete = getClassSkillList(this.state.activeSubclassIdx, oldState.gameID);
      }

      // Keep skills NOT in the subclass
      let skillsToDelete = listIntersect(Object.keys(oldState.skillsChosen), subclassSkillsToDelete);
      skillsToDelete.forEach(skillID => {delete oldState.skillsChosen[skillID]})
    }

    // Change parameters
    if (key === 'skillsChosen') {
      const skillId = value._id;
      const skillLevel = value.level;
      const mainClassSkillFlag = getClassSkillList(oldState.activeClassIdx, oldState.gameID).includes(skillId);
      let validationClassIdx = oldState.activeClassIdx;
      if (!mainClassSkillFlag & oldState.activeSubclassFlag) {
        validationClassIdx = oldState.activeSubclassIdx;
      }

      if (Object.keys(value).length === 0) {
        console.log('Resetting Skills')
        oldState.skillsChosen = {};
      } else if (skillLevel === 0) {
        console.log('Removing', skillId)
        delete oldState.skillsChosen[skillId];
        oldState.skillsChosen = fixSkillDependencyDelete(oldState.skillsChosen, validationClassIdx, oldState.gameID);
      } else if (!Object.keys(oldState.skillsChosen).includes(skillId) ||
          oldState.skillsChosen[skillId] < skillLevel) {
        console.log('Increasing level of', skillId, 'to', skillLevel)
        oldState.skillsChosen[skillId] = skillLevel;
        oldState.skillsChosen = fixSkillDependencyAdd(oldState.skillsChosen, validationClassIdx, oldState.gameID);
      } else if (oldState.skillsChosen[skillId] > skillLevel) {
        console.log('Decreasing level of', skillId, 'to', skillLevel);
        oldState.skillsChosen[skillId] = skillLevel;
        oldState.skillsChosen = fixSkillDependencyDelete(oldState.skillsChosen, validationClassIdx, oldState.gameID);
      }
    } else {
      console.log('Setting', key, 'to', value)
      oldState[key] = value;
    }

    const spRemaining = this.calculateSpRemaining(oldState);
    if (spRemaining < 0) {
        console.log('Increasing level by', -1*spRemaining, 'to meet SP needs');
        oldState['level'] -= spRemaining;
    }

    // After everything, we are within valid level range
    if (oldState.level > oldState.maxLevel) {
      console.log('ERROR: Exceeding maxLevel')
      alert('This change would exceed the set maximum level.')
    } else {
      this.setState(oldState);
    }
  }

  render() {
    let defaultSkillsIdx = 12;
    if (this.state.gameID === 'eo3') {
      // its 12
    } else if (this.state.gameID === 'eo2') {
      // its 13
      defaultSkillsIdx = 12
    }
    return (
      <div className="App">
        <Header
          updateMethod={this.updateState.bind(this)}
          copySkillsClipboard={this.copySkillsClipboard.bind(this)}
          level={this.state.level}
          retirementIdx={this.state.retirementIdx}
          skillsChosen={this.state.skillsChosen}
          skillPointsTotal={calculateTotalSP(this.state.level, this.state.retirementIdx, 
                                             this.state.activeSubclassFlag)}
          skillPointsRemaining={this.calculateSpRemaining(this.state)}
          activeClassIdx={this.state.activeClassIdx}
          activeSubclassIdx={this.state.activeSubclassIdx}
          activeSubclassFlag={this.state.activeSubclassFlag}
          subclassToggle={this.state.subclassToggle}
          maxLevel={this.state.maxLevel}
          gameID={this.state.gameID}
        ></Header>
        <SkillTree
          updateMethod={this.updateState.bind(this)}
          skillsChosen={this.state.skillsChosen}
          activeClassIdx={defaultSkillsIdx}
          gameID={this.state.gameID}
        ></SkillTree>
        <SkillTree
          updateMethod={this.updateState.bind(this)}
          skillsChosen={this.state.skillsChosen}
          activeClassIdx={(this.state.subclassToggle ? this.state.activeSubclassIdx : this.state.activeClassIdx)}
          subclassTree={this.state.subclassToggle}
          gameID={this.state.gameID}
        ></SkillTree>
      </div>
    );
  }
}

export default App;
