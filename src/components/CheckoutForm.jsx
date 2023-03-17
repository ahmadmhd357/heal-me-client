import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import newRequest from "../utils/newRequest";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/users/usersSlice";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  
  
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {id} = useParams();
  const tickets = id === '10'? 5 : id === '40'? 25 : id ==='70' ? 50 : 0
  
  

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);
  

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return 
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `http://localhost:5173/thankyou/${tickets}`,
      },
    });
    if (error.type === "card_error" || error.type === "validation_error") {
      
       setMessage(error.message);
    } else {
      
       setMessage("An unexpected error occurred.");
    }
    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement id="link-authentication-element" />
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className="mt-10 rounded-md box-border py-2 px-6 w-fit transition-all duration-250 bg-cyan-600 hover:bg-cyan-500 disabled:bg-gray-500"
      >
        <span id="button-text">
          {isLoading ? (
            <div className="spinner" id="spinner">
              {" "}
              Loading...{" "}
            </div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message" className="text-red-600 font-medium">{message}</div>}
    </form>
  );
}

export default CheckoutForm;
