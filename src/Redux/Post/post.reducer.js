import { CREATE_COMMENT_SUCCESS, CREATE_USER_POST_FAILURE, CREATE_USER_POST_REQUEST, CREATE_USER_POST_SUCCESS, GET_ALL_USERS_POST_FAILURE, GET_ALL_USERS_POST_REQUEST, GET_ALL_USERS_POST_SUCCESS, LIKE_USER_POST_FAILURE, LIKE_USER_POST_REQUEST, LIKE_USER_POST_SUCCESS } from "./post.actionType";

const initialState = {
    post: null,
    error: null,
    loading: false,
    like:null,
    posts: [],
    comments:[],
    newComment:null

};

export const postReducer=(state = initialState, action)=>{

    switch (action.type) {
        case GET_ALL_USERS_POST_REQUEST:
        case CREATE_USER_POST_REQUEST:
        case LIKE_USER_POST_REQUEST:
             return {...state,error:null,loading:false}
            
        case CREATE_USER_POST_SUCCESS:
            return {
                ...state,post:action.payload,
                posts:[action.payload,...state.posts],
                error:null,loading:false
            }
        case GET_ALL_USERS_POST_SUCCESS:
            return {
                ...state,posts:action.payload,
                comments:action.payload.comments,
                error:null,loading:false,
            }
        case CREATE_COMMENT_SUCCESS:
            return {
                    ...state,
                    post:action.payload,
                    // posts:action.payload,
                    newComment:action.payload,
                    error:null,loading:false,
            }    
        case LIKE_USER_POST_SUCCESS:
            return {
                ...state,
                like:action.payload,
                //done to update post data which is liked
                posts:state.posts.map(
                    (item)=>item.id===action.payload.id?action.payload:item
                ),
                error:null,loading:false
            }    
        case GET_ALL_USERS_POST_FAILURE:
        case LIKE_USER_POST_FAILURE:
        case CREATE_USER_POST_FAILURE:
            return {...state,error:action.payload,loading:false}    
            
        default:
            return state;    

    }
}