import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../utils/newRequest.js";
import CheckoutForm from "../components/CheckoutForm.jsx";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51Mk4OXBZVxJ8pjjvA9lskR0HmyejiDwHYflyaX3WcLkUpozGLV9GNcuVf180QFLHDZGozKT9n872QhQl0oaKnqsh00t6uDbJh1"
);

function Pay() {
  const [clientSecret, setClientSecret] = useState("");
  const {id} = useParams()

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post("purchase/create-payment-intent",{price:Number(id)});
        setClientSecret(res.data.clientSecret);
      } catch (error) {
        alert(error);
      }
    };
    makeRequest();
  }, []);

  const appearance = {
    theme: "flat",
    variables: {
        
        colorText: '#30313d',
        colorDanger: '#df1b41',
        fontFamily: 'Ideal Sans, system-ui, sans-serif',
        spacingUnit: '5px',
        borderRadius: '4px',
        
      }
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <main className="flex-1 px-10 md:px-24 py-10">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </main>
  );
}

export default Pay;
