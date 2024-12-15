// src/pages/Home.js
import React from 'react';
import './Home.css'; // Add CSS for the home page
import gazaImage from '../assets/img1.png';
import currsit from '../assets/img2.jpg';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="intro-section">
        <div className="intro-content">
          <h1>Together for Gaza</h1>
          <p>
            <strong>We stand in solidarity and in support with the people of Gaza. We extremly condemn the Israeli Opperession against the innocent people of Gaza and the attrocities committed by Israeli forces</strong>
          </p>
          <p>The "Together for Gaza" project is a charitable initiative aimed at raising awareness and support for the people of Gaza who continue to face immense challenges due to ongoing conflict and hardship. Through this platform, we aim to connect compassionate individuals and organizations with the cause, allowing them to easily donate and contribute to various charitable organizations working in Gaza. The website showcases the current situation in Gaza, the critical needs of the people, and provides a simple yet secure way for users to contribute to humanitarian aid efforts. Our goal is to empower users to make a difference by supporting vital efforts in Gaza, ensuring that help reaches those who need it the most.
          </p>
         
          <br />
          <a href="/donate" className="donate-btn">Donate Now</a>
        </div>
      </section>

    {/* What is happening in Gaza Section */}
    <section className="gaza-section">
        <div className="gaza-content">
          <h2 className="gaza-heading">What is Happening in Gaza</h2>
          <p>
            <strong>We stand in solidarity and in support with the people of Gaza. </strong>
          </p>
          <p> The situation in Palestine remains dire, as the Palestinian people continue to face systematic oppression, displacement, and violence. Occupied by Israel for decades, the Palestinians have been subjected to harsh living conditions, including restricted access to basic resources, forced evictions, and the demolition of homes. The ongoing blockade of Gaza has led to severe humanitarian crises, with limited access to food, healthcare, and clean water. Palestinians have been fighting for their right to self-determination, freedom, and an end to the illegal occupation. The international community has witnessed numerous violations of human rights, but despite global calls for justice, the struggle of the Palestinian people continues to be met with violence and repression. Supporting the Palestinian cause means advocating for their right to live in peace, dignity, and with the freedom to build a future free from occupation and fear.
          </p>
        </div>
        <div className="gaza-image">
          <img src={gazaImage} alt="People of Gaza" />
        </div>
      </section>


      <section className="current-section">
        <div className="current-content">
          <h2 className="current-heading">On Ground Situation</h2>
          <p>
            <strong>We stand in solidarity and in support with the people of Gaza. </strong>
          </p>
          <p> The situation in Palestine remains dire, as the Palestinian people continue to face systematic oppression, displacement, and violence. Occupied by Israel for decades, the Palestinians have been subjected to harsh living conditions, including restricted access to basic resources, forced evictions, and the demolition of homes. The ongoing blockade of Gaza has led to severe humanitarian crises, with limited access to food, healthcare, and clean water. Palestinians have been fighting for their right to self-determination, freedom, and an end to the illegal occupation. The international community has witnessed numerous violations of human rights, but despite global calls for justice, the struggle of the Palestinian people continues to be met with violence and repression. Supporting the Palestinian cause means advocating for their right to live in peace, dignity, and with the freedom to build a future free from occupation and fear.
          </p>
        </div>
        <div className="currsec-image">
          <img src={currsit} alt="People of Gaza" />
        </div>
      </section>
      {/* Donation Section */}
      <section className="donation-section">
        <div className="donation-header">
          <h2>How You Can Help</h2>
        </div>
        <div className="donation-content">
          <p>Your generous donation can provide food, medicine, and shelter for those in need.</p>
          <a href="/donate" className="donate-btn">Donate Now</a>
        </div>
      </section>

      {/* Recent Updates Section */}
      <section className="updates-section">
        <div className="section-header">
          <h2>Recent Updates</h2>
        </div>
        <div className="updates-content">
          <ul>
            <li>New shipment of medical supplies arrived in Gaza.</li>
            <li>Over 100 families provided with essential food packs.</li>
            <li>Our volunteers are on the ground working to distribute aid.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;
