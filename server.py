import sqlite3
from flask import Flask, request, session, g, redirect, url_for, \
         abort, render_template, flash
import json,re
# configuration
DATABASE = 'wattThePark.db'
DEBUG = True

app = Flask(__name__)
app.config.from_object(__name__)


def connect_db():
        return sqlite3.connect("wattThePark.db")


@app.before_request
def before_request():
        g._db = connect_db()

def query_db(query, args=(), one=False):
        cur = connect_db().execute(query, args)
        rv = cur.fetchall()
        cur.close()
        return (rv[0] if rv else None) if one else rv

@app.teardown_request
def teardown_request(exception):
    db = getattr(g, 'db', None)
    if db is not None:
        db.close()


@app.route("/")
def hello():
    string =""
    for user in query_db('select * from Machine'):
        string += user[1] + 'has the id' + str(user[0])
    return string

def getResultDB(query):
    results = query_db(query)

    if results:
        data=[]
        for result in results:
            data.append({
             "idMachine": result[1],
              "time": result[2],
              "feedback": result[3],
              "currentGenerated": result[4],
              "score": result[5],
              "nameUser": result[6],
              "dateBegin": result[7],
              "dateEnd": result[8]
            })
        return json.dumps(data)
    else: return ""
@app.route("/top/<int:limit>")
def getTop(limit):
   return getResultDB("SELECT * FROM result order by score desc limit {0}".format(limit))
   

def insert(table, fields=(), values=()):
        # g.db is the database connection
        cur = g._db.cursor()
        query = 'INSERT INTO %s (%s) VALUES (%s)' % (
                    table,
                    ', '.join(fields),
                    ', '.join(['?'] * len(values))
                        )
        cur.execute(query, values)
        g._db.commit()
        id = cur.lastrowid
        cur.close()
        return id

def update(table, id, fields=(), values=()):
        # g.db is the database connection
        cur = g._db.cursor()
        middle=""
        for i in xrange(len(fields)):
            middle += "{0} = \"{1}\",".format(fields[i], values[i])
        middle = re.sub(",$","", middle)
        query = 'UPDATE %s SET %s WHERE id%s=%s' % (
                    table,
                    middle,
                    table,
                    id
                        )
        print query
        cur.execute(query, ())
        g._db.commit()
        id = cur.lastrowid
        cur.close()
        return id


def delete(query):
        # g.db is the database connection
        cur = g._db.cursor()
        cur.execute(query, ())
        g._db.commit()
        cur.close()
        return ""

@app.route("/insert/<tableName>", methods=['GET'])
def setData(tableName):
    if request.method == 'GET':
        data=request.args
        if not data:
            return ""
        fields,values=[],[]
        for key in data:
            fields.append(key)
            values.append(data[key])
        try:
            insert(tableName,fields,values)
        except:
            return "ERROR"

@app.route("/delete/<tableName>/<id>", methods=['GET'])
def deleteRow(tableName,id):
    if request.method == 'GET':
        query="DELETE FROM {0} where id{1} LIKE {2}".format(tableName,tableName,id)
        print query
        try:
            delete(query)
            return "SUCCESS"
        except:
            return "ERROR"

@app.route("/update/<tableName>/<id>", methods=['GET'])
def updateRow(tableName,id):
    if not id:
        return ""
    if request.method == 'GET':
        data=request.args
        if not data:
            return ""
        fields,values=[],[]
        for key in data:
            fields.append(key)
            values.append(data[key])
        try:
            update(tableName, id, fields, values)
        except:
            return "ERROR"
        return "SUCCESS"

@app.route("/results",methods=['GET'])
def getResults():
    query="SELECT * FROM Result"
    if request.method == 'GET':
        data=request.args
        if data:
            query_comp=" WHERE "
            for key in data:
                query_comp+="{0} LIKE {1}".format(key,data[key])
                query_comp+= " AND "
            return getResultDB(re.sub(" AND $",";",query+query_comp))
        return getResultDB(query)

def getMachineDB(query):
    results = query_db(query)

    if results:
        data=[]
        for result in results:
            data.append({
             "idMachine": result[0],
              "name": result[1],
              "location": result[2],
              "type": result[3]
            })
        return json.dumps(data)
    else: return ""

@app.route("/machines",methods=['GET'])
def getMachines():
    query="SELECT * FROM Machine"
    if request.method == 'GET':
        data=request.args
        if data:
            query_comp=" WHERE "
            for key in data:
                query_comp+="{0} LIKE {1}".format(key,data[key])
                query_comp+= " AND "
            return getMachineDB(re.sub(" AND $",";",query+query_comp))
        return getMachineDB(query)
if __name__ == "__main__":
    app.run()
