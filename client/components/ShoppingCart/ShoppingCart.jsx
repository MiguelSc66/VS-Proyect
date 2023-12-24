import { RiShoppingCartLine } from 'react-icons/ri';
import { useState } from 'react';

const ShoppingCart = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggleCart = () => {
      setIsOpen(!isOpen);
    };
  
    const handleCloseCart = () => {
      setIsOpen(false);
    };
  
    return (
        <div className="relative">
        <button
          onClick={handleToggleCart}
          className="text-white text-2xl focus:outline-none hover:text-gray-300"
        >
          <RiShoppingCartLine />
        </button>
        {isOpen && (
          <div className="fixed top-0 right-0 h-full w-64 bg-white border-l border-gray-300 shadow">
            <div className="p-4">
              {/* Aquí puedes mostrar los productos en el carrito, el total, y el botón de pagar */}
              {/* Ejemplo */}
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
        )}
      </div>
    );
  };

export default ShoppingCart;