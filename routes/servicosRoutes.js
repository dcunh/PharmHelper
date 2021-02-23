var express = require('express');
var router = express.Router();
var pdtModel = require("../models/servicosModels")


/* GET all Serviços. */
router.get('/', async function(req, res, next) {
  let result = await pdtModel.getAll();
  res.status(result.status).
  send(result.data);
});

module.exports = router;