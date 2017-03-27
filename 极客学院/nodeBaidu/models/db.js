	
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '',
    database: 'baidunews'
});

module.exports = connection;