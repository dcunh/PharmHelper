const express = require('express')
const app = express()

/*
for (const key in req.query) {
  console.log(key, req.query[key])
  console.log("2" + req.query.listarProdutos)
} */

var pool = require("./connection");

module.exports.getAll = async function() {
    try {
      
      app.get('/', (req, res) => {
  console.log(req.query)
  console.log("1" + req.query.listarProdutos)
})

app.listen(3000)

    
        return {status:200, data: req.query.listarProdutos};
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }
}

