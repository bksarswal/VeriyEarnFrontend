import { createStore, applyMiddleware, compose } from "redux";
import {thunk} from "redux-thunk"; 
import authReducer from "../Reducer/AuthReducer";

// Enable Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Redux store with middleware
const Store = createStore(authReducer, composeEnhancers(applyMiddleware(thunk)));

export default Store;
