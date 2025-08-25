import React from 'react'
import useShoppingCart from './useShoppingCart';
import ShoppingCard from '../ShoppingCard';

const ShoppingCart = () => {
    const { products } = useShoppingCart();

  return (
    <div>
      <ShoppingCard  products={products} />
    </div>
  )
}

export default ShoppingCart;