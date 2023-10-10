const {User} = require("../../db");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const secretKey = crypto.randomBytes(32).toString("hex");

const loginGoogle = async (req, res) => {
  const { name, email, isAdmin } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      const newUser = await User.create({
        name,
        email,
        isAdmin,
      });

      const token = jwt.sign({ userId: newUser.id }, secretKey, {
        expiresIn: "1h",
      });

      return res.status(201).json({ ...newUser.toJSON(), token, email });
    }

    const token = jwt.sign({ userId: user.id }, secretKey, {
      expiresIn: "1h",
    });

    return res.status(200).json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    console.error("Error interno:", error);
    return res.status(500).json({ data: "Error interno del servidor" });
  }
};

module.exports = {loginGoogle}
