var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host:"localhost",
    user:"root",
    password:"yvonne18",
    database:"burger_db"
});

connection.connect(function (err){
    if (err){
        console.log("Error conecting" + err.stack);
        return;
    }
    console.log("connected as id" + connection.threadId);
});

module.exports = connection;