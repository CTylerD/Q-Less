from flask import (Flask, jsonify, request, abort)
from flask_cors import CORS
import csv
import json
import os

def create_app():
    """Initializes the Flask app"""
    app = Flask(__name__)
    CORS(app)
    return app

app = create_app()

@app.route('/save', methods=['GET', 'POST'])
def index():
    with open("../word-game-microservice/currentGame.json", "w") as jsonfile:
        jsonfile.write(json.dumps(request.get_json()))
    return "request successful!"


@app.errorhandler(400)
def bad_request(error):
    return jsonify({
                    "success": False,
                    "error": 400,
                    "message": "bad request"
    }), 400


@app.errorhandler(401)
def auth_error_handler(error):
    return jsonify({
                    "success": False,
                    "error": 401,
                    "message": "not authorized"
    }), 401


@app.errorhandler(403)
def auth_error_handler(error):
    return jsonify({
                    "success": False,
                    "error": 403,
                    "message": "forbidden"
    }), 403


@app.errorhandler(404)
def resource_not_found(error):
    return jsonify({
                    "success": False,
                    "error": 404,
                    "message": "resource not found"
    }), 404


@app.errorhandler(405)
def method_not_allowed(error):
    return jsonify({
                    "success": False,
                    "error": 405,
                    "message": "method not allowed"
    }), 405


@app.errorhandler(409)
def auth_error_handler(error):
    return jsonify({
                    "success": False,
                    "error": 409,
                    "message": "conflict"
    }), 409


@app.errorhandler(422)
def unprocessable(error):
    return jsonify({
                    "success": False,
                    "error": 422,
                    "message": "unprocessable"
    }), 422


if __name__ == '__main__':
    app.run()
