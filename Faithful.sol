// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract FaitfulToken is Ownable, ERC20 {

    uint public total_products;

    uint    product_cost = 1000000000000000000000000;

    struct  product {
        uint    ID;
        string  details;
        string  hashCID;
        string  reviewsCID;
        uint    tokenPool;
    }

    product[]   public products;

    constructor() ERC20("FaitfulToken", "FFUL") Ownable() {
        _mint(msg.sender, 1000000000000000000000000000);
        addProduct("Premier objet");
        addProduct("Deuxieme objet");
        addProduct("Troisieme objet");
    }


    function addProduct(string memory _details) public {
        require(bytes(_details).length >= 8, "Products details need to be at least 8 characters");
        require(product_cost <= balanceOf(msg.sender), "Not enough FFUL Token");
        _transfer(msg.sender, address(this), product_cost);
        product memory temp_product;
        temp_product.ID = total_products;
        temp_product.details = _details;
        temp_product.tokenPool = product_cost;
        total_products++;
        products.push(temp_product);
    }


    function setAllCID(uint _ID, string memory _reviewsCID, string memory _hashCID) external onlyOwner {
        require(bytes(_reviewsCID).length > 10, "Bad Review file CID");
        require(bytes(_hashCID).length > 10, "Bad Hash file CID");
        products[_ID].hashCID = _hashCID;
        products[_ID].reviewsCID = _reviewsCID;
    }


    function setHashCID(uint _ID, string memory _hashCID) external onlyOwner {
        require(bytes(_hashCID).length > 10, "Bad Hash file CID");
        products[_ID].hashCID = _hashCID;
    }


    function getRewardAmount(uint _ID) private view returns(uint) {
        uint temp_amount = products[_ID].tokenPool;
        temp_amount = temp_amount / 1000;   
        return(temp_amount);
    }


    function sendRewardFromPool(address _address, uint _ID) external onlyOwner {
        require(products[_ID].tokenPool > 0);
        uint rewardAmount = getRewardAmount(_ID);
        products[_ID].tokenPool -= rewardAmount;
        _transfer(address(this), _address, rewardAmount);
    }


    function setProductCost(uint _cost) external onlyOwner {
        product_cost = _cost;
    }
}
