connection = require('./connection');

var sql = "delete from teacher where id=1";

connection.con.query(sql, function (error, result) {
    if (error != null) {
        console.log(error)
    }
    else {
        console.log("delete operation successful");
    }
}); 