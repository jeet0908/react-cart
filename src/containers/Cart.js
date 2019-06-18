import React, { PropTypes } from 'react'
import CartItems from '../containers/CartItems' 
import Total from '../containers/Total'     

const Cart = ({ cart, onQtyChange, onSizeChange, onRemoveClick, onPayClick }) => (
  <div className='cart'>  
    <h1 className='main-header cart-header'>My Cart</h1>
    <CartItems
      cart={cart}
      onQtyChange={onQtyChange}
      onSizeChange={onSizeChange}
      onRemoveClick={onRemoveClick}
    />
    <Total cart={cart} />
  </div>
);

Cart.PropTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    stockCount: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onQtyChange: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onSizeChange : PropTypes.func.isRequired,
  onPayClick: PropTypes.func.isRequired,
};

export default Cart