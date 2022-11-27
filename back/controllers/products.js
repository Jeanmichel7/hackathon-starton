let scAddress = "0x5F9A9EeBa8914e95E02C1c69792e2b1C14440bCE";
const { readSmartContractFunction, callSmartContractFunction } = require('../controllers/commun');
const { getIpfsData } = require('../controllers/reviews');

/* temporaire */


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

}

