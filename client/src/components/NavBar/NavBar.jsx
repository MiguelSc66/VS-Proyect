import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, getAllAdmins } from "../../redux/actions";
import toast, { Toaster } from "react-hot-toast";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function NavBar() {
  const dispatch = useDispatch();
  const Admin = useSelector((state) => state.isAdmin);
  const token = useSelector((state) => state.token);
  console.log(Admin)
  console.log(token)
  useEffect(() => {
    dispatch(getAllAdmins());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success("Cierre de sesion exitoso", {duration: 2000})

  };
  if (!token) {
    // Usuario no autenticado
    return (
      <nav className="w-full mt-0 h-32 bg-black bg-opacity-50">
        <div className="flex justify-center items-center h-full text-white">
          <div className="text-2xl space-x-12">
            <button>
              <Link to="/">Home</Link>
            </button>
            <button>
              <Link to="/login" id="login">Login</Link>
            </button>
            <button>
              <Link to="/register">Registro</Link>
            </button>
          </div>
        </div>
        <Toaster position="top-center" reverseOrder={false}/>
      </nav>
    );
  }

  return (
    <nav className="w-full mt-0 h-32 bg-black bg-opacity-50">
    <div className="flex justify-between items-center h-full px-8 text-white">
      <div className="text-2xl space-x-12">
        <button>
          <Link to="/">Home</Link>
        </button>
        {Admin && (
          <button>
            <Link to="/dashboard">Panel</Link>
          </button>
        )}
      </div>
      <div className="flex items-center space-x-4">
        <ShoppingCart/>
        <button onClick={handleLogout} id="logout" className="text-white">
          Logout
        </button>
      </div>
    </div>
  </nav>
  );
}