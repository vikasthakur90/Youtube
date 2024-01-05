import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:"video",
    initialState:{
        video:[]
    },
    reducers:{
        addVideo:(state,action)=>{
            state.video.length=0;
            state=state.video.push(action.payload);
        }
    }

});
export const {addVideo} = videoSlice.actions;
export default videoSlice.reducer;
