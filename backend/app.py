from flask import Flask, jsonify
from flask_cors import CORS
from apod import get_apod
from neo import get_neo_data


app = Flask(__name__)
CORS(app)

@app.route('/api/apod_data',methods=['GET'])
def apod():
    return jsonify(get_apod())

@app.route('/api/neo_data',methods=['GET'])
def neos():
    neo_list_class = get_neo_data()
    neo_list = [neo.to_dict() for neo in neo_list_class]
    return jsonify(neo_list)

app.run(debug=True)