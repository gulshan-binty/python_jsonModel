from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
cors=CORS(app,origins='*')
# Load data from JSON file
with open('stock_market_data.json') as json_file:
    data = json.load(json_file)

@app.route('/api/data', methods=['GET'])
def get_data():
     return jsonify(data[:20])

if __name__ == '__main__':
    app.run(debug=True,port=8080)
