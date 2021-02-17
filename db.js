const Pool = require('pg').Pool;
const password = require('./password');



const pool = new Pool({
    user: 'postgres', 
    password: password.passDB, 
    host: 'localhost', 
    port: 5432, 
    database: 'perntodo'
});

module.exports = pool; 