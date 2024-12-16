import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>Checkout - Your Project Name</title>
        <meta name="description" content="Complete your payment securely and easily." />
        <meta property="og:title" content="Checkout - Your Project Name" />
        <meta property="og:description" content="Secure checkout page for making payments. Complete your transaction to proceed." />
      </Helmet>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm />
      </Elements>
    </div>
  )
}

export default Checkout
