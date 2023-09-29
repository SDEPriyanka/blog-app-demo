import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
const cartProdcuts =  useSelector(state => state.cart)
  return (
    <div>{JSON.stringify(cartProdcuts)}</div>
  )
}

export default Cart