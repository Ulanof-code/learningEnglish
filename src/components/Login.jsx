import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [error, setError] = useState({});
    const loginHandler = (e) => {
        e.preventDefault();
        axios.post('/api/', Object.fromEntries(new FormData(e.target)))
            .then(() => window.location = '/thems')
            .cath((err) => setError(err));
    };
    return (
        <div>
            <body style={{ backgroundImage: "url('https://idc.edu/wp-content/uploads/2018/02/8-Ways-to-Learn-English-Faster.jpg')" }} >
            </body>
            <div className="row" >
                <div className = "col-md-4 offset-md-8">
                <form onSubmit={loginHandler} >
                    <div className="mb-3">
                        <label htmlFor="carsemail" className="form-label" style={{ color: '#1E90FF', fontSize: '2em', fontWeight: '900', transform: ' translateY(35%)' }}>
                            Email address
                            <input type="email" name="email" className="form-control" id="carsemail" />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="carspass" className="form-label" style={{ color: '#1E90FF', fontSize: '2em', fontWeight: '900'}}>
                            password
                            <input type="password" name="pass" className="form-control" id="carspass" />
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ 'marginRight': '15px' }}>Login</button>
                    {error.message && <div style={{ color: 'black' }}>{error.message}</div>}
                    <button onClick={() => window.location = '/signup'} type="button" className="btn btn-danger">check in</button>
                </form>
                </div>
            </div >
        </div >
    );
}
