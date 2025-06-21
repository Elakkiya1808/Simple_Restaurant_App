import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [activeLink, setActiveLink] = useState('/home');
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservations', path: '/reserve' },
    { name: 'Order Online', path: '/order' },
    { name: 'Login', path: '/login' },
  ];

  const handleClick = (path) => {
    setActiveLink(path);
    navigate(path);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light py-3">
      <div className="container">
        <span className="navbar-brand fw-bold">🍋 LITTLE LEMON</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {navItems.map(({ name, path }) => (
              <li className="nav-item" key={path}>
                <button
                  className={`nav-link btn btn-link ${activeLink === path ? 'active' : ''}`}
                  onClick={() => handleClick(path)}
                  style={{ textDecoration: 'none' }}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
