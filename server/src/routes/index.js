const { Router } = require("express");

const router = Router();

// Importa los controladores necesarios
const {
  getAdmins,
  getUsers,
  inhabilityUser,
  deleteUser,
  restoreUser,
  createUser,
  loginUser,
  loginGoogle,
} = require("../controllers/Users");

const {
  createReview,
  getAllReviews,
  deleteReview,
} = require("../controllers/Reviews");

const {
  deleteDrink,
  getDrink,
  getDrinkById,
  postDrink,
  updateDrink,
  disableDrink,
} = require("../controllers/Drinks");

const {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
} = require("../controllers/Cart");

// Configura las rutas
router.get("/admins", getAdmins);
router.get("/users", getUsers);
router.put("/users/inhability/:id", inhabilityUser);
router.delete("/users/:id", deleteUser);
router.put("/users/restore/:id", restoreUser);
router.post("/users/create", createUser);
router.post("/users/login", loginUser);
router.post("/users/login-google", loginGoogle);

router.post("/reviews/create", createReview);
router.get("/reviews", getAllReviews);
router.delete("/reviews/:id", deleteReview);

router.delete("/drinks/:id", deleteDrink);
router.get("/drinks", getDrink);
router.get("/drinks/:id", getDrinkById);
router.post("/drinks", postDrink);
router.put("/drinks/:id", updateDrink);
router.put("/drinks/disable/:id", disableDrink);

router.post("/cart/add", addToCart);
router.delete("/cart/remove/:userId/:cartItemId", removeFromCart);
router.put("/cart/update/:cartItemId", updateCartItemQuantity);

module.exports = router;