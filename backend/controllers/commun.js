const axios = require('axios');
let scAddress = process.env.SC_ADDRESS;

/* instance axios */
const http = axios.create({
  baseURL: "https://api.starton.io/v3",
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
  baseURL: "https://api.starton.io/v3",
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
  console.log("owner : ", res.data.response)
  return res;
}

async function callSmartContractFunction(network, address, fctName, params) {
  let owner = await readSmartContractFunction('binance-testnet', scAddress, "owner", []);
  const res = await http.post("/smart-contract/" + network + "/" + address + "/call", {
    "functionName": fctName,
    "params": params,
    "signerWallet": owner.data.response
  })
  .catch(function (error) { return error; });
  console.log(owner.data.response)
  return res;
}

async function uploadToIpfs(filename, jsonobj) {
  const res = await httpA.post("/ipfs/json", {
    "name" : filename,
    "content" : jsonobj
  })
  .catch(function (error) { return error; });
  // console.log(res);
  return res;
}


module.exports = {
  readSmartContractFunction,
  callSmartContractFunction,
  ipfs,
  uploadToIpfs
}