import axios from "axios";
import { api } from "../../config/api";
import { GET_ALL_USERS_FAILURE, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS } from "./getUser.actionType";

export const getAllUserAction=()=>async(dispatch)=>{
    dispatch({type:GET_ALL_USERS_REQUEST});

    try {
        const {data}=await api.get('/api/users')
        dispatch({type:GET_ALL_USERS_SUCCESS,payload:data});
        console.log("got all user",data);
        return {payload: data };
        
    } catch (error) {
        console.log("eorror",error);
        dispatch({type:GET_ALL_USERS_FAILURE,payload:error});
        return { error };
    }
}
