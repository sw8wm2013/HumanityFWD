const { Pool, Client } = require('pg');
const connectionString = 'postgres://jssbcary:AP7enUksEs5so9k3Z_RHvUH3sJcib5WK@raja.db.elephantsql.com:5432/jssbcary';
const pool = new Pool({connectionString: connectionString});

// pool.query('SELECT NOW()', (err, res)=>{
//     console.log(err, res)
// });

pool.query('CREATE TABLE IF NOT EXISTS users (_id SERIAL PRIMARY KEY, firstName VARCHAR, lastName VARCHAR, email VARCHAR, password VARCHAR)', (err, res) => {
    console.log(err, res)
  });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  }
};