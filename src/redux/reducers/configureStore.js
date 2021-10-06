import { createStore, applyMiddleware } from "redux";
import reducers from "./index";
import thunk from "redux-thunk"

export default function configureStore() {
    return createStore(reducers, applyMiddleware(thunk));
}
