import React from 'react';
import axios from 'axios';

export default function Navbar() {
  const enterProfile = () => {
    window.location.href = '/user/lk';
  };
  return (
    <div className="p-3 mb-2 bg-secondary text-white">
      <nav className="navbar navbar-expand-lg bg-body-tertiary rounded " style={{ backgroundColor: 'silver' }}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="/">LEARN ENGLISH</a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active link-secondary" aria-current="page" href="/thems">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active link-secondary">Link</a>
              </li>
            </ul>

            <button onClick={enterProfile} className="btn btn-outline-success" type="button">Personal Area</button>

          </div>
        </div>
      </nav>
    </div>
  );
}
