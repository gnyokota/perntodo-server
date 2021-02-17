#To run set up the database: 

const pool = new Pool({
    user: 'postgres', 
    password: [YOUR OWN PASSWORD], 
    host: 'localhost', 
    port: 5432, 
    database: 'perntodo'
});
