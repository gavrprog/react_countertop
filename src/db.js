const mysql = require("mysql2");
const dbConfig = require("./config/db.config,js")

// Create a connection to the database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

connection.query('SELECT * FROM avant', (err, rows, fields) => {
    if (err) throw err
  
    console.log('The solution is: ', rows)
  })
  
  connection.end()
//module.exports = connection;