#WattThePark

##Requirements
* Sqlite3
* Flask
* Python 2.7.X

##Install Server
Create database
```sqlite3 nameDataBase
```

Create tables
```.read createTable_v_sqlite.sql
```

Launch server
```
python server.py
```

####Available tables
* machine
    * idMachine (INTEGER)
    * name (Varchar)
    * location (Varchar)
    * type (Varchar)
* result
    * idResult (INTEGER)
    * idMachine (INTEGER)
    * score (INTEGER)
    * time (INTEGER)
    * feedback (VARCHAR(1000))
    * currentGenerated (INTEGER)
    * nameUser (VARCHAR)
    * dateBegin (DATE)
    * dateEnd (DATE)
##Select

To select a row from the database.

#####Example
```
localhost:5000/select/<nameTable>?<field=value>&...
```

#### Get the leaderboard
```
localhost:5000/top/<limit> 
```

##Insert
To insert data into the database.

#####Example
```
localhost:5000/insert/<nameTable>?<field=value>&... 
```

##Update
To edit a row in the database.

#####Example
```
localhost:5000/update/<nameTable>?<field=value>&...
```

##Delete
To delete a row

#####Example
```
localhost:5000/delete/<nameTable>/<id>
```

