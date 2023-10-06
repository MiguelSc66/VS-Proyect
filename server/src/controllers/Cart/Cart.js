const { CartItem} = require('../../db')


// Agregar un elemento al carrito
const addToCart = async (req, res) => {
    try {
      const { userId, drinkId, quantity } = req.body;
  
      // Verificar si el elemento ya está en el carrito del usuario
      let cartItem = await CartItem.findOne({
        where: {
          userId,
          drinkId,
        },
      });
  
      if (!cartItem) {
        // Si el elemento no existe en el carrito, crear uno nuevo
        cartItem = await CartItem.create({
          userId,
          drinkId,
          quantity,
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
      const { userId, cartItemId } = req.params;
  
      const cartItem = await CartItem.findOne({
        where: {
          userId,
          id: cartItemId,
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
      const { cartItemId } = req.params;
      const { quantity } = req.body;
  
      const cartItem = await CartItem.findByPk(cartItemId);
  
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
  };