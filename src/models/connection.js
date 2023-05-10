const mysql = require('mysql2/promise');

require ('dotenv').config();
//foi criado como várias de ambiente na pasta .env

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

module.exports = connection;