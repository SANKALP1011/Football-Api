const express = require("express");
const { MaxTrophies } = require("../Service/trophies.service");

module.exports = {
  GetClubsByMaxTro: async (req, res) => {
    MaxTrophies((err, result) => {
      if (err) {
        return res.status(200).json({
          Success: "No",
          message: err,
        });
      } else {
        return res.status(500).json({
          Success: "Yes",
          messageL: result,
        });
      }
    });
  },
};
