import { combineReducers } from "redux";
import {usersReducer} from "./users/users";
import { productsReducer } from "./products/products"
import { walletReducer } from "./wallet/wallet";

const rootReducer = () => combineReducers({
    users: usersReducer,
    products: productsReducer,
    wallet: walletReducer
});

export default rootReducer;