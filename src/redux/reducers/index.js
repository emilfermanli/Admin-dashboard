import { combineReducers } from "redux";
import dataUsers from "./usersList"
import dataSubscribes from "./subscribes"
import ownerInfo from "./ownerInfo"

const reducers = combineReducers({
    dataUsers,
    dataSubscribes,
    ownerInfo
});

export default reducers;