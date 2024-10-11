import axios from "axios"
import { GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_USER, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS } from "./auth.actionType"
import { api, API_BASE_URL } from "../config/api"

export const loginUserAction=(loginData)=>async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
    try {
        const {data}=await axios.post(`${API_BASE_URL}/auth/signin`,loginData.data);
        
        if(data.token){
            console.log("loginFi");
            window.localStorage.setItem("jwt",data.token);
        }
        console.log("login",data);
        
        dispatch({type:LOGIN_SUCCESS,payload:data.token})
    } catch (error) {
        console.log("error----",error);
        dispatch({type:LOGIN_FAILURE,error:error})
    }
    
}
export const registerUserAction=(loginData)=>async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    try {
        const {data}=await axios.post(`${API_BASE_URL}/auth/signup`,loginData.data);
        if(data.token){
            localStorage.setItem("jwt",data.token);
        }
        console.log("register---",data);
        
        dispatch({type:REGISTER_SUCCESS,payload:data.token})
    } catch (error) {
        console.log("error----",error);
        dispatch({type:REGISTER_FAILURE,error:error})
    }
    
}
// auth.action.js
export const logoutUserAction = () => (dispatch) => {
    // Remove the JWT token from localStorage
    localStorage.removeItem('jwt');

    // Dispatch an action to reset the auth state
    dispatch({ type: LOGOUT_USER });
};

export const getProfileAction=(jwt)=>async(dispatch)=>{
    dispatch({type:GET_PROFILE_REQUEST})
    try {
        const {data}=await axios.get(`${API_BASE_URL}/api/users/profile`,{
            headers:{
                Authorization:`Bearer ${jwt}`
            }
        });
        
        console.log("get profile---",data);
        
        dispatch({type:GET_PROFILE_SUCCESS,payload:data})
    } catch (error) {
        console.log("error----",error);
        dispatch({type:GET_PROFILE_FAILURE,error:error})
    }
    
}

export const updateProfileAction=(reqData)=>async(dispatch)=>{
    dispatch({type:UPDATE_PROFILE_REQUEST})
    try {
        //api is defined in config with aaxios.create
        const {data}=await api.put(`${API_BASE_URL}/api/user`,reqData);
        
        console.log("update profile---",data);
        
        dispatch({type:UPDATE_PROFILE_SUCCESS,payload:data})
    } catch (error) {
        console.log("error----",error);
        dispatch({type:UPDATE_PROFILE_FAILURE,error:error})
    }
    
}