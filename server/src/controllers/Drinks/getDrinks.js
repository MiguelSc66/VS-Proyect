const Drink = require("../../models/Drink");

export const getDrink = async (req, res) => {
    try {
        const findDrink = await Drink.findAll()
        return res.status(200).json(findDrink)
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
}

export const getById = async (req, res) => {
    try {
        const {id} = req.param;
        const drinks = await Drink.findAll({where: {id}});

        return res.status(200).json(drinks)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}