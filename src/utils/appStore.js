import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice";
import messageReducer from "./messageSlice";
const appStore = configureStore({
    reducer:{
        app:appReducer,
        search:searchReducer,
        message:messageReducer
    }
});
 
export default appStore; 