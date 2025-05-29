const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db_movie'
});

connection.connect((err) => {
    if(err) {
        console.log(err)
    };
    console.log('Connected to MySQL')
});

module.exports = connection;