import React, {Component} from 'react';
import './header.css';

// Helper Functions
import {isNumber, retirementLabels, skillData} from '../helpers'

function getClasses(gameID) {
    const classes = [];
    skillData[gameID].forEach(function (datum) {
      classes.push(datum.class)
    })
  
    return(classes);
}

class Header extends Component {
    constructor(props) {
        super(props);
        this.level = props.level;
        // this.classOpts = getClasses(this.props.gameID);

        // Element Builder Functions
        this.buildClassDropdown = this.buildClassDropdown.bind(this);
        this.buildLevelBox = this.buildLevelBox.bind(this);
        this.updateLevel = this.updateLevel.bind(this);
        this.buildRetirementBox = this.buildRetirementBox.bind(this);
        this.updateRetirementIdx = this.updateRetirementIdx.bind(this);
        this.buildGameToggle = this.buildGameToggle.bind(this);
        this.buildSubclassViewToggle = this.buildSubclassViewToggle.bind(this);

        // Updater Functions
        this._setLevel = this._setLevel.bind(this);
        this._changeLevel = this._changeLevel.bind(this)
        this._clearSkills = this._clearSkills.bind(this);
        this._resetAll = this._resetAll.bind(this);
        this.updateClassIdx = this.updateClassIdx.bind(this);
        this.updateSubclassClassIdx = this.updateSubclassClassIdx.bind(this);
    }

    buildGameToggle() {
        const eo1Toggle = this.props.gameID === "eo1";
        const eo2Toggle = this.props.gameID === "eo2";
        const eo3Toggle = this.props.gameID === "eo3";
        return <div>
            <div className='btn-group'>
                <button type='button'
                    class={'btn ' + (eo1Toggle ? 'btn-active' : 'btn-inactive')}
                    onClick={() => this.props.updateMethod('gameID', 'eo1')}
                    >
                    EO1</button>
                <button type='button'
                    class={'btn ' + (eo2Toggle ? 'btn-active' : 'btn-inactive')}
                    onClick={() => this.props.updateMethod('gameID', 'eo2')}
                    >
                    EO2</button>
                <button type='button'
                    class={'btn ' + (eo3Toggle ? 'btn-active' : 'btn-inactive')}
                    onClick={() => this.props.updateMethod('gameID', 'eo3')}
                    >
                    EO3</button>
            </div>
        </div>
    }

    updateRetirementIdx() {
        this.props.updateMethod('retirementIdx', parseInt(this.refs.retirementDropdownList.value))
    }

    buildRetirementBox() {
        const retirementOpts = []
        retirementLabels.forEach(function (label, idx) {
            retirementOpts.push(<option key={label} value={idx}>{label}</option>)
        })

        return <div><span className="HeaderLabel">Retirement Level:</span> <select
                ref="retirementDropdownList"
                value={this.props.retirementIdx}
                onChange={() => this.updateRetirementIdx()}>
                {retirementOpts}
            </select>
        </div>
    }

    updateMaxLevel() {
        const maxLevelBox = this.refs.maxLevelDropdownList;
        let newLevel = maxLevelBox.value;
        this.props.updateMethod('maxLevel', newLevel);
    }

    buildMaxLevelBox() {
        const levelBoxOpts = []
        for (let i = 1; i < 100; i++) {
            levelBoxOpts.push(<option key={i} value={i}>{i}</option>)
        }

        return <div>
        <span className="HeaderLabel">Max Level:</span> <select
            value={this.props.maxLevel}
            ref='maxLevelDropdownList'
            id='maxLevelDropdown'
            onChange={() => {this.updateMaxLevel()}}
        >
            {levelBoxOpts}
        </select>
        </div>
    }

    updateLevel() {
        const levelBox = this.refs.levelDropdownList;
        if (isNumber(levelBox.value)) {
            let newLevel = levelBox.value;
            if (newLevel) {
                newLevel = parseInt(newLevel);
                if (newLevel > 99) {
                    this._setLevel(99);
                } else {
                    this._setLevel(newLevel);
                }
            } else {
                this._setLevel();
            }
        }
    }

    buildLevelBox() {
        const levelBoxOpts = []
        for (let i = 1; i < 100; i++) {
            levelBoxOpts.push(<option key={i} value={i}>{i}</option>)
        }

        return <div>
        <span className="HeaderLabel">Level:</span> <select
            value={this.props.level}
            ref='levelDropdownList'
            id='levelDropdown'
            onChange={() => {this.updateLevel()}}
        >
            {levelBoxOpts}
        </select>
        </div>
    }

    buildClassDropdown(subclassFlag=false) {
        // Set variables
        let label = "Class"
        let invalidClasses = ["Default"]
        let curValue = this.props.activeClassIdx
        let updateFunc = this.updateClassIdx
        let extraClasses = []
        if (subclassFlag) {
            label = "Subclass"
            invalidClasses = ["Default", "Yggdroid", getClasses(this.props.gameID)[this.props.activeClassIdx]]
            curValue = this.props.activeSubclassIdx // TODO: CHANGE THIS
            updateFunc = this.updateSubclassClassIdx
            extraClasses = ["(None)"]
        }

        const classOptions = []
        extraClasses.forEach(function(className, idx) {
            idx = -1 * (idx + 1)
            classOptions.push(<option key={idx + className} value={idx}>{className}</option>)
        });
        getClasses(this.props.gameID).forEach(function(className, idx) {
            if (invalidClasses.includes(className)) {
                return;
            }
            classOptions.push(<option key={idx + className} value={idx} >{className}</option>)
        })
        return <div>
            <span className="HeaderLabel">{label}:</span> <select
                value={curValue}
                ref='classDropdownList'
                id="classDropdown"
                onChange={(e) => {updateFunc(e.target.value)}}>
            {classOptions}
            </select></div>
    }

    buildSubclassViewToggle() {
        return <div>
            <div className='btn-group'>
                <button type='button'
                    class={'btn ' + (this.props.subclassToggle ? 'btn-inactive' : 'btn-active')}
                    onClick={() => this.props.updateMethod('subclassToggle', false)}
                    >
                    Main</button>
                <button type='button'
                    disabled={!this.props.activeSubclassFlag}
                    class={'btn ' + (this.props.subclassToggle ? 'btn-active' : 'btn-inactive') +
                            (this.props.activeSubclassFlag ? '' : ' btn-disabled')}
                    onClick={() => this.props.updateMethod('subclassToggle', true)}
                    >
                    Sub</button>
            </div>
        </div>
    }

    updateClassIdx(newClassIdx) {
        // const newClassIdx = this.refs.classDropdownList.value;
        console.log('Updating to class', newClassIdx, getClasses(this.props.gameID)[newClassIdx]);
        this.props.updateMethod('activeClassIdx', parseInt(newClassIdx));
    }

    updateSubclassClassIdx(newClassIdx) {
        // const newClassIdx = this.refs.classDropdownList.value;
        console.log('Updating to subclass', newClassIdx, getClasses(this.props.gameID)[newClassIdx]);
        this.props.updateMethod('activeSubclassIdx', parseInt(newClassIdx));
    }

    _changeLevel() {
        const levelSpan = this.refs.level
        const newLevel = parseInt(levelSpan.textContent) + 1;
        console.log('-> _changeLevel', newLevel);
        this._setLevel(newLevel)
    }

    _setLevel(newLevel) {
        this.props.updateMethod('level', newLevel)
    }

    _clearSkills() {
        this.props.updateMethod('skillsChosen', undefined)
    }

    _resetAll() {
        this.props.updateMethod()
    }

    _copySkillsClipboard() {
        this.props.copySkillsClipboard()
    }

    render() {
        const classDropdown = this.buildClassDropdown();
        const subClassDropdown = this.buildClassDropdown(true);
        const skillPointsInfo = <div><span className="HeaderLabel">Skill Points:</span> {this.props.skillPointsRemaining}/{this.props.skillPointsTotal}</div>;
        const levelBox = this.buildLevelBox()
        const retirementBox = this.buildRetirementBox()
        const maxLevelBox = this.buildMaxLevelBox()
        const subclassToggleDiv = this.buildSubclassViewToggle()
        const gameToggle = this.buildGameToggle();

        const imgStyle = {
            float: 'left',
            marginLeft: '5%',
            width: '377px',
            height: 'auto'
        }

        let headerControlsDiv = <div>
                <div className='inline-block-div'>
                </div>
                <div className='inline-block-div'>
                    {classDropdown}
                    {levelBox}
                    {maxLevelBox}
                    {retirementBox}
                    {skillPointsInfo}                        
                </div>
        </div>
        if (this.props.gameID === 'eo3') {
            headerControlsDiv = <div>
                <div className='inline-block-div'>
                    {classDropdown}
                    {subClassDropdown}
                    {subclassToggleDiv}
                </div>
                <div className='inline-block-div'>
                    {levelBox}
                    {maxLevelBox}
                    {retirementBox}
                    {skillPointsInfo}                        
                </div>
            </div>
        } 

        return <div className="HeaderBar">
            <div className="HeaderImg">
                <a href="https://github.com/aturfah/eo3-remake-skillsim">
                <img src={process.env.PUBLIC_URL + "/skillsim_img.png"}  alt="alt_text" style={imgStyle}/>
                </a>
            </div>
            <div className="HeaderControls">
                {headerControlsDiv}
                <div>
                    <button className="btn btn-gray" onClick={() => this._clearSkills()}>Clear Skills</button> &nbsp;
                    <button className="btn btn-gray" onClick={() => this._copySkillsClipboard()}>Copy Build</button>
                </div>
            </div>
        </div>
    }
}

export default Header;