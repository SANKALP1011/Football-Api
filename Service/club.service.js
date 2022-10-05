const express = require("express");
const DbConnection = require("../Database/DatabaseConfig");

module.exports = {
  FetchClubs: (callback) => {
    const query = "Select * from Clubs";
    DbConnection.query(query, [], (err, results) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, results);
      }
    });
  },
  FetchClubsById: (id, callback) => {
    const query = "Select * from Clubs where id = ?";
    DbConnection.query(query, [id], (err, results) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, results);
      }
    });
  },
  FetchClubsByName: (name, callback) => {
    const query = "Select * from Clubs where name = ?";
    DbConnection.query(query, [name], (err, result) => {
      if (err) {
        return callback(err);
      } else {
        return callback(null, result);
      }
    });
  },
};
