let scAddress = "0xE953d24BB968AaBD55855759A120D0b88c8DD468";
const { readSmartContractFunction } = require('../controllers/commun');


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
    res.json(allProducts);
  },

  getProductParam: async (req, res) => {
    // console.log("req body : ", req.params.productId);
    let ret = await readSmartContractFunction("binance-testnet", scAddress, "products", [req.params.productId]);
    // console.log("ret getproduct: ", ret.data);
    res.json({data: ret.data.response});
  },

  getProductId: async (req, res) => {
    let ret = await readSmartContractFunction("binance-testnet", scAddress, "products", [req.body.id]);
    res.json(ret.data.response);
  },

  AddReview: async (req, res) => {
    // put the review in the blockchain
      // newCIDreview = await addReviewToIPFS(req.body.review);

    // delete hash to IPFS

    // jsais plus

    let params = [];
    let ret = await readSmartContractFunction(
      "binance-testnet",
      scAddress,
      "setAllCID",
      params
    );
    res.json(ret.data.response);
  }
}

