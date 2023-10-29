import axios from "axios";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_ADMINS = "GET_ALL_ADMINS";
export const GET_ALL_DRINKS = "GET_ALL_DRINKS";
export const GET_ALL_REVIEWS = "GET_ALL_REVIEWS";





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
        const {data} = await axios.get("https://difficult-rail-production.up.railway.app/drinks")
        console.log(data)
        return dispatch ({
            type : GET_ALL_DRINKS,
            payload : data
        });
    } catch (err) {
        console.error("Error al traer a los tragos", err)
    }
}