import sqlite3
from flask import Flask, request, g
import json
import re
import os

from datetime import timedelta
from flask import make_response, current_app
from functools import update_wrapper

def crossdomain(origin=None, methods=None, headers=None,
                max_age=21600, attach_to_all=True,
                automatic_options=True):
    if methods is not None:
        methods = ', '.join(sorted(x.upper() for x in methods))
    if headers is not None and not isinstance(headers, basestring):
        headers = ', '.join(x.upper() for x in headers)
    if not isinstance(origin, basestring):
        origin = ', '.join(origin)
    if isinstance(max_age, timedelta):
        max_age = max_age.total_seconds()

    def get_methods():
        if methods is not None:
            return methods

        options_resp = current_app.make_default_options_response()
        return options_resp.headers['allow']

    def decorator(f):
        def wrapped_function(*args, **kwargs):
            if automatic_options and request.method == 'OPTIONS':
                resp = current_app.make_default_options_response()
            else:
                resp = make_response(f(*args, **kwargs))
            if not attach_to_all and request.method != 'OPTIONS':
                return resp

            h = resp.headers

            h['Access-Control-Allow-Origin'] = origin
            h['Access-Control-Allow-Methods'] = get_methods()
            h['Access-Control-Max-Age'] = str(max_age)
            if headers is not None:
                h['Access-Control-Allow-Headers'] = headers
            return resp

        f.provide_automatic_options = False
        return update_wrapper(wrapped_function, f)
    return decorator


# configuration
DATABASE = str(os.getenv('WTPS_DB', 'wattThePark.db'))
DEBUG = bool(os.getenv('WTPS_DEBUG', True))
PORT = int(os.getenv('WTPS_PORT', 3000))

app = Flask(__name__)
app.config.from_object(__name__)


def connect_db():
    """
    Create a connection to the database.
    """
    return sqlite3.connect("wattThePark.db")


@app.before_request
def before_request():
    g._db = connect_db()


def query_db(query, args=(), one=False):
    """
    Return the result from a query
    """
    cur = connect_db().execute(query, args)
    rv = cur.fetchall()
    cur.close()
    return (rv[0] if rv else None) if one else rv


@app.teardown_request
def teardown_request(exception):
    db = getattr(g, 'db', None)
    if db is not None:
        db.close()


@app.route("/top/<int:limit>")
@crossdomain("*")
def getTop(limit):
    """
    Get the top results from the database
    """
    results = query_db("SELECT * FROM result order by score desc limit {0}".format(limit))
    return tableToJSON(results, "Result")

@app.route("/top/<int:idMachine>/<int:limit>")
@crossdomain("*")
def getTopMachine(idMachine, limit):
    """
    Get the top results from the database
    """
    results = query_db("SELECT * FROM result WHERE idMachine={0} order by score desc limit {1}".format(idMachine, limit))
    return tableToJSON(results, "Result")

def insert(table, fields=(), values=()):
    """
    Insert data in a database.
    """
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
    """
    Update data in a database
    """
    # g.db is the database connection
    idname = getColumn(table)[0]
    cur = g._db.cursor()
    middle = ""
    for i in xrange(len(fields)):
        middle += "{0} = \"{1}\",".format(fields[i], values[i])
    middle = re.sub(",$", "", middle)
    query = 'UPDATE %s SET %s WHERE %s=%s' % (
        table,
        middle,
        idname,
        id
    )
    cur.execute(query, ())
    g._db.commit()
    id = cur.lastrowid
    cur.close()
    return id


def delete(tableName, id):
    """
    Delete a row in a database
    """
    idname = getColumn(tableName)[0]
    cur = g._db.cursor()
    query = "DELETE FROM {0} where {1} LIKE {2}".format(
        tableName, idname, id)
    cur.execute(query, ())
    g._db.commit()
    cur.close()
    return ""


@app.route("/insert/<tableName>", methods=['GET'])
@crossdomain("*")
def insertData(tableName):
    """
    Insert the data in the table
    """
    if request.method == 'GET':
        data = request.args
        if not data:
            return ""
        fields, values = [], []
        for key in data:
            fields.append(key)
            values.append(data[key])
       	try:
            insert(tableName, fields, values)
            return "OK"
        except:
            return "ERROR"


@app.route("/delete/<tableName>/<id>", methods=['GET'])
@crossdomain("*")
def deleteRow(tableName, id):
    if request.method == 'GET':
        try:
            delete(tableName,
                   id)
            return "SUCCESS"
        except:
            return "ERROR"


@app.route("/update/<tableName>/<id>", methods=['GET'])
@crossdomain("*")
def updateRow(tableName, id):
    """
    Update a value in the database
    """
    if not id:
        return ""
    if request.method == 'GET':
        data = request.args
        if not data:
            return ""
        fields, values = [], []
        for key in data:
            fields.append(key)
            values.append(data[key])
        try:
            update(tableName, id, fields, values)
        except:
            return "ERROR"
        return "SUCCESS"


def getColumn(tableName):
    names = []
    query = "PRAGMA table_info(" + tableName + ")"
    for item in query_db(query):
        names.append(item[1])
    return names


def tableToJSON(results, tableName):
    if results:
        namesColumn = getColumn(tableName)
        data = []
        for result in results:
            dico = {}
            for i in xrange(len(namesColumn)):
                dico[namesColumn[i]] = result[i]
            data.append(dico)
        return json.dumps(data)
    else:
        return ""


@app.route("/select/<tableName>", methods=['GET'])
@crossdomain("*")
def select(tableName):
    """
    Get the machines from the database
    """
    query = "SELECT * FROM " + tableName
    if request.method == 'GET':
        data = request.args
        if data:
            query_comp = " WHERE "
            for key in data:
                query_comp += "{0} LIKE {1}".format(key, data[key])
                query_comp += " AND "
            results = query_db(re.sub(" AND $", ";", query + query_comp))
            return tableToJSON(results, tableName)

        results = query_db(query)
        return tableToJSON(results, tableName)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=PORT)
