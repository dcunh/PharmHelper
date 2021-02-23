var express = require('express');
var router = express.Router();
var pdtModel = require("../models/searchModel")


/* GET all Serviços. */
router.get('/', async function(req, res, next) {
  
  console.log("ENTROU")
  
 let result = await pdtModel.getAll();
  res.status(result.status).
  send(result.data); 
});

module.exports = router;
