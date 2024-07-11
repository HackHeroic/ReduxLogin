import { combineReducers } from "redux";
import { signUpReducer } from "./signup-reducer";
import { signInReducer } from "./signin-reducer";

export const rootReducer = combineReducers({
    signUp:signUpReducer,
    signIn:signInReducer
});

export default rootReducer;