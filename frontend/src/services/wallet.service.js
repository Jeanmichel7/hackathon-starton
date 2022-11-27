import {ABI} from "../helper/abi.js";
import {ethers} from 'ethers';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const publicAddr = signer.getAddress();
const faithfulContract = new ethers.Contract("0x5F9A9EeBa8914e95E02C1c69792e2b1C14440bCE", ABI, signer);

export async function setupMetamask() {
    let res = await provider.send("eth_requestAccounts", []);
    return(res)
}

async function SCgetBalance() {
	let balance = await provider.getBalance(publicAddr);
	balance = ethers.utils.formatUnits(balance.toBigInt(), 18);
	return balance;
}

async function SCgetFFULBalance() {
	let ffulbalance = await faithfulContract.balanceOf(publicAddr);
	ffulbalance = ethers.utils.formatUnits(ffulbalance.toBigInt(), 18);
	return ffulbalance;
}

async function SCaddProduct(name, details, imageCID, hashCID) {
	if (name.length < 3 || name.length > 24) {
		console.log("Product name must be between 3 and 24 characters");
		return false;
	}
	if (details.length >= 8) {
		console.log("Product details must be at least 8 characters");
		return false;
	}
	await faithfulContract.addProduct(name, details, imageCID, hashCID);
	return true;
}
/*
async function SCgetProduct(id) {
	let product = await faithfulContract.products(id);
	return product;
}*/
