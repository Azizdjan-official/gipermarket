import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value:{},

};

export const filterSlice =createSlice({
    name: "filter",
    initialState,
    reducers:{
        createFilter:(state,action)=>{ 
            return {...state,value:{...state.value,[action.payload.keyName]:action.payload.value}};
        }
    }
})

export default filterSlice.reducer;

export const { createFilter }= filterSlice.actions;