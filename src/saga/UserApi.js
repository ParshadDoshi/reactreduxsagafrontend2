import axios from "axios";

const REG_URL = "http://localhost:5000/users";
const AUTH_URL = "http://localhost:5000/auth";
const createUser = async ({ name, email, password }) => {
    return await axios.post(REG_URL, {
        name,
        email,
        password,
    });
};
const login = async ({ email, password }) => {
    let { data } = await axios
        .post(AUTH_URL + "/login", {
            email,
            password,
        })

    return data;
};

/* const login = async ({ email, password }) => {
     await axios
        .post(AUTH_URL + "/login", {
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                console.log("USER DATA IS" + JSON.stringify(response.data))
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response;
        });
}; */

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    createUser,
    login,
    logout,
};