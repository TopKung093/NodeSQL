const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nextdatabase'
});
db.connect((error) => {
    if (error) {
        return console.log('Error connecting to MySQL database:', error);
    } else {
        return console.log('Connected to MySQL database');
    }
});
module.exports = db