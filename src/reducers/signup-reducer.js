import { GO_TO_SIGNIN_PAGE } from "../actions/all-actions";

export const signUpReducer = (state = {status:"fail",name:""},action) => {
    switch(action.type){
        case GO_TO_SIGNIN_PAGE:
            return {...state,status:action.status,name:action.name}

        default:
            return state;
    }
}