//MySQL connection.
var mysql = require("mysql");

// JAWSdb
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
// Local connection
  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burger_db"
  });
}

//Connection
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;