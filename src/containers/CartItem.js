import React, { PropTypes } from 'react'

import { Link} from 'react-router'
const getOptionsArray = (count) => {
  const array = [];
  for (let i = 0; i < count; i++) {
    array.push(i + 1);
  }

  return array;
};
const CartItem = (
  { id, name, price, img, count, stockCount,  onRemoveClick, onEditClick, size, sizeVal }
) => (
  <li className={'cart-item cart-item-' + id}>
    <Link
      to={'/item/' + id}
      className='cart-item-image-link'
    >
      <img
        className='cart-item-image'
        src={img}
      />
    </Link>
    <div className='cart-item-info'>
        <h1 className='cart-item-name'>
          {name}
        </h1>
      <div className='cart-item-value'>
        <span className='cart-item-price'>
          ${price.toFixed(2)}
        </span>
        <span className='cart-item-qty'>
          Qty: <span>   {count} </span>
        </span>
        <span className='cart-item-qty'>
          Size : <span>   {size[sizeVal]}</span>
        </span>
      </div>
    </div>
    <button
      className='cart-item-delete'
      onClick={(e) => {
        onRemoveClick(e, id);
      }}
    >
      Remove
    </button>
    <button
      className='cart-item-delete'
      onClick={(e) => {
        onEditClick(e, id);
      }}
    >
      Edit
    </button>
  </li>
);

CartItem.PropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  stockCount: PropTypes.number.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};

export default CartItem;