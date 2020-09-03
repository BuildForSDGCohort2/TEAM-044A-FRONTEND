import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css';

class Signup extends Component{
    render(){
        const bodyStyle = document.querySelector("body").style;
        bodyStyle.backgroundImage = "linear-gradient(to bottom, #F6F6F2, #C2EDCE)";
        bodyStyle.backgroundRepeat = "no-repeat";
        bodyStyle.overflow = "hidden"
        bodyStyle.height = "100%"
        bodyStyle.fontFamily = "Rubik, sans-serif"; 
        
        return(
            <div className="container-fluid py-5">
                <div id="reg-form-container">
                    <div id="info-column">
                        <h3 className="text-light">INFORMATION</h3>
                        <p>Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur</p>
                        <Link to="/login">
                            <button type="button" className="btn btn-light">Have an account?</button>
                        </Link>
                    </div>
                    <div id="reg-column">
                        <h3 style={{color: "#388087"}}>REGISTRATION</h3>
                        <form>
                            <div id="form-row1-label">
                                <div id="firstNameLabel">
                                    <label htmlFor="firstName">First Name</label>
                                </div>
                                <div id="lastNameLabel">
                                    <label id="lastName">Last Name</label>
                                </div>
                            </div>
                            <div id="form-row1-input">
                                <div id="firstNameInput">
                                    <input type="text" name="firstName" id="firstName"/>
                                </div>
                                <div id="lastNameInput">
                                    <input type="text" name="lastName" id="lastName"/>
                                </div>
                            </div>
                            <div id="form-row2-label">
                                <label htmlFor="email">Your Email</label>
                            </div>
                            <div id="form-row2-input">
                                <input type="email" name="email" id="email"/>
                            </div>
                            <div id="form-row3-label">
                                <label htmlFor="phonenumber">Phone Number</label>
                            </div>
                            <div id="form-row3-input">
                                <input type="text" name="phonenumber" id="phonenumber" />
                            </div>
                            <div id="form-row4-label">
                                <label htmlFor="username">User Name</label>
                            </div>
                            <div id="form-row4-input">
                                <input type="text" name="username" id="username"/>
                            </div>
                            <div id="form-row5-label">
                                <label htmlFor="password">Password</label>
                            </div>
                            <div id="form-row5-input">
                                <input type="password" name="password" id="password"/>
                            </div>
                            <input type="checkbox" name="termsAndConditions" id="termsAndConditions" required/>I agree to the <Link to="#">Terms and Conditions</Link>
                            <br/>
                            <button id="btn-register" type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;