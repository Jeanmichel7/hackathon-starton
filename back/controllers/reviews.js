const scAddress = "0x5F9A9EeBa8914e95E02C1c69792e2b1C14440bCE";
const crypto = require('node:crypto');
const {ipfs, 
  readSmartContractFunction,
  callSmartContractFunction
} = require('../controllers/commun');



async function uploadToIpfs(filename, jsonobj) {
  const res = await ipfs.post("/ipfs/json", {
    "name" : filename,
    "content" : jsonobj
  })
  .catch(function (error) { return error; });
  // console.log(res);
  return res;
}

async function addHash(id, cid) {
  let pwd = await genPassAndHash();

  let listpwd = [];
  listpwd.push(pwd[0])
  let hashobj
  if (cid == "") {
    hashobj = {}
  }
  else {
    let Data = await getIpfsData(cid);
    console.log("res data : ", Data.data);
    hashobj = Data.data;
  }
  // addReview(hashobj, pwd[1]);
  let upload = await uploadToIpfs('hash.json', hashobj);
  console.log("upload : ", upload.data);
  let data = [];
  data.push(parseInt(id, 10));
  data.push(upload.data.cid);
  await callSmartContractFunction('binance-testnet', scAddress, "setHashCID", data);
  return pwd[0];
}


async function genPassAndHash() {
  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charLength = chars.length;
  var passwd = "";
  let res = [];
  for ( var i = 0; i < 24; i++ )
    passwd += chars.charAt(Math.floor(Math.random() * charLength));
  res.push(passwd);
  
  // const buf = await crypto.subtle.digest("SHA-256", new TextEncoder("utf-8").encode(passwd));
  
  const { createHmac } = await import('node:crypto');
  const secret = 'abcdefg';
  const buf = createHmac('sha256', secret).update('I love cupcakes').digest('hex');

  let hash = Array.prototype.map.call(new Uint8Array(buf), x=>(('00'+x.toString(16)).slice(-2))).join('');
  res.push(hash);
  return res;
}

async function getHash(index) {
  let res = await readSmartContractFunction("binance-testnet", scAddress, "products", [index]);
  let product = res.data.response;
  let hash = await addHash(product[0], product[2])
  // let spanHash = document.getElementById("hash");
  // spanHash.innerHTML = hash ;
  return hash;
}

async function removeHash(pwd, cid)
{
  let Data = await getIpfsData(cid)
  let hashobj = Data.data
  let valid = await validHash(hashobj, pwd)
  if ( valid == true)
  {
    console.log("Hash CID uploaded")
    let upload = await uploadToIpfs('hash.json', hashobj)
    return upload.data.cid
  }
  return 0;
}

// function addReview(obj, review) {
//   obj[Object.keys(obj).length] = review
// }

async function validHash(hashobject, passwd) {
  let rvalue = false;

  // const buf = await crypto.subtle.digest("SHA-256", new TextEncoder("utf-8").encode(passwd));
  
  const { createHmac } = await import('node:crypto');
  const secret = 'abcdefg';
  const buf = createHmac('sha256', secret).update('I love cupcakes').digest('hex');
  // console.log(buf);
  
  let testhash = Array.prototype.map.call(new Uint8Array(buf), x=>(('00'+x.toString(16)).slice(-2))).join('');

  Object.keys(hashobject).forEach(key => {
    if (testhash == hashobject[key]) {
      rvalue = true;
      delete hashobject[key];
      return ; 
    }
  })
  return (rvalue);
}

async function getIpfsData(cid) {
  console.log("cid : ", cid);
  const res = await ipfs.get(cid)
  .catch(function (error) { return error; });
  console.log("getipfsdata : ", res.data);
  return res;
}



async function uploadReview(pwd, newReview, cid, id, oldCid, wallet)
{
  let hashcid = await removeHash(pwd, oldCid);
  if (hashcid == 0)
    return
  let reviews;

  //function call to get ProductCID
  if(cid == "") {
    console.log("vide")
    reviews = {}
  } 
  else {
    let Data = await getIpfsData(cid)
    reviews = Data.data
    console.log("res get review ipfsdata : ", reviews);
  }
  // addReview(reviews, newReview)
  let upload = await uploadToIpfs('cid.json', reviews)
  let param = [id, upload.data.cid, hashcid]
  await callSmartContractFunction('binance-testnet', scAddress, "setAllCID", param);
  await callSmartContractFunction('binance-testnet', scAddress, "sendRewardFromPool", [wallet, id]);
}



module.exports = {
  getReviews: async (req, res) => {
    console.log("req reviews : ", req.body);

    // let cid = req.truc;
    // const res = await ipfs.get(cid)
    // .catch(function (error) { return error; });
    // return res;
  },

  getIpfsData: async (cid) => {
    console.log("cid reviews : ", cid);

    // let cid = req.body.cid;
    const res = await ipfs.get(cid)
    .catch(function (error) { return error; });
    return res;
  },
  // uploadToIpfs: async function uploadToIpfs(filename, jsonobj) {
  //   const res = await httpA.post("/ipfs/json", {
  //     "name" : filename,
  //     "content" : jsonobj
  //   })
  //   .catch(function (error) { return error; });
  //   console.log(res);
  //   return res;
  // }

  addReview: async (req, res) => {

    console.log("req pour recup id du produit : ", req.body);
    let review = req.body.review;
    let id = req.body.id;

    let hash = await getHash(id);
    console.log("hash : ", hash);

    let res3 = await readSmartContractFunction("binance-testnet", scAddress, "products", [i]);
    let product2 = res3.data.response;
    await uploadReview(pwd, review, product2[3], parseInt(product2[0], 10), product2[2], wallet);

  

    // let productId;
    // let newCidReview;
    // let newCidHash;

    // let params = [productId, newCidReview, newCidHash];
    // let ret = await readSmartContractFunction(
    //   "binance-testnet",
    //   scAddress,
    //   "setAllCID",
    //   params
    // );
    // res.json(ret.data.response);
  }
}
