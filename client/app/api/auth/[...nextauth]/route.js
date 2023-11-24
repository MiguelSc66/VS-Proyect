import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";



const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "email", type: "email", placeholder: "test@test.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
            try {
              const res = await fetch("https://proyectnext-production.up.railway.app/users/login", {
                method: "POST",
                body: JSON.stringify({
                  email: credentials.email,
                  password: credentials.password
                }),
                headers: { "Content-Type": "application/json"}
              });
          
              console.log("Server Response:", res);
          
              if (!res.ok) {
                const errorText = await res.text();
                console.error("Credenciales incorrectas", errorText);
                return { error: "Credenciales incorrectas" };
              }
          
              const user = await res.json();
          
              return user;
            } catch (error) {
              console.error("Error en la autenticación:", error);
              return { error: "Error en la autenticación" };
            }
          }
          
          
      })
  ],
  // Configuración adicional si es necesario
});

export { handler as GET, handler as POST }
