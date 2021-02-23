import React from 'react'
import "./Order.css"
import CheckoutProduct from "./CheckoutProduct"
import moment from "moment";
import CurrencyFormat from "react-currency-format";
function Order({order}) {
    return (
        <div className="order">
            <h1>Order</h1>
            <p>{moment.unix(order.data.created).format("MMMM DD YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item =>
                (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title} 
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                  />
            ))}
                    <CurrencyFormat
                                    renderText={(value) => (
                                    <>
                                        <p>
                                        {/* Part of the homework */}
                                      <h3> Order total: {value}</h3> 
                                        </p>
                                       
                                    </>
                                    )}
                                    decimalScale={2}
                                    value={order.data.amount} // Part of the homework
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                             />
        </div>
    )
}

export default Order
