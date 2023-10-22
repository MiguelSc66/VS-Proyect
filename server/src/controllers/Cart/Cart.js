const { CartItem } = require('../../db');

// En tu controlador de carrito
const getCartItems = async (req, res) => {
  try {
    const { userId } = req.body;

    const cartItems = await CartItem.findAll({
      where: { userId },
    });

    res.status(200).json(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener elementos del carrito' });
  }
};


// Agregar un elemento al carrito
const addToCart = async (req, res) => {
  try {
    const { userId, productId, productName, price, quantity, image } = req.body;

    // Verificar si el elemento ya está en el carrito del usuario
    let cartItem = await CartItem.findOne({
      where: {
        userId,
        productId,
      },
    });

    if (!cartItem) {
      // Si el elemento no existe en el carrito, crear uno nuevo
      cartItem = await CartItem.create({
        userId,
        productId,
        productName,
        price,
        quantity,
        image,
      });
    } else {
      // Si el elemento ya existe en el carrito, actualizar la cantidad
      cartItem.quantity += quantity;
      await cartItem.save();
    }

    res.status(201).json({ message: 'Elemento agregado al carrito exitosamente', cartItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al agregar elemento al carrito' });
  }
};

// Eliminar un elemento del carrito
const removeFromCart = async (req, res) => {
  try {
    const { userId, id } = req.params;

    const cartItem = await CartItem.findOne({
      where: {
        userId,
        id,
      },
    });

    if (!cartItem) {
      return res.status(404).json({ message: 'Elemento del carrito no encontrado' });
    }

    await cartItem.destroy();
    res.status(200).json({ message: 'Elemento eliminado del carrito exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar elemento del carrito' });
  }
};

// Actualizar la cantidad de un elemento en el carrito
const updateCartItemQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;

    const cartItem = await CartItem.findByPk(id);

    if (!cartItem) {
      return res.status(404).json({ message: 'Elemento del carrito no encontrado' });
    }

    cartItem.quantity = quantity;
    await cartItem.save();

    res.status(200).json({ message: 'Cantidad de elemento en el carrito actualizada exitosamente', cartItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar cantidad del elemento en el carrito' });
  }
};

module.exports = {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  getCartItems,
};
