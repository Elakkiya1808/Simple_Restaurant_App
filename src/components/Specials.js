import React from 'react';
import greekSalad from '../assets/images/greek_salad-img.jpeg';
import bruschetta from '../assets/images/bruchetta-img.jpeg';
import lemonDessert from '../assets/images/lemon_desert-img.jpeg';

function Specials() {
  return (
    <section className="py-5">
      <div className="container text-center">
        <div style={{ display: 'flex', alignItems: 'center', gap: '300px', marginLeft: '200px' }}>
          <h2 style={{ margin: 0, fontSize: '50px' }}><strong>This week's specials!</strong></h2>
          <button className="btn btn-warning mt-3">Online Menu</button>
        </div>

        <div className="row mt-5 g-4">
          <div className="col-md-4">
            <div className="specials-card bg-light">
              <img src={greekSalad} className="img-fluid" alt="Greek Salad" />
              <h5>Greek Salad</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="specials-card bg-light">
              <img src={bruschetta} className="img-fluid" alt="Bruschetta" />
              <h5>Bruschetta</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="specials-card bg-light">
              <img src={lemonDessert} className="img-fluid" alt="Lemon Dessert" />
              <h5>Lemon Dessert</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specials;
