import time
import json

# import flask
from flask import Flask
from flask_cors import CORS

# import mariadb
import mariadb

# variables flask
app = Flask(__name__)
cors = CORS()
cors.init_app(app)

# variables mariadb
try:
    connection = mariadb.connect(
        user="user1",
        password="password1",
        host="127.0.0.1",
        port=3306,
        database="matmapper",
        autocommit=True
    )
    cursor = connection.cursor()
    print("MariaDBManager has successfully connected to database")
except mariadb.Error as e:
    print("MariaDBManager has failed to connect to database")
    print(f"{e}")
  
# routes flask
@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/get_USD')
def get_usd():
    return {"base":"USD","date":"2018-04-20","rates":{"AUD":1.2985,"BGN":1.5889,"BRL":3.4034,"CAD":1.2639,"CHF":0.9725,"CNY":6.2921,"CZK":20.5866,"DKK":6.0506,"EUR":0.8124,"GBP":0.7117,"HKD":7.8453,"HRK":6.0208,"HUF":252.2707,"IDR":13926.9965,"ILS":3.5287,"INR":66.1223,"ISK":100.1706,"JPY":107.5717,"KRW":1069.3476,"MXN":18.4762,"MYR":3.8934,"NOK":7.8032,"NZD":1.3837,"PHP":52.1399,"PLN":3.3859,"RON":3.7847,"RUB":61.5302,"SEK":8.425,"SGD":1.3138,"THB":31.3202,"TRY":4.0461,"ZAR":12.0244}}

@app.route('/get_EUR')
def get_eur():
    return {"base":"EUR","date":"2018-04-20","rates":{"BOBUX":99999,"BGN":1.5889,"BRL":3.4034,"CAD":1.2639,"CHF":0.9725,"CNY":6.2921,"CZK":20.5866,"DKK":6.0506,"USD":0.8124,"GBP":0.7117,"HKD":7.8453,"HRK":6.0208,"HUF":252.2707,"IDR":13926.9965,"ILS":3.5287,"INR":66.1223,"ISK":100.1706,"JPY":107.5717,"KRW":1069.3476,"MXN":18.4762,"MYR":3.8934,"NOK":7.8032,"NZD":1.3837,"PHP":52.1399,"PLN":3.3859,"RON":3.7847,"RUB":61.5302,"SEK":8.425,"SGD":1.3138,"THB":31.3202,"TRY":4.0461,"ZAR":12.0244}}

@app.route('/get_from_database')
def get_from_database():
  return(json.dumps(exc_query("SELECT * FROM users WHERE id = 1 ORDER BY id DESC LIMIT 1;"), default=str))
  

def exc_query(query):
  data = []
  cursor.execute(query)
  for isitaset in cursor:
    for data_field in isitaset:
      data.append(data_field)
  return data