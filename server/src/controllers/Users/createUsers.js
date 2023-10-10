const crypto = require("crypto");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {User} = require("../../db");

const secretKey = crypto.randomBytes(32).toString("hex");

const createUser = async (req, res) => {
  try {
    const { name, email, password, phoneNumber, city, country, isAdmin } =
      req.body;

    // Verificar si el correo electrónico ya está registrado
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "El correo electrónico ya está registrado" });
    }

    // Generar una sal para el cifrado de contraseña
    const salt = crypto.randomBytes(32).toString("hex");

    // Aplicar el cifrado de contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el nuevo usuario en la base de datos
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      city,
      country,
      isAdmin,
      salt, // Guardar la sal para futuras verificaciones
    });

    res
      .status(201)
      .json({ message: "Usuario registrado exitosamente", user: newUser });
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar al usuario por su correo electrónico
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Credenciales incorrectas" });
    }

    // Generar un token de autenticación
    const token = jwt.sign({ userId: user.id }, secretKey, {
      expiresIn: "1h", // Cambia esto según tus preferencias
    });

    res.status(200).json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = {createUser, loginUser}