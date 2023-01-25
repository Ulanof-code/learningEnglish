import React from 'react'
import axios from 'axios'
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
                    <label htmlFor="carsuser" className="form-label">
                       Login
                        <input type="text" name="name" className="form-control" id="carsuser" />
                    </label>
                    <label htmlFor="carspass" className="form-label">
                        Password
                        <input type="password" name="password" className="form-control" id="carspass" />
                    </label>
                </div>

                <button onClick={() => window.location = '/card'} type="submit" className="btn btn-primary">Sign Up</button>


            </form>
        </div>
    );
}