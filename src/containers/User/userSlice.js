

import { createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import jwt from 'jwt-decode';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: ''
    },
    reducers: {
        login: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        logout: (state, action) => {
            return{
                ...state.initialState
            }
        },
        signup: (state, action) => {
            return {
                ...state,
                isRegister: true,
                successMessage: 'You have been sign succesfully'
            }
        },
    }
});

export const loginUser = (body) => async (dispatch) => {
    try {
        const user = await axios.post("https://aml-mysql-28-06-22-videostore.herokuapp.com/users/login", body);
    
        let decode = jwt(user.data.token);

        if(user.status === 200) {
            dispatch(login({...decode,token: user.data.token}))
        }

    }catch(error){
        console.log(error)
    }
};

export const signupUser = (email, password, name, phone, address) => async (dispatch) => {
    try {
        const user = await axios.post('https://aml-mysql-28-06-22-videostore.herokuapp.com/users/register',
        {
            name: name,
            password: password,
            phone: phone,
            email: email,
            address: address
        })

        let response = user
        if(response.status === 200){
            dispatch(signup(response.data))
        } 
    } catch (error) {
        dispatch(logError(error))
    }
}


export const { login, logout, signup } = userSlice.actions;

export const userData = (state) => state.user;

export default userSlice.reducer;



