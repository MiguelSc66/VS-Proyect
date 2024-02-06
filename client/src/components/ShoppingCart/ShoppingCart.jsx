import { RiShoppingCartLine } from "react-icons/ri";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, increaseItem, decreaseItem } from "../../redux/actions";

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems); // Obtener cartItems del estado global
  console.log(cartItems);
  
  function handleToggleCart() {
    setIsOpen(!isOpen);
  }

  const handleCloseCart = () => {
    setIsOpen(false);
  };

  const handlerClear = () => {
    dispatch(clearCart());
  };

  const totalValue = cartItems.reduce(
    (total, item) => total + item.price * item.cartQuantity,
    0
  );

  const handleIncrease = (drink) => {
    dispatch(increaseItem(drink));
  };

  const handleDecrease = (drink) => {
    dispatch(decreaseItem(drink));
  };

  const cartStyles = {
    position: "fixed",
    top: "0",
    right: "0",
    height: "100%",
    backgroundColor: "#f2f2f2",
    borderLeft: "1px solid #ccc",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    transition: "width 0.5s ease-out",
    overflowX: "hidden",
    width: isOpen ? "300px" : "0px",
    zIndex: 999, // Ajusta el valor según sea necesario
  };

  return (
    <div className="relative">
      <button
        onClick={handleToggleCart}
        className="text-white text-2xl focus:outline-none hover:text-gray-300"
      >
        <RiShoppingCartLine />
      </button>
      <div style={cartStyles}>
        <div className="p-4">
          <button
            onClick={handleCloseCart}
            className="mt-1 bg-red-500 text-white px-4 py-2 rounded-md "
          >
            X
          </button>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center mt-4 shadow-md bg-gray-400 p-2 rounded-md"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-20 mr-4 rounded-md"
              />
              <div className="flex flex-col">
                <span className="text-black bg-slate-300 p-2 mb-2 rounded-md">
                  {item.name} X{item.cartQuantity}
                </span>
                <div className="flex items-center">
                  <button onClick={() => handleIncrease(item)} disabled={item.stock === 0} className="bg-green-600 w-20 h-6 rounded-md mr-2">
                    Aumentar
                  </button>
                  <button onClick={() => handleDecrease(item)} className="bg-red-400 w-14 h-6 rounded-md">
                    Quitar
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="text-black mt-4">Total: ${totalValue}</div>
          <div className="flex justify-between">
            <button className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 mt-2">
              Pagar
            </button>
            <button
              onClick={handlerClear}
              className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 mt-2"
            >
              borrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
