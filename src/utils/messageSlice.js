import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name:"message",
    initialState:{
        chats:[]
    },
    reducers:{
        addMessage:(state,action) =>{
           state.chats.splice(50,1);
           state= state.chats.push(action.payload);
        }
    }
})

export const {addMessage} = messageSlice.actions;
export default messageSlice.reducer;