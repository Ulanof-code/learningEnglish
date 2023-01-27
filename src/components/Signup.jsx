import React from 'react';
import axios from 'axios';

export default function Signup() {
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    axios.post('/api/signup', formData)
      .then(() => {
        window.location = '/signup';
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="row">
      <form onSubmit={submitHandler}>

        <div className="mb-3">
          <label htmlFor="carsemail" className="form-label">
            Email address
            <input type="email" name="email" className="form-control" id="carsemail" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="carsuser" className="form-label">
            Login
            <input type="text" name="name" className="form-control" id="carsuser" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="carspass" className="form-label">
            Password
            <input type="password" name="password" className="form-control" id="carspass" />
          </label>
        </div>

        <button onClick={() => window.location = '/thems'} type="submit" className="btn btn-outline-primary">Sign Up</button>

      </form>
    </div>
  );
}
