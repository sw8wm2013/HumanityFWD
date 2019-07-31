const pg = require('pg');
const db = {};

const uri = 'postgres://jssbcary:A4xoPl4U4ShT3iJs2TfGsysw-Iet6lfS@raja.db.elephantsql.com:5432/jssbcary';


pg.connect(uri(err,db_)=>{
    if(err) throw new Error (err);
    db.conn= db_;
});

module.exports = db;