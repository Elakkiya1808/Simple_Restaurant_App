import React from 'react';
import { useNavigate } from 'react-router-dom';
import homeImage from '../assets/images/home-image.jpeg';

function Hero() {
  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate('/reserve');
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>Little Lemon<br /><span>Chicago</span></h1>
            <p className="mt-3">
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <button className="btn btn-warning mt-3" onClick={handleReservationClick}>
              Reserve a Table
            </button>
          </div>
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src={homeImage}
              className="img-fluid rounded responsive-image"
              alt="Food"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
