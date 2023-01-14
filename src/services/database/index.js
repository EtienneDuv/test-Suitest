const {Pool} = require('pg');

// uses default env variables: PGUSER PGHOST PGPASSWORD PGDATABASE PGPORT
const pool = new Pool();

module.exports = {
    dbQuery: (sql, callback) => {
        return pool.query(sql, callback);
    },
};