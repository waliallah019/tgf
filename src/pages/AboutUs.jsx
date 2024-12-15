import React from 'react';
import './AboutUs.css'; // Assuming you create a separate CSS file for styling.

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="about-header">
        <h1>About Us</h1>
      </section>
      <hr />
      <section className="about-section">
        <h2>Our Purpose</h2>
        <p>
          At <strong>Together for Gaza</strong>, our purpose is clear: to stand in solidarity with 
          the people of Gaza and provide them with the aid and resources they need to survive and rebuild.
          We are driven by compassion and a commitment to justice, offering a platform for meaningful action.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create a bridge between those in need and those willing to help. We aim to:
        </p>
        <ul>
          <li>Provide transparent and accessible ways for donors to contribute.</li>
          <li>Support charities and organizations working tirelessly on the ground in Gaza.</li>
          <li>Amplify the voices of those impacted by conflict and humanitarian crises.</li>
        </ul>
        <p>
          We believe in the power of collective action to bring hope and relief to communities in distress.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Story</h2>
        <p>
          Together for Gaza began as a small initiative by a group of concerned individuals 
          who wanted to make a difference. Witnessing the ongoing hardships faced by the people of Gaza, 
          we created a platform to provide aid and foster awareness. What started as a humble project 
          has now grown into a recognized platform connecting donors worldwide to trustworthy organizations 
          making tangible impacts.
        </p>
      </section>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          We are a team of passionate individuals dedicated to making a difference. From students and 
          professionals to volunteers and activists, we come from diverse backgrounds, united by a 
          common goal: to support the people of Gaza in their time of need.
        </p>
      </section>

    </div>
  );
};

export default AboutUs;
