const { Pool } = require('pg');

const pool = new Pool({
  user: 'rmj',
  password: process.env.DBPASS,
  host: 'dpg-coll1pa1hbls7390qcs0-a.frankfurt-postgres.render.com',
  port: 5432, // default Postgres port
  database: 'maindb_xat8'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};