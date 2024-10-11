import axios from "axios";
import { CREATE_COMMENT_REQUEST, CREATE_COMMENT_SUCCESS, CREATE_USER_POST_FAILURE, CREATE_USER_POST_REQUEST, CREATE_USER_POST_SUCCESS, GET_ALL_USERS_POST_FAILURE, GET_ALL_USERS_POST_REQUEST, GET_ALL_USERS_POST_SUCCESS, GET_USER_POST_FAILURE, GET_USER_POST_REQUEST, LIKE_USER_POST_FAILURE, LIKE_USER_POST_REQUEST, LIKE_USER_POST_SUCCESS } from "./post.actionType"
import { api } from "../../config/api";
import { GET_PROFILE_SUCCESS } from "../auth.actionType";

export const createPostAction=(postData)=>async(dispatch)=>{
    dispatch({type:CREATE_USER_POST_REQUEST});

    try {
        const {data}=await api.post('/api/posts',postData);
        dispatch({type:CREATE_USER_POST_SUCCESS,payload:data});
        console.log("created post",data);
        
    } catch (error) {
        console.log("eorror",error);
        dispatch({type:CREATE_USER_POST_FAILURE,payload:error});
    }
}

export const getAllPostAction=()=>async(dispatch)=>{
    dispatch({type:GET_ALL_USERS_POST_REQUEST});

    try {
        const {data}=await api.get('/api/posts')
        dispatch({type:GET_ALL_USERS_POST_SUCCESS,payload:data});
        console.log("got all post",data);
        
    } catch (error) {
        console.log("eorror",error);
        dispatch({type:GET_ALL_USERS_POST_FAILURE,payload:error});
    }
}
export const getUserPostAction=(userId)=>async(dispatch)=>{
    dispatch({type:GET_USER_POST_REQUEST});

    try {
        const {data}=await api.get(`/posts/user/${userId}`)
        dispatch({type:GET_PROFILE_SUCCESS,payload:data});
        console.log("got user post",data);
        
    } catch (error) {
        console.log("eorror",error);
        dispatch({type:GET_USER_POST_FAILURE,payload:error});
    }
}

export const likeUserPostAction=(postId)=>async(dispatch)=>{
    dispatch({type:LIKE_USER_POST_REQUEST});

    try {
        const {data}=await api.put(`/api/posts/like/${postId}`)
        dispatch({type:LIKE_USER_POST_SUCCESS,payload:data});
        console.log("liked user post",data);
        
    } catch (error) {
        console.log("eorror",error);
        dispatch({type:LIKE_USER_POST_FAILURE,payload:error});
    }
}

export const createCommentAction=(reqData)=>async(dispatch)=>{
    dispatch({type:CREATE_COMMENT_REQUEST});

    try {
        const {data}=await api.post(`/api/comment/posts/${reqData.postId}`,reqData.data);
        dispatch({type:CREATE_COMMENT_SUCCESS,payload:data});
        console.log("created comment",data);
        
    } catch (error) {
        console.log("eorror",error);
        dispatch({type:CREATE_USER_POST_FAILURE,payload:error});
    }
}