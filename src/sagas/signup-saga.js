import { takeEvery, call, put, all } from 'redux-saga/effects';
import { GET_SIGNUP_STATUS, GO_TO_SIGNIN_PAGE } from '../actions/all-actions';

async function signUpFetch(payload) {
    const response = await fetch('https://academics.newtonschool.co/api/v1/user/signup', {
        method: "POST",
        headers: {
            "accept": "application/json",
            "projectID": "ebho1pl2y3wb",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    const data = await response.json();
    return data;
}

function* workGetSignUpStatus(action) {
    const { status, data } = yield call(signUpFetch, action.payload);
    const signUpName = data.user.name;
    yield put({ type: GO_TO_SIGNIN_PAGE, status, name: signUpName });
}

function* signUpSaga() {
    yield takeEvery(GET_SIGNUP_STATUS, workGetSignUpStatus);
}

export default signUpSaga;
