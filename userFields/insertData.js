// we use pg library to
// request connection pool from postgres database
// psql -h traineedb.cgq0reqixqsd.us-east-1.rds.amazonaws.com -d postgres -U traineeUser password is traineePassword
const { Pool } = require('pg')

// we connect to pg using pool we requested
const pool = new Pool({
  user: 'traineeUser',
  host: 'traineedb.cgq0reqixqsd.us-east-1.rds.amazonaws.com',
  password: 'traineePassword',
  database: 'chukwuemekadatabase',
  port: 5432,
  multipleStatements: true
})

// the pool emits an error on behalf of any idle clients
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

// if no error on idel client, pool connects to database
pool.connect((err, client, done) => {
    //if there is an error with our database connection strings
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    //if no error then we have successfully connected 
    console.log('Connected to database');
    // do not call done(); - because we want to use this connection 
    // to create/insert/delete or select records from our database
    // sometime we might also want to export this connection for other resources
});

// insert a record into our table
pool.query(
    `INSERT INTO CRUDChukwuemeka2021 
                 ( ID, FIRSTNAME, LASTNAME, USERNAME, ROLE, EMAIL)
                 VALUES 
                 ('1', 'Emeka', 'Anyanwu', 'Cemeka' , 'Developer', 'eme42c@gmail.com'),
                 ('2', 'Shola', 'Tope','shoteep', 'Designer', 'sholdzy@gmail.com'),
                 ('3', 'Musa', 'Yahib', 'Musbee', 'BusinessAnalyst', 'myahib@yahoo.com' ),
                 ('4', 'Jones', 'Stones', 'Jossyt', 'Trainer', 'stonyJ@gmail.com'),
                 ('5', 'Mellisa', 'Ugrey', 'Greymel', 'Developer', 'mellisag@outlook.com')
                 `,
    (err, res) => {
      if(err) {
        console.log('Error or issue with table creation');
        console.log(err);
    } else {
        console.log('Inserted data into table successfully')
        console.log(res);
   }
  } 
);

pool.end();


// export connection
module.exports = pool;