import {
  GET_ALL_ADMINS,
  GET_ALL_REVIEWS,
  GET_ALL_DRINKS,
  GET_ALL_USERS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  ADD_TO_CART,
  CLEAR_CART,
  INCREASE_ITEM,
  DECREASE_ITEM,
} from "./actions";

const initialState = {
  admins: [],
  reviews: [],
  drinks: [],
  users: [],
  cartItems: typeof window !== 'undefined' && localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")) : [],
  isAuthenticated: false,
  error: null,
  isAdmin: false,
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
      if(action.payload.admin === true) {
        return {
          ...state,
          isAuthenticated: true,
          token: action.payload.token, // Almacenar el token cuando la autenticación sea exitosa
          email: action.payload.email,
          error: null, // Restablecer cualquier mensaje de error anterior
          isAdmin: true,
        };
      } else {
        return {
          ...state,
          isAuthenticated: true,
          token: action.payload.token, // Almacenar el token cuando la autenticación sea exitosa
          email: action.payload.email,
          error: null, // Restablecer cualquier mensaje de error anterior
          isAdmin: false
        };
      }
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
      const addedItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
    
      if (addedItem) {
        // Si el artículo ya está en el carrito, incrementa cartQuantity
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === addedItem.id
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        );
    
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // Si el artículo no está en el carrito, agrégalo con cartQuantity inicial 1
        const itemToAdd = {
          ...action.payload,
          cartQuantity: 1,
        };

        itemToAdd.stock -= 1
    
        localStorage.setItem(
          "cart",
          JSON.stringify([...state.cartItems, itemToAdd])
        );
    
        return {
          ...state,
          cartItems: [...state.cartItems, itemToAdd],
        };
      }

      case CLEAR_CART:
      localStorage.removeItem("cart");
      return {
        ...state,
        cartItems: [],
      };

      case INCREASE_ITEM:
        const incCartItems = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            item.cartQuantity += 1;
            item.stock -= 1;
          }
          return item;
        });

        localStorage.setItem("cart", JSON.stringify(incCartItems));
        return {
          ...state,
          cartItems: incCartItems
        };

      case DECREASE_ITEM: 
      const decreasedCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          // Verifica que la cantidad en el carrito sea mayor que 1 antes de disminuir
          if (item.cartQuantity > 1) {
            item.cartQuantity -= 1;
            item.stock += 1; // Aumenta el stock
          }
        }
        return item;
      });

      localStorage.setItem("cart", JSON.stringify(decreasedCartItems));

      return {
        ...state,
        cartItems: decreasedCartItems,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
