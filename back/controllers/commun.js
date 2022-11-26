const axios = require('axios');

/* instance axios */
const http = axios.create({
  baseURL: "https://api.starton.io/v2",
  headers: {
    "x-api-key": process.env.API_KEY,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
})

const ipfs = axios.create({
  baseURL: "https://ipfs.eu.starton.io/ipfs/",
  headers: {},
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

async function callSmartContractFunction(network, address, fctName, params) {
  const res = await http.post("/smart-contract/" + network + "/" + address + "/call", {
    "functionName": fctName,
    "params": params
  })
  .catch(function (error) { return error; });
  return res;
}

module.exports = {
  readSmartContractFunction,
  callSmartContractFunction,
  ipfs
}