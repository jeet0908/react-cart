import React, { PropTypes } from 'react'
import '../css/editModal.css'
const getOptionsArray = (count) => {
    const array = [];
    for (let i = 0; i < count; i++) {
        array.push(i + 1);
    }

    return array;
};



class EditCart extends React.Component {
    state = {
        changedVal: '',
        sizeVal: '',
        count: 0
    };

    onQtyLocalChange = (event) => {
        let value = event.target.value;
        console.log("inside", event)
        this.setState({
            count: value
        });
    }

    onSizeLocalChange = (event) => {
        let value = event.target.value;
        console.log("inside", value)
        this.setState({
            sizeVal: value
        });
    }

    render() {
        const { id, name, price, img, count, stockCount, size, sizeVal, onQtyChange, onModalClose, onEditSave } = this.props;
        return (<div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={onModalClose}>&times;</span>

                <li className={'cart-item cart-item-' + id}>
                    <img
                        className='cart-item-image'
                        src={img}
                        />
                    <div className='cart-item-info'>
                        <h1 className='cart-item-name'>
                            {name}
                        </h1>
                        <div className='cart-item-value'>
                            <span className='cart-item-price'>
                                ${price.toFixed(2)}
                            </span>
                            <span className='cart-item-qty'>
                                Qty:
                             <select
                                    className='cart-item-qty-select'
                                    value={this.state.count == 0 ? count : this.state.count}
                                    onChange={(e) => this.onQtyLocalChange(e, id)}
                                    >
                                    {getOptionsArray(stockCount).map(num =>
                                        <option
                                            key={num}
                                            value={num}
                                            >
                                            {num}
                                        </option>
                                    )}
                                </select>
                            </span>
                            <span className='cart-item-qty'>
                                Size: 
                             <select
                                    className='cart-item-qty-select'
                                    value={this.state.sizeVal == '' ? sizeVal : this.state.sizeVal}
                                    onChange={(e) => this.onSizeLocalChange(e, id)}
                                    >
                                    {Object.entries(size).map(entry => {
                                        return (<option
                                            key={entry[1]}
                                            value={entry[0]}
                                            >
                                            {entry[1]}
                                        </option>);
                                    }
                                    )}
                                </select>
                            </span>
                        </div>
                    </div>
                    <div>
                        <button
                            className='cart-item-delete'
                            onClick={(e) => {
                                console.log("this.state.count - ", this.state.count)
                                onEditSave(this.state.count == 0 ? count : this.state.count, this.state.sizeVal == 0 ? sizeVal : this.state.sizeVal, id);
                            } }
                            >
                            Edit
                        </button>
                        <button
                            className='cart-item-delete'
                            onClick={onModalClose}
                            >
                            Cancel
                        </button>
                    </div>
                </li>
            </div>
        </div>

        )
    }
}

EditCart.PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    stockCount: PropTypes.number.isRequired,
    onQtyChange: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
};


export default EditCart;