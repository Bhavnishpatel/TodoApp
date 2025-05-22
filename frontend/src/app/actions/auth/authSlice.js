import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState={
    isAuthenticated:false
}    

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.isAuthenticated=true
            console.log(state.isAuthenticated);
            
        },
        logout:(state,action)=>{
            state.isAuthenticated=false
        },
    },
});

export const {login,logout}=authSlice.actions;
export default authSlice.reducer;