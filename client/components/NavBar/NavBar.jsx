"use client";
import Link from "next/link";
import { useEffect } from "react";
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Código que interactúa con el DOM aquí
      const panel = document.getElementById("dashboard");
      if (filtro.length > 0 && token && panel) {
        // Hacer algo con el panel
      }
    }
  }, [filtro, token]);

  useEffect(() => {
    dispatch(getAllAdmins());
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
          {token ? (
            <>
              {filtro.length > 0 && token && (
                <button id="dashboard">
                  <Link href="/dashboard">Panel</Link>
                </button>
              )}
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button>
                <Link href="/login">Login</Link>/
                <Link href="/register">Registro</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
