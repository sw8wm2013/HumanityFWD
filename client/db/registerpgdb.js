const pg = require('pg');
const uri = 'postgres://jssbcary:A4xoPl4U4ShT3iJs2TfGsysw-Iet6lfS@raja.db.elephantsql.com:5432/jssbcary';

/*PSQL CLI commands to create database and user locally

  CREATE DATABASE postgresql-raw;
  CREATE USER student WITH PASSWORD 'ilovetesting'

  \l - see all databses 
  \du - see all users 

  */

let pgdb;

pg.connect(uri, (err, db) => {
  if (err) throw new Error(err);

  pgdb = db;

    // column structure for my table
    const createTableQueryString = `CREATE TABLE IF NOT EXISTS events (
      _id SERIAL PRIMARY KEY,
      id varchar,
      summary varchar,
      "htmlLink" varchar,
      start date,
      "end" date,
      "createdAt" date,
      "updatedAt" date,    
      sequence int
    );`
 

  // SQl query to create table 'events' with the correct columns and types defined above 
  pgdb.query(createTableQueryString, (error, result) => {
    if (error) console.log(`Error connecting to PostgresQL Raw - postgresql-raw: ${error}`);
    else console.log('Successfully created table')
  });

});

module.exports = function (data) {
  
  //place code here
  const entries = Object.entries(data);
  for (let i = 0; i < entries.length; i++) {
    for(let j = 0; j < entries[i][1].length; j++){
      let values = [];
      let dailyEvents = {};
    
      dailyEvents.id = entries[i][1][j].id;  
      dailyEvents.summary = entries[i][1][j].summary;
      dailyEvents.htmlLink = entries[i][1][j].htmlLink;  
      dailyEvents.sequence = entries[i][1][j].sequence;  
      dailyEvents.created = new Date(entries[i][1][j].created);  
      dailyEvents.updated = new Date(entries[i][1][j].updated);  
      dailyEvents.start = new Date(entries[i][1][j].start.dateTime);  
      dailyEvents.end = new Date(entries[i][1][j].end.dateTime);
      
      values.push(dailyEvents.id, dailyEvents.summary, dailyEvents.htmlLink, dailyEvents.sequence, dailyEvents.created, dailyEvents.updated, dailyEvents.start, dailyEvents.end)

      const columns = ['id', 'summary', '"htmlLink"', 'sequence', '"createdAt"', '"updatedAt"', 'start', '"end"'];
      const insertQuery = `INSERT INTO events(${columns.join(',')}) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;

        pgdb.query(insertQuery, values, (err, result) => {
        if (err) console.log(`Error inserting entries into table: ${err}`);
        else {
          console.log('Entries successfully inserted into table');
        }

      });
    }
  }

  // throws "Error: Connection terminated" when this is included bc .end executes faster than .query so connection
  //is closing before the insert can finish 
  // pgdb.end();

};

