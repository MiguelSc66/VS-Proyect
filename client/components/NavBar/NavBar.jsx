"use client"
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

  let panel; // Declarar la variable panel aquí

  useEffect(() => {
    if (filtro.length > 0 && token) {
      panel = document.getElementById("dashboard"); // Asignar valor a panel
      panel.classList.remove("hidden");
    } else if (!token) {
      if (panel) {
        panel.classList.add("hidden"); // Verificar si panel está definida antes de usarla
      }
    }
  }, [filtro]);

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
          {!token ? (
            <>
              <button>
                <Link href="/login">Login</Link>
              </button>
              <button>
                <Link href="/register">Registro</Link>
              </button>
            </>
          ) : (
            <>
              {filtro.length > 0 ? (
                <button id="dashboard">
                  <Link href="/dashboard">Panel</Link>
                </button>
              ) : null}
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
