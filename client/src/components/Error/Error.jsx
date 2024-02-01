import {Link} from "react-router-dom";


export default function Error() {
  return (
    
      <div className="flex items-center justify-center w-full h-screen">
        <img
          src={
            "https://res.cloudinary.com/duclhjrri/image/upload/v1695525289/VS_kxp7o7.png"
          }
          alt="Logo"
        />
        <div className="text-center">
          <h1 className="text-2xl font-bold">Página no encontrada</h1>
          <p className="text-red-600">
            Lo sentimos, la página que estás buscando no existe.
          </p>
          <Link href="/" className="text-blue-700 text-[30px]">
            Volver
          </Link>
        </div>
      </div>

  );
}
