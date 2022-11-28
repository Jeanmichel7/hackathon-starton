import {initWeb3} from '../../../services/wallet.service'

let initialStates = {
    isLoading: false,
    wallet: null,
    errorMessage: null,
}

let actionTypes = {
    WALLET_LOAD_START:'WALLET_LOAD_START',
    WALLET_LOAD_SUCESS:'WALLET_LOAD_SUCESS',
    WALLET_LOAD_ERROR:'WALLET_LOAD_ERROR'
}

const   walletLoadStart = () => ({
    type : actionTypes.WALLET_LOAD_START
});

const   walletLoadSuccess = (wallet) => ({
    type : actionTypes.WALLET_LOAD_SUCESS,
    payload : wallet
});

const   walletLoadError = (errorMessage) => ({
    type : actionTypes.WALLET_LOAD_ERROR,
    payload : errorMessage
});

export const walletReducer = (state = initialStates, { type, payload }) => {

    switch (type) {
        case actionTypes.WALLET_LOAD_START:
            return {
                ...state,
                isLoading: true,
                wallet: null,
                errorMessage: null,
            };

        case actionTypes.WALLET_LOAD_SUCESS:
            return {
                ...state,
                isLoading: false,
                wallet: payload,
            };

        case actionTypes.WALLET_LOAD_ERROR:
            return {
                ...state,
                isLoading: true,
                errorMessage: payload,
            };

        default:
            return state
    }
};

export const loadWalletAsync = () => (dispatch) => {
    dispatch(walletLoadStart());

    initWeb3()
        .then((response) => dispatch(walletLoadSuccess(response)))
        .catch((error) => dispatch(walletLoadError(error.message)));
}

export default {
    loadWalletAsync,
    walletReducer,
};
