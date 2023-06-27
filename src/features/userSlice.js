import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    photo: "",

};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLogoinDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;

        },
        setSingOutState:(state)=>{
            state.name=null;
            state.email=null;
            state.photo=null;
        },
    },
});
export const {setUserLogoinDetails,setSingOutState}=userSlice.actions ( );
export const selectUserName =(state)=> state.user.name;
export const selectUserEmail =(state)=> state.user.email;
export const selectUserphoto =(state)=> state.user.photo;