import { addToCart } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Cards({ drinks }) {
  const [buttonDiseabled, setButtonDiseable] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticate = useSelector((state) => state.token !== null);
  const cartItems = useSelector((state) => state.cartItems);
  console.log(isAuthenticate);
  // const ItemCart = cartItems.find((item) => item.id === drinks.id);

  console.log(buttonDiseabled);

  useEffect(() => {
    const isItemInCart = cartItems.some((item) => item.id === drinks.id);
    setButtonDiseable(isAuthenticate && isItemInCart);
  }, [cartItems, drinks.id, isAuthenticate]);

  const handleAddToCart = (drink) => {
    if (isAuthenticate && !buttonDiseabled) {
      dispatch(addToCart(drink));
      setButtonDiseable(true);
    }
  };
  return (
    <div className="sm:w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 mx-auto mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {drinks.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-[90%] mx-auto"
          >
            <div className="h-60 bg-cover bg-center flex items-center justify-center bg-slate-400">
              <img
                src={card.image}
                alt={card.name}
                className="w-22 h-[25vh] flex "
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-black">{card.name}</h2>
              <p className="text-gray-500 text-sm">Stock: {card.stock}</p>
              <p className="text-green-600 font-semibold text-lg mt-2">
                ${card.price}
              </p>
            </div>
            <div className="w-full h-10 bg-green-500 flex items-center justify-center">
              <button
                onClick={() => handleAddToCart(card)}
                disabled={
                  (isAuthenticate &&
                    cartItems.some((item) => item.id === card.id)) ||
                  card.stock === 0
                }
              >
                {isAuthenticate &&
                cartItems.some((item) => item.id === card.id)
                  ? "Añadido al carrito"
                  : "Añadir al carrito"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
