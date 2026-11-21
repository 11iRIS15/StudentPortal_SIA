const express = require("express");
const router = express.Router();

const { getHealthStatus } = require("../services/health.service");

router.get("/", (req, res) => {
  res.status(200).json(getHealthStatus());
});

module.exports = router;