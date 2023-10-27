import {
    GET_ALL_ADMINS,
    GET_ALL_REVIEWS,
    GET_ALL_DRINKS,
    GET_ALL_USERS,
} from "./actions";

const initialState = {
    admins: [],
    reviews: [],
    drinks: [],
    users: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ADMINS:
            return { ...state, admins: action.payload };
        case GET_ALL_DRINKS:
            return { ...state, drinks: action.payload };
        case GET_ALL_REVIEWS: 
            return { ...state, reviews: action.payload };
        case GET_ALL_USERS:
            return { ...state, users: action.payload };

        
        default: 
            return {
                ...state,
            }
    }
}

export default reducer