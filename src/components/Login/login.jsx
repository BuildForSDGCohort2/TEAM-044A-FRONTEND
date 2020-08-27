import React from 'react';

export default function Login() {
    return (
        <section className="container">
            <div className="card d-flex justify-content-center mt-5">
                <form className="p-5">
                    <h4>Login</h4>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="check" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember Password</label>
                    </div>
                    <a href="/dashboard" className="btn btn-info">Login</a>
                </form>
            </div>
        </section>
    )
}