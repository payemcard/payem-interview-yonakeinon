from flask import Flask, request, jsonify
from flask_cors import CORS
from db import db, get_next_id, save_db

app = Flask(__name__)
CORS(app)


@app.route('/api/requests', methods=['GET'])
def get_requests():
    return jsonify(db)


@app.route('/api/requests', methods=['POST'])
def create_request():
    new_request = request.get_json()
    new_request['id'] = get_next_id()
    db.append(new_request)
    save_db()
    return jsonify(new_request), 201


if __name__ == '__main__':
    app.run(port=5000)
