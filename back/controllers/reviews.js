const {ipfs, readSmartContractFunction,
   callSmartContractFunction } = require('../controllers/commun');

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
  }
  // uploadToIpfs: async function uploadToIpfs(filename, jsonobj) {
  //   const res = await httpA.post("/ipfs/json", {
  //     "name" : filename,
  //     "content" : jsonobj
  //   })
  //   .catch(function (error) { return error; });
  //   console.log(res);
  //   return res;
  // }
}
