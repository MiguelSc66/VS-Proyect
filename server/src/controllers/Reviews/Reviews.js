const { Review } = require("../../db");

export const createReview = async (req, res) => {
  try {
    const { email, comment } = req.body;

    const newReview = await Review.create({ email, comment });
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const getAllReviews = async () => {
  try {
    const reviews = await Review.findAll();
    return { status: 200, json: reviews };
  } catch (error) {
    return { status: 500, json: "Error al traer los reviews" };
  }
};

export const deletedReview = async (req, res) => {
  try {
    const {id} = req.params;

    const review = await Review.findByPk(id)

    if(!review) {
      return res.status(404).json({ message: "Review no encontrada"})
    }

    await review.destroy();

    res.status(200).json({ message: "Eliminado de review exitoso"})
  } catch (err) {
    return res.status(500).json(err)
  }
}