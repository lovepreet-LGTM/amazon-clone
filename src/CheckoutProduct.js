import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();
    const Remove_from_basket = () => {
        // remove the item into the data layer
        dispatch({
          type: "REMOVE_FROM_BASKET",
         
            id: id,
            })
      }
 return ( 
        <div className = "checkoutProduct" >
            <img className = "checkoutProduct__image"
             src = { image }/> 
        <div className = "checkoutProduct__info" >
        
        <p className = "checkoutProduct__title" > { title } </p> 
        <p className = "checkoutProduct__price" > < small > $ </small><strong>{price}</strong > </p>

        
        <div className = "checkoutProduct__rating" > {
            Array(rating)
            .fill()
            .map((_, i) => ( 
                <p > 🌟 </p>
            ))
        } 
        </div>

        
        <button onClick={Remove_from_basket}> Remove from Basket </button>
       </div> 
       </div>
    )          
}

export default CheckoutProduct