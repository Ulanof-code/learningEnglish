import React from 'react'

export default function Login() {
    return (
        <div className="row">
            <form>
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
             
                <button onClick={() => window.location = '/signup'} type="button" className="btn btn-danger">check in</button>
            </form>
        </div>
    );
}
