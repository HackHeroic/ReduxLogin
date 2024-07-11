import { takeEvery, call, put, all } from 'redux-saga/effects';
import { GET_SIGNIN_STATUS, GET_TO_HOMEPAGE } from '../actions/all-actions';

async function signInFetch(payload) {
    const response = await fetch('https://academics.newtonschool.co/api/v1/user/login', {
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

function* workGetSignInStatus(action) {
    const { status, data } = yield call(signInFetch, action.payload);
    const signInName = data.user.name;
    yield put({ type:GET_TO_HOMEPAGE, status, name: signInName });
}

function* signInSaga() {
    yield takeEvery(GET_SIGNIN_STATUS, workGetSignInStatus);
}

export default signInSaga;
