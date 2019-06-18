import React, { PropTypes } from 'react'
import CartItem from './CartItem'
import EditCart from './EditCart'

class CartItems extends React.Component {

  state = {
    selectedId: '',
    editModal: false
  };

  onEditClick = (e, id) => this.setState({ editModal: true, selectedId: id });

  onEditSave = (count, sizeVal, id) =>{
    console.log("count, sizeVal, id", count, sizeVal, id);
    this.props.onQtyChange(id,count);
    this.props.onSizeChange(id,sizeVal);
    this.setState({editModal :false});
  } 

  onModalClose = () =>  this.setState({ editModal: false });

  render() {
    const { cart, onQtyChange, onRemoveClick } = this.props;
    const {editModal, selectedId } = this.state;

    const selectedItem = cart.find(item => item.id === selectedId) || {};

    if (!cart.length) {
      return <p className='empty-cart'>Cart is empty</p>;
    }

    return (
      <div>
        <ul className='cart-items'>
          {cart.map(item =>
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              img={item.img}
              count={item.count}
              stockCount={item.stockCount}
              sizeVal = {item.sizeVal}
              size = {item.size}
              onRemoveClick={(e, id) => onRemoveClick(e, id)}
              onEditClick={(e, id) => this.onEditClick(e, id)}
              />
          )}
        </ul>
        {editModal &&
          <EditCart
            key={selectedItem.id}
            id={selectedItem.id}
            name={selectedItem.name}
            price={selectedItem.price}
            img={selectedItem.img}
            count={selectedItem.count}
            stockCount={selectedItem.stockCount}
            size = {selectedItem.size}
            sizeVal = {selectedItem.sizeVal}
            onModalClose={this.onModalClose}
            onEditSave = {(count, sizeVal, id) => this.onEditSave(count, sizeVal, id)}
            />
        }
      </div>
    );
  };
};

CartItems.PropTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    stockCount: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  onQtyChange: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};


export default CartItems;

