"use client";

export default function Cards({ drinks }) {
  

  return (
    <div className="sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 mx-auto mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {drinks.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="h-64 bg-cover bg-center flex items-center justify-center bg-slate-400">
              <img src={card.image} alt={card.name} className="w-22 h-[25vh] flex " />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-black">{card.name}</h2>
              <p className="text-gray-500 text-sm">Stock: {card.stock}</p>
              <p className="text-green-600 font-semibold text-lg mt-2">${card.price}</p>
            </div>
            <div className="w-full h-10 bg-green-500 flex items-center justify-center">
              <button>Añadir al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}