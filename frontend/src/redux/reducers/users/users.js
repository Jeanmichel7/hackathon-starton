import UsersService from '../../../services/users.service'

let initialStates = {
    isLoading: false,
    users: null,
    errorMessage: null,
}

let actionTypes = {
    USERS_LOAD_START:'USERS_LOAD_START',
    USERS_LOAD_SUCESS:'USERS_LOAD_SUCESS',
    USERS_LOAD_ERROR:'USERS_LOAD_ERROR'
}

const   usersLoadStart = () => ({
    type : actionTypes.USERS_LOAD_START
});

const   usersLoadSuccess = (users) => ({
    type : actionTypes.USERS_LOAD_SUCESS,
    payload : users
});

const   usersLoadError = (errorMessage) => ({
    type : actionTypes.USERS_LOAD_ERROR,
    payload : errorMessage
});

export const usersReducer = (state = initialStates, { type, payload }) => {

    switch (type) {
        case actionTypes.USERS_LOAD_START:
            return {
                ...state,
                isLoading: true,
                users: null,
                errorMessage: null,
            };

        case actionTypes.USERS_LOAD_SUCESS:
            return {
                ...state,
                isLoading: false,
                users: payload,
            };

        case actionTypes.USERS_LOAD_ERROR:
            return {
                ...state,
                isLoading: true,
                errorMessage: payload,
            };

        default:
            return state
    }
};

export const loadUsersAsync = () => (dispatch) => {
    dispatch(usersLoadStart());

    UsersService.getWalletsList()
        .then((response) => dispatch(usersLoadSuccess(response.data)))
        .catch((error) => dispatch(usersLoadError(error.meesage)));
}

export default {
    loadUsersAsync,
    usersReducer,
};