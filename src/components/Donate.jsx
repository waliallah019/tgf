import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
} from '@stripe/react-stripe-js';
import { CheckoutForm } from '../components/CheckoutForm'


const options = {
  mode: 'payment',
  currency: 'usd',
};

const Checkout = () => {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
  
  return (
    <div className='flex container mt-8'>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </div>
  )
}

export default Checkout
