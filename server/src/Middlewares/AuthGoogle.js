const admin = require("../ConfigGoogleAuth/firebaseAdmin");

const decodeToken = async (req, res, next) => {
    try {
        // Verificar si se proporciona un token de autorización en la solicitud
        if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
            return res.status(401).json({ message: "No se proporcionó un token de autorización" });
        }

        // Extraer el token de autorización y decodificarlo
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = await admin.auth().verifyIdToken(token);

        // Verificar si el token es válido
        if (!decodedToken) {
            return res.status(401).json({ message: "Token de autorización no válido" });
        }

        // Adjuntar la información del usuario decodificado al objeto req
        req.user = decodedToken;

        // Continuar con el siguiente middleware o controlador de ruta
        next();
    } catch (error) {
        console.error("Error al decodificar el token de autorización:", error);
        return res.status(500).json({ message: "Error en el servidor al decodificar el token de autorización" });
    }
};

module.exports = decodeToken;
