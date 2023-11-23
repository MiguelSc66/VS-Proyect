"use client"
import NavBar from "@/components/NavBar/NavBar"
import "./styles/globals.css"
import {metadata} from "./meta/metadata"
import { Provider } from "react-redux"
import store from "@/redux/store"

export default function RootLayout({ children, hideNavBar }) {

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="cabecera  pt-safe-top text-white">
        {/* Envuelve tu aplicación con el Provider y proporciona la tienda */}
        <Provider store={store}>
          {!hideNavBar && (
            <NavBar />
          )}
          {children}
        </Provider>
      </body>
    </html>
  );

}
