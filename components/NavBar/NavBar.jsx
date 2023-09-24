"use client"
import Link from "next/link";
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

export default function NavBar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="w-full mt-0 h-32 bg-black bg-opacity-50">
      <div className="flex justify-center items-center h-full space-x-7 ">
        <div className="text-2xl space-x-16">
          <button>
            <Link href="/">Home</Link>
          </button>
          <button>
            <Link href="/about">About</Link>
          </button>
          <button>
            <Link href="/tienda">Tienda</Link>
          </button>
        </div>
        <button
          onClick={toggleDarkMode}
          className="text-2xl text-white hover:text-gray-300"
        >
          {darkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
        </button>
      </div>
    </nav>
  );
}