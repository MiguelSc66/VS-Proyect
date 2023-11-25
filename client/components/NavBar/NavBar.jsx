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
              <button key="login">
                <Link href="/login">Login</Link>
              </button>
              <button key="register">
                <Link href="/register">Registro</Link>
              </button>
            </>
          ) : (
            <>
              {filtro.length > 0 && token && (
                <button key="dashboard" id="dashboard">
                  <Link href="/dashboard">Panel</Link>
                </button>
              )}
              <button key="logout" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}


