import React from 'react'
import Button from '../ButtonV2/Button';

const ShoppingCard = ({ products }) => {
  return (
    
    <div className='shoppingContainer'>
        {products?.map((product, index) => (
          <div key={index} className='shoppingCard'>
            <img src={product?.image} width={200} height={200}/>
            <div style={{ display: "flex" }}>
             <p>Product Name: </p>{product.title}
             </div>
             <span>Pric: {product?.price}</span>
             <div style={{ display: "flex" }}>
                <p>Description: </p>{product?.description}
            </div>
            <Button text={"Add to Cart"} bgColor={"green"} colorParams={"#fff"}/>
          </div>
        ))}
    </div>
  
 
)
}

export default ShoppingCard;