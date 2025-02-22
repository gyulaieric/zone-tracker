from flask import Flask, render_template, request
import requests

app = Flask(__name__)

app.config.from_pyfile('config.py')

url = 'https://dapi.stalcraft.net'

token = app.config.get("API_KEY")

@app.route("/", methods = ['GET'])
def home():
    regions = requests.get(url + '/regions').json()
    return render_template('home.html', regions=regions)

@app.route("/<region>/characters", methods = ['GET'])
def characters(region):
    characters = requests.get(f'{url}/{region}/characters', headers={"Authorization": f'Bearer {token}'}).json()
    return render_template('characters.html', characters = characters)

@app.route("/<region>/characters/<name>")
def character(region, name):
    return requests.get(url + '/' + region + '/chaaracter/by-name/' + name + '/profile', headers={"Authorization":"Bearer " + token}).json();

@app.route("/emissions")
def emissions():
    emissions = []

    regions = requests.get(url + '/regions').json()

    for region in regions:
        data = {
            "region": region,
            "emissionData": requests.get(f'https://dapi.stalcraft.net/{region}/emission', headers={"Authorization": "Bearer " + token}).json()
        }
        emissions.append(data)

    return render_template('emissions.html', emissions=emissions)   