var express = require('express');
var router = express.Router();
var pdtModel = require("../models/produtosModel")


/* GET all Produto. */
router.get('/', async function(req, res, next) {
  let result = await pdtModel.getAll();
  res.status(result.status).
  send(result.data);
});
module.exports = router;


router.get('/', async function(req, res, next) {
  let products =  await mProd.getAllProducts();
  res.send(products); 
});

module.exports = router;