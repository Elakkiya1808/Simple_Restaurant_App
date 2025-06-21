import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specials from './components/Specials';
import ReservationForm from './components/ReservationForm'; // import your reservation form
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Specials />
            </>
          }
        />
        <Route path="/reserve" element={<ReservationForm />} />
         <Route path="/about" element={<ComingSoon />} />
        <Route path="/login" element={<ComingSoon />} />
        <Route path="/menu" element={<ComingSoon />} />
      <Route path="/order" element={<ComingSoon />} />
         
      </Routes>
    </>
  );
}

export default App;
