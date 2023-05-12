import requests
from time import sleep
from helpers import OUTPUT_DIR, CLASSES

BASE_URL = "https://gamefaqs.gamespot.com/ds/943642-etrian-odyssey-ii-heroes-of-lagaard/faqs/73801/{}"

if __name__ == "__main__":
    if not OUTPUT_DIR.exists():
        OUTPUT_DIR.mkdir()

    for classname in CLASSES:
        sleep(0.5)
        print("Getting page for {}".format(classname))
        class_url = BASE_URL.format(classname)
        res = requests.get(class_url)
        output_file = OUTPUT_DIR.joinpath("{}.html".format(classname))
        if output_file.exists():
            output_file.unlink()
        output_file.touch()
        output_file.write_text(res.text)