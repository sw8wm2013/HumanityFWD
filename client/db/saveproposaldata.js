const MongoClient = require('mongodb').MongoClient;
const dbName = 'proposals-raw'

let db, collection;

MongoClient.connect('mongodb://localhost/proposals-raw', (error, client) => {
  if (error) console.log(`Error connecting to Proposals: ${error}`);
  console.log('Connected with Proposals-Raw');
  db = client.db(dbName);
  collection = db.collection('proposals');
});

module.exports = function(data) {

  const extractedData = [];
  //dates and array of events for those dates
  //keys are the dates and values are an array of event objects
  const entries = Object.entries(data);
  // console.log('entries from data (response body returned from GET req to API_URL) below');
  // console.log(entries);
  // loop through array of arrays
  // entries[i] = date 
  // entries[i][1] = array of objects (each object represents an event on that date)
  // entries[i][1][j] = individual event object
  // entries[i][1][j].id = event's id
  for(let i = 0; i < entries.length; i++) {
    //inside the events array, loop through all the events
    for(let j = 0; j < entries[i][1].length; j++){
      //extract the data we need from each individual event (an object)
      let dailyEvents = {};
      dailyEvents.id = entries[i][1][j].id;  
      dailyEvents.summary = entries[i][1][j].summary;
      dailyEvents.htmlLink = entries[i][1][j].htmlLink;  
      dailyEvents.sequence = entries[i][1][j].sequence;  
      dailyEvents.created = new Date(entries[i][1][j].created);  
      dailyEvents.updated = new Date(entries[i][1][j].updated);  
      dailyEvents.start = new Date(entries[i][1][j].start.dateTime);  
      dailyEvents.end = new Date(entries[i][1][j].end.dateTime);
      extractedData.push(dailyEvents);
    }
  }
 
  //insert array of objects (extractedData) into collection
    collection.insertMany(extractedData, (error, result) => {
      if (error) console.log (`Error inserting data into collection: ${error}`);
      db.close();
  });

};

