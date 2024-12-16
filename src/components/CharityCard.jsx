import React from 'react';
import { Helmet } from 'react-helmet';

const CharityCard = ({ charity }) => {
  return (
    
    <div className="charity-card">
      <Helmet>
        <title>{charity.name} - Charity Information</title>
        <meta name="description" content={charity.description} />
        <meta property="og:title" content={charity.name} />
        <meta property="og:description" content={charity.description} />
      </Helmet>
      <h2>{charity.name}</h2>
      <p>{charity.description}</p>
      <button>View More</button>
    </div>
  );
};

export default CharityCard;
