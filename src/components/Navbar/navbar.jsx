import React, { useState, useEffect } from "react";

export default function Navbar() {
    let [token, updateToken] = useState("");

    useEffect(() => {
        try {
            let token = localStorage.getItem("money_guard_token");
            if (token) {
                updateToken(token);
            }
        } catch (e) {
            console.log("error", e);
        }
    },[]);

    const logout = () => {
        localStorage.removeItem("money_guard_token");
        window.location = "/";
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand text-info font-weight-bold" href="/">MoneyGuard</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                </ul>

                {token ?
                    <button onClick={logout} className="btn btn-sm btn-danger">Logout <i class="fas fa-sign-out-alt"></i></button>
                    :
                    <form className="form-inline my-2 my-lg-0">
                        <a href="/login" className="btn btn-outline-info my-2 mr-1 my-sm-0">Login</a>
                        <a href="/signup" className="btn btn-info  my-sm-0">Register</a>
                    </form>
                }
            </div>
        </nav>
    );
}
