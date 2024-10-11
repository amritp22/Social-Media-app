import { GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS } from "./getUser.actionType";

const initialState = {
    error: null,
    loading: false,
    userList: []

};

export const getAllUserReducer=(state = initialState, action)=>{

    switch (action.type) {
        case GET_ALL_USERS_REQUEST:
             return {...state,error:null,loading:false}
            
        case GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                userList:action.payload,
                error:null,
                loading:false,
            }    
            
        default:
            return state;    

    }
}