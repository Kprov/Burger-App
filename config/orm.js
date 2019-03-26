var connection = require("../config/connection.js");


var orm = {
    all: function(tableInput, cb) {
        var Query = "SELECT * FROM " + tableInput + ";";

        connection.query(Query, function(err, result){
            if(err) {
                throw err;
        }
        cb(result);
    });
},
create: function(table, cols, vals, cb) {
    var Query = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(Query);

    connection.query(Query, vals, function(err, result){
        if(err) {
            throw err;
        }

        cb(result);
    });
},

update: function(table, objColVals, condition, cb) {
    var Query = "UPDATE" +  table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);

    connection.query(Query, function(err, results) {
        if (err) {
            throw err;
        }

        cb(result);
    });
  },

  delete: function(table, condition, cb) {
      if (err) {
          throw err;
      }

      cb(result);
  }
};

module.exports = orm;
