"use client"
import { useEffect, useState } from 'react';

export default function Home() {
  const [minHeight, setMinHeight] = useState('min-h-[20vh]');

  useEffect(() => {
    // Función para calcular la altura mínima basada en el tamaño de la ventana.
    const calculateMinHeight = () => {
      const windowHeight = window.innerHeight;
      if (windowHeight <= 640) {
        setMinHeight('min-h-[40vh]'); // Pantallas pequeñas
      } else if (windowHeight <= 768) {
        setMinHeight('min-h-[30vh]'); // Pantallas medianas
      } else {
        setMinHeight('min-h-[10vh]'); // Pantallas grandes
      }
    };

    // Calcula la altura mínima inicial cuando se carga la página.
    calculateMinHeight();

    // Vuelve a calcular la altura mínima cuando cambia el tamaño de la ventana.
    window.addEventListener('resize', calculateMinHeight);

    // Limpia el evento cuando se desmonta el componente.
    return () => {
      window.removeEventListener('resize', calculateMinHeight);
    };
  }, []);

  return (
    <div className="bg-cover bg-center w-full h-screen relative">
      <div className="flex justify-center items-center h-1/4 sm:h-1/3 md:h-1/4 lg:h-1/5">
        <img
          src="https://res.cloudinary.com/duclhjrri/image/upload/v1695577547/Dise%C3%B1o_sin_t%C3%ADtulo-removebg_kx4uab.png"
          alt="logo"
          className="w-3/4 sm:w-2/4 md:w-1/3 lg:w-1/4"
        />
      </div>
      <div className={`w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 mx-auto ${minHeight} bg-slate-900 shadow-lg shadow-black relative mt-5`}>
        <div className="absolute bottom-0 left-0 w-full p-4">
          <p className="text-center">
            ¡Bienvenido a nuestra página! Podran reservar con anticipacion su bebida
            para la fecha que tengamos disponible en el momento. 
          </p>
        </div>
      </div>
    </div>
  );
}