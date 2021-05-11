import { createStore } from "redux";
import batchReducer from "./batch/batchReducers";

const store = createStore(batchReducer);

export default store;
