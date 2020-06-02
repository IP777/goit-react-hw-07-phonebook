import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./contactReducer";
//import logger from "./middleware/logger";
import thunk from "./middleware/thunk";
import throttle from "./middleware/throttle";

const middleware = [thunk, throttle];
const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
