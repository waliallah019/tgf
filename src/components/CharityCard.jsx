import React from 'react';

const CharityCard = ({ charity }) => {
  return (
    <div className="charity-card">
      <h2>{charity.name}</h2>
      <p>{charity.description}</p>
      <button>View More</button>
    </div>
  );
};

export default CharityCard;
