import axios from "axios";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_ADMINS = "GET_ALL_ADMINS";
export const GET_ALL_DRINKS = "GET_ALL_DRINKS";
export const GET_ALL_REVIEWS = "GET_ALL_REVIEWS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const CREATE_NEW_USER = "CREATE_NEW_USER"




export const getAllUsers = () => async (dispatch) => {
    try {
        const {data} = await axios.get("http://localhost:3001/users");
        
        return dispatch ({
            type : GET_ALL_USERS,
            payload : data
        });
    } catch (err) {
        console.error("Error al traer a los usarios", err)
    }
};

export const getAllDrinks = () => async (dispatch) => {
    try {
        const {data} = await axios.get("https://proyectnext-production.up.railway.app/drinks")
        console.log(data)
        return dispatch ({
            type : GET_ALL_DRINKS,
            payload : data
        });
    } catch (err) {
        console.error("Error al traer a los tragos", err)
    }
}

export const getAllAdmins = () => async (dispatch) => {
    try {
        const {data} = await axios.get("https://proyectnext-production.up.railway.app/admins")

        return dispatch({
            type : GET_ALL_ADMINS,
            payload : data
        })
    } catch (err) {
        console.error("Error al traer a los usarios", err)
    }
}

export const createUser = (newUser) => async (dispatch) => {
    try {
        const {data} = await axios.post("https://proyectnext-production.up.railway.app/users/create", newUser);

        return dispatch({
            type : CREATE_NEW_USER,
            payload : data
        })
    } catch (err) {
        
    }
}

export const loginUser = (loginData) => async (dispatch) => {
    try {
        const {data} = await axios.post("https://proyectnext-production.up.railway.app/users/login", loginData);

        dispatch({
            type : LOGIN_SUCCESS,
            payload : data,
        });
    } catch (err) {
        console.error(err)
    }
}