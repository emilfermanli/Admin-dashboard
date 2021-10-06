import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState"


const dataUsers = (state = initialState.users, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_LIST:
            return action.payload;
        default:
            return state;
    }
};

export default dataUsers;