import {getWalletNetworkBalance} from './wallet.js';

export let networks = [
  // "ethereum-mainnet",
  "ethereum-goerli",
  "ethereum-ropsten",
  // "binance-mainnet",
  "binance-testnet",
  // "avalanche-mainnet",
  "avalanche-fuji",
  // "polygon-mainnet",
  "polygon-mumbai"
];

/* instance axios */
export const http = axios.create({
  baseURL: "https://api.starton.io/v2",
  headers: {
    "x-api-key": 'sk_live_a48ec669-5198-4916-b56f-d9d35db92f6d',
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
})

export const httpA = axios.create({
  baseURL: "https://api.starton.io/v3",
  headers: {
    "x-api-key": 'sk_live_a48ec669-5198-4916-b56f-d9d35db92f6d',
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
})
 
export const httpB = axios.create({
  baseURL: "https://api.starton.io/v2",
  headers: {
    "x-api-key": 'sk_live_a48ec669-5198-4916-b56f-d9d35db92f6d',
    "Access-Control-Allow-Origin": "*"
  }
})


export const ipfs = axios.create({
  baseURL: "https://ipfs.eu.starton.io/ipfs/",
  headers: {},
})

/* routes */
export async function smartContractTemplate () {
  const response = await http.get('/smart-contract-template');
  return response.data;
}

/* Gas */
export async function gasOnGoerli() {
  const response = await httpA.get('/gas-price/ethereum-goerli');
  return response.data;
}

export async function gasOnBNB() {
  const response = await httpB.get('/gas-price/binance-testnet');
  console.log("gas : ", response.data);

  return response.data;
}


export async function getEthBalance(address) {
  let res = await getWalletNetworkBalance(address, "ethereum-goerli");
  // console.log(res, "type : ", typeof(res));
  const ethBallance = document.getElementById("eth-balance");
  ethBallance.innerHTML = `${parseFloat(res).toPrecision(5)} Eth`;
}

export async function getBnbBalance(address) {
  let res = await getWalletNetworkBalance(address, "binance-testnet");
  if (res != false) {
    const bnbBallance = document.getElementById("header-bnb-balance");
    bnbBallance.innerHTML = `${parseFloat(res).toPrecision(5)} BNB`;
  }
}

export async function checkConnection() {
  if (localStorage.getItem('bnbBalance') != null) {
    let res = await getBnbBalance(localStorage.getItem('bnbBalance'));
    if (res != false)
      document.getElementById("connectButton").style.display = "none";
  }
}

export let listpwd = [];











/* test */
export const MyAPI = axios.create({
  baseURL: 'http://localhost:3000'
})

export const MyAPIPost = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": '*',
    "Access-Control-Allow-Headers": 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
    "Access-Control-Allow-Methods": 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  },
})

export async function getAllProducts() {
  const response = await MyAPI.get('/allProducts');
  return response;
}

export async function getProductParam(indice) {
  const response = await MyAPI.get('/product/' + indice);
  return response.data;
}

export async function getProduct(indice) {
  const response = await MyAPIPost.post('/product', {
    id: indice
  });
  // console.log("ret final 2 : ", response);
  return response.data;
}

export async function postProduct(data) {
  // console.log("body before req: ", indice);
  const response = await MyAPIPost.post('/addProduct', data);
  return response.data;
}
