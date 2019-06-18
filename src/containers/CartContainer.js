import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { removeFromCart, updateCartCountItem, updateCartSizeItem, removeStockItem } from '../actions'
import Cart from './Cart'


const CartContainer = connect(
  (state) => (
    {
      cart: state.cart.map(cartItem => {
        return {
          id: cartItem.id,
          name: cartItem.name,
          price: cartItem.price,
          img: cartItem.img,
          count: cartItem.count,
          size : cartItem.size,
          sizeVal : cartItem.sizeVal,
          stockCount: cartItem.count,
        };
      }),
    }
  ),
  (dispatch) => (
    {
      onQtyChange: (id, count) => {
        dispatch(updateCartCountItem(id, count));
      },

      onSizeChange:(id, sizeVal) => {
        dispatch(updateCartSizeItem(id, sizeVal));
      },

      onRemoveClick: (e, id) => {
        e.preventDefault();
        dispatch(removeFromCart(id));
      },

      dispatch: (reducer) => dispatch(reducer),
    }
  ),
  (stateProps, dispatchProps, ownProps) => (
    Object.assign({}, ownProps, stateProps, dispatchProps, {
      onPayClick: () =>
        stateProps.cart.map(item => {
          dispatchProps.dispatch(removeStockItem(item.id, item.count));
          dispatchProps.dispatch(removeFromCart(item.id));
        }),
    })
  )
)(Cart);

export default CartContainer;