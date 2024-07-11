import { GET_SIGNUP_STATUS,GO_TO_SIGNIN_PAGE } from "./all-actions";
import { GET_SIGNIN_STATUS,GET_TO_HOMEPAGE } from "./all-actions";

export const getSignUp = (payload) => {
    return {
        type:GET_SIGNUP_STATUS,
        payload
    }
}

export const getSignIn = (payload) => {
    return {
        type:GET_SIGNIN_STATUS,
        payload
    }
}