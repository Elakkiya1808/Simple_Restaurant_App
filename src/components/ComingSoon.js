import React from 'react';

function ComingSoon() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '80vh' }}>
      <h1 className="display-4 mb-3">Page Under Construction</h1>
      <p className="lead text-muted">Our page is coming soon. Stay tuned!</p>
      <div className="spinner-border text-warning mt-4" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default ComingSoon;
