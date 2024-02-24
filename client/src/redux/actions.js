import axios from "axios";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_ADMINS = "GET_ALL_ADMINS";
export const GET_ALL_DRINKS = "GET_ALL_DRINKS";
export const GET_ALL_REVIEWS = "GET_ALL_REVIEWS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const CREATE_NEW_USER = "CREATE_NEW_USER";
export const ADD_TO_CART = "ADD_TO_CART";
export const CLEAR_CART = "CLEAR_CART";
export const INCREASE_ITEM = "INCREASE_ITEM";
export const DECREASE_ITEM = "DECREASE_ITEM";



export const getAllUsers = () => async (dispatch) => {
    try {
        const {data} = await axios.get("https://vs-proyect-production.up.railway.app/users");
        
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
        const {data} = await axios.get("https://vs-proyect-production.up.railway.app/drinks")

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
        const {data} = await axios.get("https://vs-proyect-production.up.railway.app/admins")
       

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
        const {data} = await axios.post("https://vs-proyect-production.up.railway.app/users/create", newUser);
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
        const {data} = await axios.post("https://vs-proyect-production.up.railway.app/users/login", loginData);
        console.log(data)
        dispatch({
            type : LOGIN_SUCCESS,
            payload : data,
        });
    } catch (err) {
        console.error(err);
        dispatch({
            type: LOGIN_FAILURE,
            payload: "Credenciales Incorrectas", 
        });
    }
}

export const logoutUser = () => async (dispatch) => {
    // Eliminar el token de autenticación del almacenamiento local
    localStorage.removeItem("token");

    // Despachar la acción de cierre de sesión
    dispatch({ type: LOGOUT });
};

export const addToCart = (drink) => async (dispatch) => {
    try {
        console.log(drink)
        dispatch({type: ADD_TO_CART ,payload: drink})
    } catch (err) {
        // dispatch({
        //     type: CART_ERROR,
        //     payload: err.message
        // })
    }
}

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const increaseItem = (drink) => ({
  type: INCREASE_ITEM,
  payload: drink,
});

export const decreaseItem = (drink) => ({
  type: DECREASE_ITEM,
  payload: drink,
});