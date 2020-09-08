import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'

export default function login(){
        const bodyStyle = document.querySelector("body").style;
        bodyStyle.backgroundImage = "linear-gradient(to bottom, #F6F6F2, #C2EDCE)";
        bodyStyle.height = "100%"
        bodyStyle.margin = "0"
        bodyStyle.backgroundRepeat = "no-repeat"
        bodyStyle.backgroundAttachment = "fixed"
        bodyStyle.fontFamily = "Rubik, sans-serif"; 

        return(
            <div className="container-fluid mt-5">
                <div className="justify-content-center">
                    <div id="login-container" className="mx-auto">
                        <form>
                            <div id="login-form-inputs" className="form-group">
                                <p className="text-center" style={{fontSize: "1.5rem", color: "#388087"}}>LOGIN</p>
                                <input 
                                type="email"
                                className="form-control"
                                id="email-address"
                                placeholder="Email address"></input>
                                
                                <input 
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"></input>
                            </div>
                            <button type="submit" className="btn">Submit</button>
                        </form>
                    </div>
                    <div className="mx-auto text-light py-3" id="login-cta">
                        <p className="text-center text-dark">
                            New to MoneyGuard? 
                            <p>
                                <Link to={"/signup"} className="text-center text-dark"><b>Sign up</b></Link>
                                <br></br>
                                <Link to={"#"} className="text-center text-dark"><b>Forgot your password?</b></Link>
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        )
}