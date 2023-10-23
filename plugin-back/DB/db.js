const mysql = require('mysql2/promise');

const {
    MYSQL_HOST = 'localhost',
    MYSQL_USER = 'root',
    MYSQL_PW = '181428',
    MYSQL_DB = 'Plugin',
} = process.env;

module.exports = mysql.createPool({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PW,
    database: MYSQL_DB,
    connectTimeout: 5000,
    connectionLimit: 30 //default 
})