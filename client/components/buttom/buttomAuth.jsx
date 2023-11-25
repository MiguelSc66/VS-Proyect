"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function ButtonAuth() {
  const { data: session, status, error } = useSession();

  


  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session && session.user && session.user.email) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button
          onClick={() => signOut()}
          className="btn btn-danger"
        >
          Sign out
        </button>
      </>
    );
  }

  // Mostrar mensaje de error si está presente
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      Not signed in <br />
      <button
        onClick={() => signIn()}
        className="btn btn-primary"
      >
        Sign in
      </button>
    </>
  );
}

