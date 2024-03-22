const { User } = require("../../db");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const secretKey = process.env.JWT_SECRET_KEY || crypto.randomBytes(32).toString("hex");

const loginGoogle = async (req, res) => {
  console.log(req.body); // Verifica si estás recibiendo los datos correctamente
  const { name, email } = req.body;

  try {
    let user = await User.findOne({ where: { email } });

    if (!user) {
      user = await User.create({
        name,
        email,
        isAdmin: false,
      });
    }

    const token = jwt.sign({ userId: user.id }, secretKey, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    console.error("Error interno:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = {loginGoogle};
