import React from 'react';
import unrwa from '../assets/unrwa.jpeg';
 import islamic_relief from '../assets/islamic.png';
import pcrf from '../assets/pcrf.png';
// import map from './assets/map.jpg';
import './Donate.css';
import getStripe from '../lib/getStripe';


const Donate = () => {
  async function handleCheckout() {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: process.env.REACT_APP_STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: `http://localhost:3000/donate`,
      cancelUrl: `http://localhost:3000/`,
    });
    console.warn(error.message);
  }

  
  const organizations = [
    {
      name: "UNRWA (United Nations Relief and Works Agency)",
      description: "UNRWA provides food, education, and medical services to Palestinian refugees in Gaza and across the region.",
      website: "https://www.unrwa.org/",
      image: unrwa, // Use imported variable
    },
    {
      name: "Islamic Relief Worldwide",
      description: "A global charity providing emergency aid, medical support, and essential resources to Palestinians affected by conflict.",
      website: "https://www.islamic-relief.org/",
      image: islamic_relief,
    },
    {
      name: "Palestine Children's Relief Fund (PCRF)",
      description: "The PCRF is dedicated to providing medical care and humanitarian aid to Palestinian children in need.",
      website: "https://www.pcrf.net/",
      image: pcrf,
    },
    {
      name: "Medical Aid for Palestinians (MAP)",
      description: "MAP delivers healthcare and medical aid to those affected by the ongoing conflict in Gaza.",
      website: "https://www.map.org.uk/",
      //image: map,
    },
  ];
  

  return (
    <div className="donate-page">
      <h1>Support Gaza and Palestine</h1>
      <p className="donate-intro">
        Your contributions can make a significant impact on the lives of those suffering in Gaza and Palestine. Below is a list of trusted organizations working tirelessly to bring relief and support.
      </p>

      {organizations.map((org, index) => (
        <div
          key={index}
          className="organization-layer"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${org.image})`,
          }}
        >
          <div className="organization-content">
            <h2>{org.name}</h2>
            <p>{org.description}</p>
            <a href={org.website} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
            <button
              onClick={handleCheckout}
              className="donate-button"
            >
              Donate
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Donate;
