import { Order } from "../../db";

const history = async () => {
  const youOrder = await Order.findAll();
  return youOrder;
};

const postOrder = async (req, res) => {
  try {
    const {userEmail, detail, tax, total, state} = req.params; 

    const saveOrder = await Order.create({
        userEmail,
        detail,
        tax,
        total, 
        state
    });
    res.status(200).json({ message: "Ordern creada con exito", saveOrder})
  } catch (error) {
    res.status(500).json({ message: "Fallo en la creacion de la orden"})
  }
}

module.exports = {postOrder, history}