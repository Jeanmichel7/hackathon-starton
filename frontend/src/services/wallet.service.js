import {ABI, contractAddr} from "../helper/abi.js";
import {ethers} from 'ethers';

let provider = ethers.getDefaultProvider("https://bsctestapi.terminet.io/rpc");

export async function SCgetBalance(web3Obj) {
	let balance = await web3Obj.provider.getBalance(web3Obj.publicAddr);
	balance = ethers.utils.formatUnits(balance.toBigInt(), 18);
	return balance;
}

export async function SCgetFFULBalance(web3Obj) {
	let ffulbalance = await web3Obj.contract.balanceOf(web3Obj.pubAddr);
	ffulbalance = ethers.utils.formatUnits(ffulbalance.toBigInt(), 18);
	return ffulbalance;
}

export async function SCaddProduct(web3Obj, name, details, imageCID, hashCID) {
	if (name.length < 3 || name.length > 24) {
		console.log("Product name must be between 3 and 24 characters");
		return false;
	}
	if (details.length <= 8) {
		console.log("Product details must be at least 8 characters");
		return false;
	}
	await web3Obj.contract.addProduct(name, details, imageCID, hashCID);
	return true;
}

export async function SCgetProduct(web3Obj, id) {
	let product = await web3Obj.contract.products(id);
	return product;
}

async function changeNetwork() {
	window.ethereum.request({
		method: "wallet_addEthereumChain",
		params: [{
			chainId: "0x61",
			rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
			chainName: "BSC Testnet",
			nativeCurrency: {
				name: "BNB",
				symbol: "tBNB",
				decimals: 18
			},
			blockExplorerUrls: ["https://test.bscscan.com/"]
		}]
	});
}

export async function initWeb3() {
	let web3Obj= {}
	web3Obj.provider = new ethers.providers.Web3Provider(window.ethereum);
	await web3Obj.provider.send("eth_requestAccounts", []);
	web3Obj.signer = web3Obj.provider.getSigner();
	await changeNetwork();
	web3Obj.pubAddr = await web3Obj.signer.getAddress();
	web3Obj.contractAddr = contractAddr;
	web3Obj.contract = new ethers.Contract(web3Obj.contractAddr, ABI, web3Obj.signer);
	web3Obj.ffulBalance = SCgetFFULBalance(web3Obj);
	console.log(web3Obj);
	return web3Obj;
}

