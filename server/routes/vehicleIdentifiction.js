const { Router } = require("express");
const express = require("express");
const router = express.Router();
const { vehicleRegister } = require("../models");



router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const vehicleReg = await vehicleRegister.findByPk(id);
  res.send(vehicleReg);
});


router.post("/", async (req, res) => {
  const post = req.body;

  const vehicleInfo = await vehicleRegister.findOne({
    where: { vehicleUniqueId: post.uniqueid },
  });
  res.send(vehicleInfo);
});

module.exports = router;
