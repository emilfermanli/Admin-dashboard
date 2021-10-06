import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState"


const dataSubscribes = (state = initialState.subscribes, action) => {
    switch (action.type) {
        case actionTypes.GET_SUBSCRIBES:
            return action.payload;
        default:
            return state;
    }
};

export default dataSubscribes;