const express = require("express");
const axios = require("axios");

require("dotenv").config();

const router = express.Router();

router.get("/", async (_req, res, next) => {
  try {
    await axios
      .get("https://my.prom.ua/api/v1/groups/list", {
        headers: { Authorization: `Bearer ${process.env.PROM_TOKEN}` },
      })
      .then((response) => {
        res.json(response.data);
      });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
