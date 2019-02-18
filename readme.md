# README

## System requirements

As follow the requirements of the system (as it was testes, which means that different versions might still work)

* Node v10.15.1
* Postgresql v9.6.6

## Run the server

`cd server`
`npm install`

Populate DB

`psql polleg < ./../db.sql`
 
`npm start`

Server runs on port 3001


## Run the client

From root folder

`cd website`
`npm install`
`npm start`

Client runs on port 3000


## Note

Server and client must run at the same time (so 2 sessions)


## Feel lazy?

Once npm installed everything (and the database is created) from root folder run:

`node server/app.js & npm start --prefix website/`