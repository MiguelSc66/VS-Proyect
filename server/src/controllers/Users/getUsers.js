const {User} = require("../../db")

const getUsers = async (req, res) => {
    try {
      const findUsers = await User.findAll({ where: { Admin: false } });
  
      if (findUsers) {
        return res.status(200).json(findUsers);
      } else {
        return res.status(404).json("No se encontraron usuarios registrados");
      }
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  };

const getAdmins = async (req, res) => {
    const findAdmins = await User.findAll({where: {Admin: true}});

    if (findAdmins){
        return res.status(200).json(findAdmins);

    } else {
        return res.status(404).json("No se encontraron usuarios registrados")
    }
};

module.exports = {getUsers, getAdmins}