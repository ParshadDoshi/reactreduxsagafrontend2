import { REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE, USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from './../action/UserAction'

localStorage.removeItem("userToken")

const initState = { isLoggedIn: true, id: undefined, token: false }

export const UserReducer = (state = initState, action) => {

    //console.log("Action Type User Reducer is" + action.type + JSON.stringify(action))
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                isLoggedIn: false,

            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false,

            }
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                isLoggedIn: false,

            }
        case USER_LOGIN:
            return {
                ...state,
                isLoggedIn: false,
                token: false

            }
        case USER_LOGIN_SUCCESS:
            localStorage.setItem("userToken", action.data.token)
            return {
                ...state,
                isLoggedIn: true,
                id: action.data.user._id,
                token: true
            }
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                isLoggedIn: false,

            }
        case 'USER_LOGOUT':
            localStorage.removeItem("userToken")
            return {
                ...state,
                id: undefined,
                isLoggedIn: false,
                token: false
            }
        default:

            return {
                ...state,

            }
    }
}