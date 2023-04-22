from flask import Flask, render_template

import requests
import json


app = Flask(__name__)



# This is the API key you got from the website
API_KEY="..."
PROMPT="..."


@app.route('/')
def hello():
    res = requests.get(f"https://gpt.cobular.com/api/completion/{API_KEY}?query={PROMPT}&num=5")

    if not res.ok:
        print("Something went wrong!")
        print(res.text)
        exit(1)

    resp = res.json()

    print(resp["completion"])

    return render_template('index.jinja', response=resp["completion"])