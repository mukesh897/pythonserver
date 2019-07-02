from flask import Flask, render_template, request, abort, jsonify
from flask_cors import CORS
import json
app = Flask(__name__, static_folder="public",
template_folder="public")
CORS(app)


@app.route('/')
def hello():
    return render_template('index.html')

@app.route('/data', methods=['POST'])
def create_task():
    print "printing request sent to python server"
    print request.json
    if not request.json or not 'username' in request.json:
        abort(400)
    tasks = []
    username = request.json['username']
    return jsonify({'message': 'successfully updated', 'username_received': username})

if __name__ == '__main__':
    app.run(debug=True)
