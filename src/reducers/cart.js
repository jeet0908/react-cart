const cartItem = (state, action) => {
  switch (action.type) {
    case 'REMOVE_FROM_CART':
      console.log(state, action.id)
      return state.id !== action.id;
    case 'UPDATE_CART_COUNT_ITEM':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign(
        {},
        state,
        {
          count: action.count,
        }
      );
    case 'UPDATE_CART_SIZE_ITEM':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign(
        {},
        state,
        {
          sizeVal: action.sizeVal,
        }
      );
    
    default:
      return state;
  }
};

const cart = (state = [], action) => {
  switch (action.type) {
    case 'REMOVE_FROM_CART':
      return state.filter(item => cartItem(item, action));
    case 'UPDATE_CART_COUNT_ITEM':
      return state.map(item => cartItem(item, action));
    case 'UPDATE_CART_SIZE_ITEM':
      return state.map(item => cartItem(item, action));
    default:
      return state;
  }
};

export default cart;