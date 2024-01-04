import { RiShoppingCartLine } from "react-icons/ri";
import { useState } from "react";

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleCart = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseCart = () => {
    setIsOpen(false);
  };

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
          <div className="text-black">Producto 1 - 2 unidades</div>
          <div className="text-black">Producto 2 - 1 unidad</div>
          <div className="text-black">Total: $50</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
