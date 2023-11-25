import axios from "axios";
import { signIn } from "next-auth/react";
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
        const {data} = await axios.get("https://proyectnext-production.up.railway.app/users");
        
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
        console.error("no se creo el usario",err)
    }
}

export const loginUser = (loginData) => async (dispatch) => {
    try {
        const {data} = await axios.post("https://proyectnext-production.up.railway.app/users/login", loginData);

        dispatch({
            type : LOGIN_SUCCESS,
            payload : data,
        });

        await signIn('credentials',  loginData)
    } catch (err) {
        console.error(err);
        dispatch({
            type: LOGIN_FAILURE,
            payload: err.message, // Ajusta esto según cómo manejes los errores en tu aplicación
        });
    }
}

export const logoutUser = () => async (dispatch) => {
    // Eliminar el token de autenticación del almacenamiento local (o donde lo tengas almacenado)
    localStorage.removeItem("token");
    
    // Despachar la acción de cierre de sesión
    dispatch({ type: LOGOUT });

    
};