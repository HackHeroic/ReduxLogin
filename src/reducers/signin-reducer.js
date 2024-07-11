import { GET_TO_HOMEPAGE } from "../actions/all-actions";

export const signInReducer = (state = {status:"fail",name:""},action) =>{
    switch(action.type){
        case GET_TO_HOMEPAGE:
            return {...state,status:action.status,name:action.name}
        default:
            return state;
    }
}
