const {Drink} = require("../../db");

// Controlador para eliminar un trago por su ID
const deleteDrink = async (req, res) => {
  try {
    const { id } = req.params;

    // Buscar el trago por su ID
    const drink = await Drink.findByPk(id);

    // Verificar si el trago existe
    if (!drink) {
      return res.status(404).json({ message: "Trago no encontrado" });
    }

    // Eliminar el trago de la base de datos
    await drink.destroy();

    res.status(200).json({ message: "Trago eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el trago" });
  }
};

module.exports = {deleteDrink}
