import {
  GET_ALL_ADMINS,
  GET_ALL_REVIEWS,
  GET_ALL_DRINKS,
  GET_ALL_USERS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./actions";

const initialState = {
  admins: [],
  reviews: [],
  drinks: [],
  users: [],
  cartItems: [],
  authenticated: false,
  error: null,
  token:
    typeof window !== "undefined"
      ? localStorage.getItem("token") || null
      : null,
  email:
    typeof window !== "undefined"
      ? localStorage.getItem("email") || null
      : null,
};

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
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("email", action.payload.email);
      console.log(action.payload)
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token, // Almacenar el token cuando la autenticación sea exitosa
        email: action.payload.email,
        error: null, // Restablecer cualquier mensaje de error anterior
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        token: null, // Borrar el token en caso de error de autenticación
        error: action.payload, // Almacenar el mensaje de error
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        token: null, // Borrar el token cuando se cierre sesión
        error: null, // Restablecer cualquier mensaje de error anterior
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
