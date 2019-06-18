
// removeFromCart
export const removeFromCart = (id) => (
  {
    type: 'REMOVE_FROM_CART',
    id,
  }
);

// updateCartItem
export const updateCartCountItem = (id, count) => (
  {
    type: 'UPDATE_CART_COUNT_ITEM',
    id,
    count,
  }
);

export const updateCartSizeItem = (id, sizeVal) => (
  {
    type: 'UPDATE_CART_SIZE_ITEM',
    id,
    sizeVal,
  }
);


