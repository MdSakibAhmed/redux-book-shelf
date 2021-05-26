import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { bookReducer } from "./reducers/bookReducer";

const combineReducer = combineReducers({
    books:bookReducer
}) 

export const store = createStore(combineReducer,composeWithDevTools())