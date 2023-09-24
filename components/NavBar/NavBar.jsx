"use client"
import Link from "next/link";

export default function NavBar() {
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
      </div>
    </nav>
  );
}