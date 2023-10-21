const {User} = require("../../db");

const inhabilityUser = async (req, res) => {
  try {
    const { id } = req.params;


    const userFind = await User.update(
      {isDeleted: true},
      {
        where: {
          id
        }
      }
    )
    if (userFind) {
      res.status(200).json(userFind);
    } else {
      res
        .status(400)
        .json({ message: "No se ha encontrado el usuario para eliminar" });
    }
  } catch (error) {
    res.status(401).json({ message: "Ha fallado la eliminación del usuario" });
  }
};




const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Buscar el usuario por su ID
      const user = await User.findByPk(id);
  
      // Verificar si el usuario existe
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
  
      // Eliminar el usuario de la base de datos
      await user.destroy();
  
      res.status(200).json({ message: "Usuario eliminado exitosamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al eliminar el usuario" });
    }
};

const restoreUser = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Buscar el usuario por su ID
      const user = await User.findByPk(id);
  
      // Verificar si el usuario existe
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      
      if(user.isDeleted === false) {
        return res.status(409).json({message:"El usuario ya esta activo"})
      } else {
        // Restaurar el usuario estableciendo deleted en false
        user.isDeleted = false;
      }
  
      // Guardar los cambios en la base de datos
      await user.save();
  
      res.status(200).json({ message: "Usuario restaurado exitosamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al restaurar el usuario" });
    }
};

module.exports = {deleteUser, restoreUser, inhabilityUser}