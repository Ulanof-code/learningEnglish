import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [error, setError] = useState({});
    const loginHandler = (e) => {
        e.preventDefault();
        axios.post('/', Object.fromEntries(new FormData(e.target)))
            .then(() => window.location = '/thems')
            .cath((err) => setError(err));
    };
    return (
        <div className="row">
            <form onSubmit={loginHandler}>
                <div className="mb-3">
                    <label htmlFor="carsemail" className="form-label">
                        Email address
                        <input type="email" name="email" className="form-control" id="carsemail" />
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="carspass" className="form-label">
                        Password
                        <input type="password" name="pass" className="form-control" id="carspass" />
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                {error.message && <div style={{ color: 'black' }}>{error.message}</div>}
                <button onClick={() => window.location = '/signup'} type="button" className="btn btn-danger">check in</button>
            </form>
        </div>
    );
}
