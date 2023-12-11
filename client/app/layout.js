"use client"
import "./styles/globals.css"
import {metadata} from "./meta/metadata"
import { Provider } from "react-redux"
import store from "@/redux/store"
import SessionAuthProvider from "@/context/SessionAuthProvider"
import dynamic from 'next/dynamic';

const MyComponent = dynamic(() => import('@/components/NavBar/NavBar'), {
  ssr: false
});

export default function RootLayout({ children, hideNavBar  }) {

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="cabecera  pt-safe-top text-white">
        <SessionAuthProvider>
            <Provider store={store}>
              
                <MyComponent />
              
              {children}
            </Provider>
        </SessionAuthProvider>
      </body>
    </html>
  );

}
