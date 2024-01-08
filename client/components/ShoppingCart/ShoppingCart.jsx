import { RiShoppingCartLine } from "react-icons/ri";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/redux/actions";

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems); // Obtener cartItems del estado global
  console.log(cartItems);
  
  const handleToggleCart = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseCart = () => {
    setIsOpen(false);
  };

  const totalValue = cartItems.reduce(
    (total, item) => total + item.price * item.cartQuantity,
    0
  );

  const handlerClear = () => {
    dispatch(clearCart())
  }

  const cartStyles = {
    position: "fixed",
    top: "0",
    right: "0",
    height: "100%",
    width: "64px",
    backgroundColor: "white",
    borderLeft: "1px solid #ccc",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    transition: "width 0.5s ease-out",
    overflowX: "hidden",
    width: isOpen ? "250px" : "0px",
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
          {cartItems.map((item, index) => (
            <div key={index} className="text-black">{item.name} - {item.stock} unidades</div>
          ))}
          <div className="text-black">Total: ${totalValue}</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Pagar
          </button>
        </div>
          <button onClick={handlerClear} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" >borrar</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
