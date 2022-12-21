from flask import Flask
from flask import abort, redirect, url_for
from flask import request

app = Flask(__name__)


@app.post('/analyze')
def api_analyze():
    resp = analyze(request.form["text"])
    return resp


# Redirect to
@app.route('/')
def index():
    return redirect(url_for('static', filename='index.html'))


def analyze(text):
    txtarr = text.split()
    return dict(words=txtarr)
