import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice";
import messageReducer from "./messageSlice";
import videoReducer from "./videoSlice";
const appStore = configureStore({
    reducer:{
        app:appReducer,
        search:searchReducer,
        message:messageReducer,
        video:videoReducer
    }
});
 
export default appStore; 