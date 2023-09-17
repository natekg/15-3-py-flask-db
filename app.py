from flask import Flask, request, jsonify
import json
import datetime

app = Flask(__name__, static_folder="public", static_url_path="/")

@app.route('/add', methods=['POST'])
def add():
    data = request.json
    result = data['firstNumber'] + data['secondNumber']
    update_db("add-form", result)
    return jsonify({'result': result})

@app.route('/multiply', methods=['POST'])
def multiply():
    data = request.json
    result = data['firstNumber'] * data['secondNumber']
    print(result)
    update_db("multiply-form", result)
    return jsonify({'result': result})

@app.route('/create_product_id', methods=['POST'])
def create_product_id():
    data = request.json
    product_type = data['productType']
    product_prefix = {
        'powertrain': 'PT',
        'fueling': 'FF',
        'electrical': 'EE',
        'etc': 'EZ'
    }.get(product_type, '')

    result = product_prefix + data['productIdentifier']
    update_db("product-id-form", result)
    return jsonify({'result': result})

def load_db(filename):
    try:
        with open(filename, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        return []
    except json.JSONDecodeError:
        return []

def update_db(form_id, result):
    db = load_db('db.json')
    
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    new_entry = {
        'form_id': form_id,
        'result': result,
        'timestamp': timestamp
    }
    
    print("new entry", new_entry)
    db.append(new_entry)
    
    with open('db.json', 'w') as f:
        json.dump(db, f, indent=4)

@app.route('/')
def home():
    return app.send_static_file('home.html')

if __name__ == '__main__':
    app.run(debug=True)
