import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsCount } from '../../../../redux/cart/cart.selector';
import {
  cartAddItem,
  cartRemoveItem,
} from '../../../../redux/cart/cart.action';
import ButtonAddRemoveItem from '../../ButtonAddRemoveItem';
import './styles.css'
import { connect } from 'react-redux';

const MenuItem = ({ 
  item, 
  cartCount, 
  cartList, 
  cartAddItem, 
  cartRemoveItem 
}) => {
  const { id, name, price, img } = item;

  const handleItemQuantity = () => {
    let quantity = 0;
    if(cartCount !== 0){
      const foundItemInCart = cartList.find(item => item.id === id);

      if(foundItemInCart){
        quantity = foundItemInCart.quantity;
      }
    }

    return quantity;
  };

  return (
    <div className="item">
        <img src={img} alt="item" />
        <div className="item-head_desc">
            <p className="head_desc-name">{name}</p>
        </div>
        <div className="item-foot_desc">
            <span className="foot_desc-price">${price}</span>
            <ButtonAddRemoveItem 
              quantity={handleItemQuantity()} 
              handleAddItem={() =>  cartAddItem(item)}
              handleRemoveItem={() =>  cartRemoveItem(item)}
            />
        </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  cartAddItem: item => dispatch(cartAddItem(item)),
  cartRemoveItem: item => dispatch(cartRemoveItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);