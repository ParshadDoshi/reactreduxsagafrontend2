export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_FAILURE = " REGISTER_USER_FAILURE";
export const REGISTER_USER_SUCCESS = " REGISTER_USER_SUCCESS";

export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"

export const registerUser = data => ({ type: REGISTER_USER, data });

export const registerUserSuccess = data => ({ type: REGISTER_USER_SUCCESS, data });

export const registerUserFailure = () => ({ type: REGISTER_USER_FAILURE });

//export const loginUser = data => ({ type: USER_LOGIN, data });
export const loginUser = ({ email, password }, onSuccess, onFailure) => {
    return {
        type: USER_LOGIN,
        payload: {
            email,
            password,

        },
        //history
        onSuccess,
        onFailure
    }
}
export const loginUserSuccess = data => {
    console.log("DAta IN USER ACTion IS" + JSON.stringify(data))
    return {
        type: USER_LOGIN_SUCCESS,
        data
    }
}

export const loginUserFailure = () => ({ type: USER_LOGIN_FAILURE });
export const logout = () => ({ type: 'USER_LOGOUT' })