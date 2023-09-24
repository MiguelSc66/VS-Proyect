"use client"


export default function Home() {
  return (
    <div className="bg-cover bg-center w-full h-screen relative">
      <div className="flex justify-center items-center h-1/4 sm:h-1/3 md:h-1/4 lg:h-1/5">
        <img
          src="https://res.cloudinary.com/duclhjrri/image/upload/v1695577547/Dise%C3%B1o_sin_t%C3%ADtulo-removebg_kx4uab.png"
          alt="logo"
          className="w-3/4 sm:w-2/4 md:w-1/3 lg:w-1/4"
        />
      </div>
      <div className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 mx-auto min-h-[20vh] sm:min-h-[40vh] bg-slate-800 shadow-lg shadow-black relative mt-5">
        <div className="absolute bottom-0 left-0 w-full p-4">
          <p className="text-center">
            ¡Bienvenido a nuestra página! Aquí podrás encontrar una amplia
            selección de vinilos musicales de alta calidad para tu colección.
            Explora nuestro catálogo y disfruta de la música en su mejor formato.
          </p>
        </div>
      </div>
    </div>
  );
}





  
  