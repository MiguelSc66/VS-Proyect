const { Router } = require("express");

const router = Router();

// Importa los controladores necesarios
const {
  createUser,
  loginUser,
} = require("../controllers/Users/createUsers");
const {
  inhabilityUser,
  deleteUser,
  restoreUser,
} = require("../controllers/Users/deletedUsers")
const {
  getAdmins,
  getUsers,
} = require("../controllers/Users/getUsers")
const {
  loginGoogle,
} = require("../controllers/Users/loginGoogle")
const {
  createReview,
  getAllReviews,
  deletedReview,
} = require("../controllers/Reviews/Reviews");
const {
  getDrink,
  getById,
} = require("../controllers/Drinks/getDrinks");
const {
  updateDrink,
  disableDrink,
  restoredDrink,
} = require("../controllers/Drinks/putDrinks");
const {
  postDrink,
} = require("../controllers/Drinks/postDrinks");
const {
  deleteDrink,
} = require("../controllers/Drinks/deletedDrinks");
const {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  getCartItems,
} = require("../controllers/Cart/Cart");

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
router.delete("/reviews/:id", deletedReview);

router.delete("/drinks/:id", deleteDrink);
router.get("/drinks", getDrink);
router.get("/drinks/:id", getById);
router.post("/drinks/create", postDrink);
router.put("/drinks/upgrade/:id", updateDrink);
router.put("/drinks/disable/:id", disableDrink);
router.put("drinks/enabled/:id", restoredDrink);

router.get("/cart", getCartItems)
router.post("/cart/add", addToCart);
router.delete("/cart/remove/:userId/:id", removeFromCart);
router.put("/cart/update/:cartItemId", updateCartItemQuantity);

module.exports = router;