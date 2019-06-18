import React, { PropTypes } from 'react'

const Total = ({ cart }) => {
  const subTotal = cart.length ? cart.reduce((acc, item) => (
        acc + item.price * item.count * item.sizeVal
      ), 0).toFixed(2) : Number(0).toFixed(2);
  const tax = Number(((subTotal * 5) / 100)).toFixed(2);
  const total = Number(Number(subTotal) + Number(tax)).toFixed(2);
 return(
  <div className='cart-total'>
   <div>
    <span className='cart-total-label'>
      Sub Total:
    </span>
    <span className='cart-total-value'>
      ${subTotal}
    </span>
    </div>
    <div>
    <span className='cart-total-label'>
      Estimate Tax:
    </span>
    <span className='cart-total-value'>
      ${tax}
    </span>
    </div>
    <div>
    <span className='cart-total-label'>
      Total:
    </span>
    <span className='cart-total-value'>
      ${total}
    </span>
    </div>
  </div>
)
};

Total.PropTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default Total;