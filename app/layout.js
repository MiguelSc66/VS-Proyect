"use client"
import NavBar from "@/components/NavBar/NavBar"
import "./styles/globals.css"
import {useState} from "react"
import {metadata} from "./meta/metadata"



export default function RootLayout({ children, hideNavBar }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Aquí puedes aplicar lógica adicional para cambiar el tema de tu aplicación.
  };

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`cabecera ${darkMode ? 'dark' : ''} pt-safe-top text-white`}>
        {!hideNavBar && (
          <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        )}
        {children}
      </body>
    </html>
  );
}
