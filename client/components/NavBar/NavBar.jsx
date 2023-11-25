"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser, getAllAdmins } from "@/redux/actions";

export default function NavBar() {
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admins);
  const email = useSelector((state) => state.email);
  const token = useSelector((state) => state.token);
  const filtro = admin.filter((us) => {
    return email === us.email;
  });
  const [loading, setLoading] = useState(true); // Nuevo estado para manejar la carga de datos

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getAllAdmins());
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener admins", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav className="w-full mt-0 h-32 bg-black bg-opacity-50">
      <div className="flex justify-center items-center h-full">
        <div className="text-2xl space-x-12">
          <button>
            <Link href="/">Home</Link>
          </button>
          {!token ? (
            <>
              <button>
                <Link href="/login">Login</Link>
              </button>
              <button>
                <Link href="/register">Registro</Link>
              </button>
            </>
          ) : null}
          {filtro.length > 0 && token ? (
            <button id="dashboard" suppressHydrationWarning>
              <Link href="/dashboard">Panel</Link>
            </button>
          ) : null}
          {token ? (
            <>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
