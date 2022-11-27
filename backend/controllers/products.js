let scAddress = process.env.SC_ADDRESS;
const { readSmartContractFunction, callSmartContractFunction, uploadToIpfs } = require('../controllers/commun');
const { getIpfsData, genPassAndHash } = require('../controllers/reviews');
const fs = require('fs');


module.exports = {
  getAllProducts: async (req, res) => {
    let ret = await readSmartContractFunction("binance-testnet", scAddress, "total_products", []);
    let nbProducts = ret.data.response;

    let allProducts = [];
    for (let i = 0; i < nbProducts; i++) {
      let product = await readSmartContractFunction("binance-testnet", scAddress, "products", [i]);
      // console.log("product ", product);
      allProducts.push(product.data.response);
    }
    res.status(200).json(allProducts);
    // res.json(allProducts);
  },

  getProductParam: async (req, res) => {
    // console.log("req body : ", req.params.productId);
    let ret = await readSmartContractFunction("binance-testnet", scAddress, "products", [req.params.productId]);
    // console.log("ret getproduct: ", ret.data);
    res.json({data: ret.data.response});
  },

  getProductId: async (req, res) => {
    let ret = await readSmartContractFunction("binance-testnet",
     scAddress, "products", [req.body.id]);
    // console.log("ret get product : ", ret.data);

    let product = {
      "id": ret.data.response[0],
      "name": ret.data.response[1],
      "description": ret.data.response[2],
      "img_cid": ret.data.response[3],
      "review_cid": ret.data.response[4],
      "hash_cid": ret.data.response[5],
      "token_pool": ret.data.response[6]
    }
    // console.log("product[" + req.body.id + "] : " , product);
    // let retReviews = await getIpfsData(product.review_cid);
    // console.log("data review : ", retReviews.data);
    res.status(200).json(product);
  },

  generatePwd: async (req, res) => {
    // console.log("back generatePwd body : ", req.body);
    let name = req.body.name;
    let tabHash = {};
    let tabPwd = "";

    // gene 100pass
    for(let i = 0; i < 100; i++) {
      let ret = await genPassAndHash();
      tabPwd += ret[0] + "\n";
      tabHash[i] = ret[1];
    }
    let hashFile = await uploadToIpfs("hashFile", tabHash);

    //composer file de tout les pass -> github
    fs.appendFile(name + '_PasswordFileProduct.txt', tabPwd, function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
    return res.status(200).json(hashFile.data.cid);
  }
}

