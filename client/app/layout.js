"use client"
import NavBar from "@/components/NavBar/NavBar"
import "./styles/globals.css"
import {metadata} from "./meta/metadata"
import { Provider } from "react-redux"
import store from "@/redux/store"
import SessionAuthProvider from "@/context/SessionAuthProvider"

export default function RootLayout({ children, hideNavBar, pageProps  }) {

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="cabecera  pt-safe-top text-white">
        <SessionAuthProvider>
            <Provider store={store}>
              {!hideNavBar && (
                <NavBar />
              )}
              {children}
            </Provider>
        </SessionAuthProvider>
      </body>
    </html>
  );

}
