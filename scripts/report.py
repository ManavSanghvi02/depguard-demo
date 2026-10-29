"""Serves a small YAML config as JSON."""

import yaml
from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/config")
def config():
    with open("config.yaml") as f:
        return jsonify(yaml.safe_load(f))
