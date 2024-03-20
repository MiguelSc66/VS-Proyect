const admin = require("../ConfigGoogleAuth/firebaseAdmin")

const decodeToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodeValue = await admin.auth().verifyIdToken(token);
        
        if (decodeValue) {
            req.user = decodeValue;
            return next();
        }

        return res.json({message: "Sin permiso"});

    } catch (error) {
        return res.json({message: "Error en el servidor"});
    }
};

module.exports = decodeToken;