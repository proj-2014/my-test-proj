var db = require('../database');

var User = function() {};

User.prototype.find = function(id, callback) {
    var sql = "SELECT * FROM userinfo WHERE id =?";
    // get a connection from the pool
    db.pool.getConnection(function(err, connection) {
        if (err) {
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [id], function(err, results) {
            if (err) {
                callback(true);
                return;
            }
            callback(false, results);
        });
    });
};

module.exports = User;