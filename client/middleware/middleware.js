// middleware.js
export function requireAuthentication(req, res, next) {
    const authToken = req.cookies.Token; // Reemplaza esto con la forma en que almacenas tu token de autenticación
    if (!authToken) {
      return res.redirect("/login"); // Redirige al usuario a la página de inicio de sesión si no está autenticado
    }
    // Si el usuario está autenticado, continúa con la siguiente ruta
    next();
  }
  