const {Drink} = require("../../db");

// Ruta para modificar un trago por completo por su ID
const updateDrink = async (req, res) => {
    try {
        const { id } = req.params; // ID del trago a modificar
        const { name, stock, price, image } = req.body; // Nuevos datos del trago
        
        // Buscar el trago por su ID
        const drink = await Drink.findByPk(id);
        
        // Verificar si el trago existe
        if (!drink) {
            return res.status(404).json({ message: "Trago no encontrado" });
        }

        // Actualizar los datos del trago
        drink.name = name;
        drink.stock = stock;
        drink.price = price;
        drink.image = image;

        // Guardar los cambios en la base de datos
        await drink.save();
        
        return res.status(200).json({ message: "Trago modificado exitosamente", drink });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Error al modificar el trago" });
    }
};

const disableDrink = async (req, res) => {
    try {
        const { id } = req.params; // ID del trago a deshabilitar

        // Buscar el trago por su ID
        const drink = await Drink.findByPk(id);
        
        // Verificar si el trago existe
        if (!drink) {
            return res.status(404).json({ message: "Trago no encontrado" });
        }

        // Establecer el trago como deshabilitado
        drink.enabled = false;

        // Guardar los cambios en la base de datos
        await drink.save();
        
        return res.status(200).json({ message: "Trago deshabilitado exitosamente", drink });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Error al deshabilitar el trago" });
    }
};

module.exports = {disableDrink, updateDrink}