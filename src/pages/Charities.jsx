import React, { useState, useEffect } from 'react';
import CharityCard from '../components/CharityCard';
import './Charities.css';

const Charities = () => {
  const [charities, setCharities] = useState([]);

  useEffect(() => {
    // Mock data or API call
    setCharities([
      { name: 'Charity A', description: 'Helping with food supplies' },
      { name: 'Charity B', description: 'Medical aid for Gaza' },
    ]);
  }, []);

  return (
    <div className="charities">
      <h1>Available Charities</h1>
      {charities.map((charity, index) => (
        <CharityCard key={index} charity={charity} />
      ))}
    </div>
  );
};

export default Charities;
