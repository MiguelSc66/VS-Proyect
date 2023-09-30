const {Review} = require("../../db")

export const  createReview = async (req, res) => {
    try {
      const { email, comment } = req.body;
  
      const newReview = await Review.create({ email, comment });
      res.status(201).json(newReview);
    } catch (error) {
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };
  
  export const getAllReviews = async () => {
    try {
      const reviews = await Review.findAll(); 
      return {status: 200, json: reviews}
    } catch (error) {
      return {status: 500, json: "Error al traer los reviews"}
    }
  };