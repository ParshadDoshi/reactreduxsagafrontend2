import { call, put, takeLatest } from 'redux-saga/effects';
import { REGISTER_USER, registerUserFailure, registerUserSuccess, USER_LOGIN, loginUserFailure, loginUserSuccess } from './../action/UserAction'
import api from './UserApi'

function* createUser(action) {

    try {
        console.log("Action DAta User Saga is" + JSON.stringify(action.data))

        const { name, email, password } = action.data;
        const { data } = yield call(api.createUser, { name, email, password });

        //const  {data}= yield call(api.products);
        console.log("User saga" + JSON.stringify(data))
        yield put(registerUserSuccess(data));

    } catch (err) {
        yield put(registerUserFailure());
        console.log(err);
    }
}

function* login(action) {

    console.log("ACtion in Login is " + JSON.stringify(action))
    const { email, password } = action.payload;
    try {

        const data = yield call(api.login, { email, password });
        yield put(loginUserSuccess(data))

        //  action.history.push("/products")
        action.onSuccess()
    } catch (err) {

        action.onFailure(err.response.data);
    }

}

/* function* login(action) {

    try {
        const { email, password } = action.data;
        const { data } = yield call(api.login, { email, password });
        yield put(loginUserSuccess(data));

        console.log("Data is" + JSON.stringify(data))
    } catch (err) {
        yield put(loginUserFailure());
        console.log(err);
    }
} */
export default function* UserSaga() {

    yield takeLatest(REGISTER_USER, createUser);
    yield takeLatest(USER_LOGIN, login);

}
