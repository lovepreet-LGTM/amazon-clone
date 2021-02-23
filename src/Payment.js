import React, {useState, useEffect} from 'react'
import "./Payment.css";
import CheckoutProduct from"./CheckoutProduct";
import {getBasketTotal} from "./Reducer";
import {Link, useHistory} from 'react-router-dom';
import CurrencyFormat from "react-currency-format";
import { useStripe, CardElement, useElements} from "@stripe/react-stripe-js";
import { useStateValue } from './StateProvider';
import axios from "./axios";
import {db} from "./firebase.js";
function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const history= useHistory();
    const elements = useElements();
   const[error, setError] = useState(null);
    const [processing, setProcessing]=useState("");
    const[succeeded, setSucceeded] = useState(false);
   const[disabled, setDisabled]= useState(null);
   const[clientSecret, setClientSecret] = useState();
  
   useEffect(() => { 
// generate the special stripe scret which allows to charge customer
    const getClientSecret = async () => {
    const response = await axios({
        //Stripe expects the total in a currencies submit
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket)*100}`
    });
    console.log('Daivik Response',response)
     setClientSecret(response.data.clientSecret);
    
    }
     getClientSecret();
   
},[basket])
console.log('secret---keyyyyy',clientSecret);
   const handleSubmit= async(event) =>{
        event.preventDefault();
        setProcessing(true);
        const payload= await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {

            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({
                type:'EMPTY_BASKET'
            })
            history.replace('/orders')
        } )
        //paymentIntent=payment confirmation

       
    }
    const handleChange = e =>
    {
        //listen for changes in card event
        //and display erors as customer type their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");

    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout{<Link to="/checkout">({basket?.length} items) </Link>}
                </h1>
            
            <div   className="payment__section">
                <div className="payment__title">
                    Delivery Address
                </div>
                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>Los angeles</p>
                </div>
            </div>
            <div   className="payment__section">
                <div className="payment__title">
                    <p>Review items and Delivery</p>
                </div>
                <div className="payment__items">
                {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title} 
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
                </div>
            </div>
            <div   className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
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
                                    value={getBasketTotal(basket)} // Part of the homework
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                             />
                             <button disabled={processing || disabled || succeeded}>
                                 <span>{processing ? <p>Processing..</p> : "Buy now" }</span>
                             </button>


                            </div>
                            
                            
                            {error && <div>{error}</div>}
                        </form>
                </div>

            </div>
            </div>
            </div>
    )
}

export default Payment
