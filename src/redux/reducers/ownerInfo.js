import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState"


const ownerInfo = (state = initialState.info, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_INFO:
            return action.payload;
        default:
            return state;
    }
};

export default ownerInfo;