from __main__ import app, db, ma

from flask import request, jsonify

@app.route('/', methods=["GET"])
def note_list():
    return jsonify({"teste": 1})