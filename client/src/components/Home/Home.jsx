import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getAllDrinks } from "../../redux/actions";


export default function Home() {
  const [pageSize, setPageSize] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  console.log(setPageSize)
  const dispatch = useDispatch();
  const drinks = useSelector((state) => state.drinks);
  
  useEffect(() => {
    dispatch(getAllDrinks());
  }, [dispatch]);

  // Calcular el índice inicial y final para la paginación
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Filtrar las bebidas según la página actual
  const paginatedDrinks = drinks.slice(startIndex, endIndex);

  return (
    <div className="bg-cover bg-center w-full h-screen relative">
      <div className="flex justify-center items-center h-1/4 sm:h-1/3 md:h-1/4 lg:h-1/5">
        <img
          src="https://res.cloudinary.com/duclhjrri/image/upload/v1695577547/Dise%C3%B1o_sin_t%C3%ADtulo-removebg_kx4uab.png"
          alt="logo"
          className=" sm:w-2/4 md:w-1/3 lg:w-1/4 pointer-events-none"
        />
      </div>
      <div
        className={`w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 mx-auto sm:h-[10vh] md:h-[10vh] lg:h-[10vh]  bg-slate-900 shadow-lg shadow-black  mt-5`}
      >
        <div className="flex bottom-0 left-0 w-full h-auto p-4">
          <h2 className="text-center sm:text-md md:text-lg lg:text-xl text-white">
            ¡Bienvenido a nuestra página! Podrán reservar con anticipación su bebida
            para la fecha que tengamos disponible en el momento.
          </h2>
        </div>
      </div>
      <div className=" mt-[7vh]">
        <Cards drinks={paginatedDrinks} />
      </div>
      <div className="flex justify-center mt-4 h-44">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="mr-4 bg-blue-600 h-12 w-20 rounded-lg"
        >
          Anterior
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={endIndex >= drinks.length}
          className="mr-4 bg-blue-600 h-12 w-20 rounded-lg"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
