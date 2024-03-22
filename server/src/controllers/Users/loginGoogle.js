const {User} = require("../../db");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const secretKey = crypto.randomBytes(32).toString("hex");

const loginGoogle = async (req, res) => {
  console.log(req, "llega algo")
  const { name, email, isAdmin } = req.body;
  console.log(name, email, isAdmin)
  try {
    const user = await User.findOne({ where: { email } });
    console.log(user)
    if (!user) {
      const newUser = await User.create({
        name,
        email,
        isAdmin,
      });

      const token = jwt.sign({ userId: newUser.id }, secretKey, {
        expiresIn: "1h",
      });
    console.log(token, "nuevo usuario")

      return res.status(201).json({ ...newUser.toJSON(), token, email });
    }

    const token = jwt.sign({ userId: user.id }, secretKey, {
      expiresIn: "1h",
    });
    console.log(token, "usuario existente")

    return res.status(200).json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    console.error("Error interno:", error);
    return res.status(500).json({ data: "Error interno del servidor" });
  }
};

module.exports = {loginGoogle}
