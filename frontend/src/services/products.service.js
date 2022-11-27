import apiClient from "../helper/apiClient";

class ProductsService {
    getWalletsList = () => apiClient().get('allProducts');
}

export default new ProductsService();