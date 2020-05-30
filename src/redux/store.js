import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./contactReducer";
//import logger from "./middleware/logger";
import thunk from "./middleware/thunk";
//https://www.npmjs.com/package/redux-localstorage#configslicer
//https://www.npmjs.com/package/redux-persist

//const enhancer = compose(devToolsEnhancer(), persistState());
const middleware = [thunk];
const enhancer = applyMiddleware(...middleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
