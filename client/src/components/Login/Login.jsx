import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, getAllAdmins, getAllUsers } from "../../redux/actions";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  useEffect(() => {
    dispatch(getAllAdmins());
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    // Verificar cambios en isAuthenticated después del inicio de sesión
      if (isAuthenticated) {
        // Si el inicio de sesión es exitoso
        toast.success("Inicio de sesión exitoso");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } 
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dispatch de la acción de inicio de sesión
    await dispatch(loginUser(formData));

    // Limpieza del formulario
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="container mx-auto mt-20 p-8 lg:mt-32 md:mt-32 sm:mt-32">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Iniciar Sesión</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-gray-300 rounded-lg overflow-hidden shadow-md p-8"
      >
        <div className="mb-4 text-black">
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            Correo Electrónico
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6 text-black">
          <label htmlFor="password" className="block text-sm font-bold mb-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border text-blue-600 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Iniciar Sesión
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false}/>
    </div>
  );
}