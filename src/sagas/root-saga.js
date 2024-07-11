import { all } from 'redux-saga/effects';
import signUpSaga from './signup-saga';
import signInSaga from './signin-saga';


function * rootSaga(){
    yield all([
        signUpSaga(),
        signInSaga()
    ])
}

export default rootSaga;