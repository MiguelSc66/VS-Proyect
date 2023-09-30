const Drink = require("../../models/Drink");

export const postDrink = async (req, res) => {
    try {
        const { name, stock, price, image } = req.body;

        // Verificar si alguno de los campos requeridos está vacío
        if (!name || !stock || !price || !image) {
            return res.status(400).json({ error: "Faltan datos requeridos" });
        }

        // Crear una nueva bebida en la base de datos
        const newDrink = await Drink.create({
            name,
            stock,
            price,
            image,
        });

        // Respondemos con la bebida recién creada
        return res.status(201).json(newDrink);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Error al crear la bebida" });
    }
}
