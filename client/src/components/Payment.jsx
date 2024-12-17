// client/src/Payment.js
import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(100); 
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return; // Stripe.js has not yet loaded.
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(/* ... */);

    if (error) {
      console.error(error);
    } else {
      console.log('Payment successful:', paymentIntent);
    }
  };

  return (
   <>
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Payment</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <CardElement className="p-4 border rounded" />
        <button 
          type="submit" 
          disabled={!stripe} 
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Pay
        </button>
      </form>
    </div>
   
   </>
  );
};

export default Payment;
