import React from "react";

export default function verifyEmail() {
    return (
        <section className="vh-100 bg-info">
            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-12 d-flex justify-content-center">
                    <div className="card p-5">
                        <h4>Verify your Email</h4>
                        <p className="mt-2">Hi <span>John Doe</span>! Use the link below to verify your email address and start using Escrow!</p>
                        <a className="btn btn-info text-white mt-3">Verify Email</a>
                    </div>
                </div>
            </div>
        </section>
    )
};