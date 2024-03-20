const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if(!token) {
        return res.status(401).json({message: 'No se proporcionó un token de autenticación'});
    }

    jwt.verify(token, 'tu_secreto_secreto', (err, user) => {
        if(err) {
            return res.status(403).json({message: 'Token inválido'});
        }

        const authenticatedUser = user;

        console.log(authenticatedUser);

        next();
    });
};

module.exports = authenticateJWT;
