const {User} = require("../../db");

const inhabilityUser = async (req, res) => {
  try {
    const { id } = req.params;

    const userUpdate = await User.upgrade(
      { deleted: true },
      { where: { id }, returning: true }
    );
    if (userUpdate[0] === 0) {
        // Si no se encontró ningún usuario con ese ID
        return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const updatedUser = userUpdate[1][0];

    return res.status(200).json({ message: "Usuario deshabilitado", user: updatedUser });
  } catch (err) {
    console.error(err);
    return res.status(500).json({error: "Error al deshabilitar el usario"})
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
  
      // Restaurar el usuario estableciendo deleted en false
      user.deleted = false;
  
      // Guardar los cambios en la base de datos
      await user.save();
  
      res.status(200).json({ message: "Usuario restaurado exitosamente" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al restaurar el usuario" });
    }
};

module.exports = {deleteUser, restoreUser, inhabilityUser}