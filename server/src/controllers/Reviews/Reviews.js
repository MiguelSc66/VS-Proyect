const { Review } = require("../../db");

const createReview = async (req, res) => {
  try {
    const { email, comment } = req.body;

    const newReview = await Review.create({ email, comment });
    res.status(201).json(newReview);
  } catch (error) {
    console.error("Error al crear la revisión:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};


const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error al traer los reviews:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const deletedReview = async (req, res) => {
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

module.exports = {deletedReview, getAllReviews, createReview}