"use client"
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full mt-0 h-32 bg-black bg-opacity-50">
      <div className="flex justify-center items-center h-full">
        <div className="text-2xl space-x-12">
          <button>
            <Link href="/">Home</Link>
          </button>
          <button>
            <Link href="/login">Login</Link>
          </button>
          <button>
            <Link href="/register">Registro</Link>
          </button>
        </div>
      </div>
    </nav>
  );
}