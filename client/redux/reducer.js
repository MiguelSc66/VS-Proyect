import {
  GET_ALL_ADMINS,
  GET_ALL_REVIEWS,
  GET_ALL_DRINKS,
  GET_ALL_USERS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  ADD_TO_CART,
} from "./actions";

const initialState = {
  admins: [],
  reviews: [],
  drinks: [],
  users: [],
  cartItems: [],
  isAuthenticated: false,
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

    case ADD_TO_CART:
      const addedItem = state.drinks.find(
        (drink) => drink.id === action.payload.id
      );
      console.log(addedItem);
      if (!addedItem || addedItem.stock <= 0) {
        // Si el artículo no existe o está agotado, no hagas nada
        return state;
      }

      const updatedDrinks = state.drinks.map((drink) => {
        if (drink.id === action.payload.id) {
          return {
            ...drink,
            stock: drink.stock - 1,
          };
        }
        return drink;
      });

      const itemToAdd = {
        ...action.payload,
        cartQuantity: 1,
      };

      localStorage.setItem(
        "cart",
        JSON.stringify([...state.cartItems, action.payload])
      );
      console.log(updatedDrinks)
        
      return {
        ...state,
        drinks: updatedDrinks,
        cartItems: [...state.cartItems, itemToAdd],
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
