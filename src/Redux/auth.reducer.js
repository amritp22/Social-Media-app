// import { GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./auth.actionType";

// const initialState={
//     jwt:null,
//     error:null,
//     loading:false,
//     user:null
// }
import { 
    GET_PROFILE_REQUEST, 
    GET_PROFILE_SUCCESS, 
    LOGIN_FAILURE, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    REGISTER_FAILURE, 
    REGISTER_REQUEST, 
    REGISTER_SUCCESS, 
    UPDATE_PROFILE_REQUEST, 
    UPDATE_PROFILE_SUCCESS, 
    UPDATE_PROFILE_FAILURE, 
    LOGOUT_USER
} from "./auth.actionType";

const initialState = {
    jwt: null,
    error: null,
    loading: false,
    user: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
        case GET_PROFILE_REQUEST:
        case UPDATE_PROFILE_REQUEST:
            return { 
                ...state, 
                loading: true, 
                error: null 
            };
            
        case GET_PROFILE_SUCCESS:
            return { 
                ...state, 
                user: action.payload, 
                loading: false, 
                error: null 
            };
            
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return { 
                ...state, 
                jwt: action.payload.token,  // Assuming the token is inside `payload.token`
                user: action.payload.user,  // Assuming the user details are inside `payload.user`
                loading: false, 
                error: null 
            };
            
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                user: { ...state.user, ...action.payload }, // Update user data with new profile info
                loading: false,
                error: null
            };
        
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
        case UPDATE_PROFILE_FAILURE:
            return { 
                ...state, 
                loading: false, 
                error: action.payload 
            };
        case LOGOUT_USER:
                return {
                    ...state,
                    jwt: null,
                    error: null,
                    loading: false,
                    user: null
                };    
        default:
            return state;
    }
};

// export const authReducer=(state=initialState,action)=>{
//     switch (action.type) {
//         case LOGIN_REQUEST:
//         case REGISTER_REQUEST:
//         case GET_PROFILE_REQUEST:
//             return  {...state,loading:true,error:null}
//         case GET_PROFILE_SUCCESS:
//             return  {...state,user:action.payload,loading:true,error:null}
            
//         case LOGIN_SUCCESS:
//         case REGISTER_SUCCESS:
//             return  {...state,jwt:action.payload,loading:false,error:null}    
//         case LOGIN_FAILURE:
//         case REGISTER_FAILURE:    
//                 return  {...state,loading:false,error:action.payload}     
//         default:
//             return state;
//     }
// }