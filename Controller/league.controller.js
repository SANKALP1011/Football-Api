const express = require("express");
const {
  FetchAllLeagues,
  FetchLeagueById,
  FetchLeagueByName,
} = require("../Service/league.service");
const { NameValidataion, IdValidation } = require("../Validation/Validation");

module.exports = {
  GetAllLeagues: async (req, res) => {
    FetchAllLeagues((err, results) => {
      if (err) {
        return res.status(200).json({
          Success: "No",
          message:
            "Currently , no league table has been added by the developer.",
        });
      } else {
        return res.status(500).json({
          Success: "Yes",
          message: results,
        });
      }
    });
  },
  GetLeagueById: async (req, res) => {
    const body = req.body;
    const id = body.id;
    const { error } = IdValidation(id);
    if (error) {
      return res.status(200).json({
        Success: "No",
        message: error.details[0].message,
      });
    } else {
      FetchLeagueById(id, (err, results) => {
        if (err) {
          return res.status(200).json({
            Success: "No",
            message: "Currently , no league table has been added by the user.",
          });
        } else {
          return res.status(500).json({
            Success: "Yes",
            message: results,
          });
        }
      });
    }
  },
  GetLeagueByName: async (req, res) => {
    const body = req.body;
    const name = body.name;
    const { error } = NameValidataion(name);
    if (error) {
      return res.status(200).json({
        Success: "No",
        message: error.details[0].message,
      });
    } else {
      FetchLeagueByName(name, (err, result) => {
        if (err) {
          return res.status(200).json({
            Success: "No",
            message:
              "Currently , no player table has been added by the developer.",
          });
        } else {
          return res.status(500).json({
            Success: "Yes",
            message: result,
          });
        }
      });
    }
  },
};
