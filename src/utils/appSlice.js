import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenu:true,
    },
    reducers:{
        toggleMenu : (state)=>{
            state.isMenu = !state.isMenu;
        },
        closeMenu:(state)=>{
            state.isMenu = false;
        }
    }
});

export const {toggleMenu,closeMenu} = appSlice.actions;
export default appSlice.reducer;