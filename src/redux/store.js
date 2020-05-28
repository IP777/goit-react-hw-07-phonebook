import { compose, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { rootReducer } from "./contactReducer";
import persistState from "redux-localstorage";
//https://www.npmjs.com/package/redux-localstorage#configslicer
//https://www.npmjs.com/package/redux-persist

const enhancer = compose(devToolsEnhancer(), persistState());

//1шаг Создание хранилища
//Enhancer - подключения к firefox/chrome-redux
const store = createStore(rootReducer, enhancer);

export default store;

