// Imports
const express = require('express');
const router = express.Router();

const axios = require('axios');



let scAddress = "0xE953d24BB968AaBD55855759A120D0b88c8DD468";

/* instance axios */
const http = axios.create({
  baseURL: "https://api.starton.io/v2",
  headers: {
    "x-api-key": process.env.API_KEY,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
})

const httpA = axios.create({
  baseURL: "https://api.starton.io/v3",
  headers: {
    "x-api-key": process.env.API_KEY,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
})

const httpB = axios.create({
  baseURL: "https://api.starton.io/v2",
  headers: {
    "x-api-key": process.env.API_KEY,
    "Access-Control-Allow-Origin": "*"
  }
})

async function readSmartContractFunction(network, address, fctName, params) {
  const res = await http.post("/smart-contract/" + network + "/" + address + "/read", {
    "functionName": fctName,
    "params": params
  })
  .catch(function (error) { return error; });
  return res;
}



async function getAllProducts(req, res, next) {
  console.log("hello la")
    console.log("req body : ", req.body);
  
    let ret = await readSmartContractFunction("binance-testnet", scAddress, "total_products", []);
    let nbProducts = ret.data.response;
  
    let allProducts = [];
    for (let i = 0; i < nbProducts; i++) {
      let product = await readSmartContractFunction("binance-testnet", scAddress, "products", [i]);
      console.log("product ", product);
      allProducts.push(product.data.response);
    }
  
    res.json({datatest: allProducts});
    next();
}


// Users routes
router.get('/allProducts', getAllProducts);

module.exports = router;