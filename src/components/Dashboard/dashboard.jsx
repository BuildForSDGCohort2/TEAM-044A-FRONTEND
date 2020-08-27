import React from "react";

export default function MainDashboard() {
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="bg-secondary p-3 shadow text-white rounded" style={{ "height": "10vh" }}>
                        <h5>User Dashboard Overview</h5>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card p-3 h-100 bg-info shadow text-white rounded d-flex">
                        <h5>Hi Sadiq Sambo,</h5>
                        <p className="mt-5">Welcome to your MoneyGuard Dashboard where you have an overview of your transactions and activities</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card p-3 pt-3 h-100 rounded">
                        <div className="text-center">
                            <i className="fas fa-chart-line fa-2x text-muted mb-5"></i>
                            <h2 className="text-muted">0</h2>
                            <p className="text-uppercase">total transactions</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-6">
                    <div className="card p-3 pt-3 h-100  rounded">
                        <div className="text-center">
                            <i className="fas fa-clipboard-check fa-2x text-muted mb-5"></i>
                            <h2 className="text-muted">0</h2>
                            <p className="text-uppercase">Accepted Transactions</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card p-3 h-100  rounded">
                        <div className="text-center">
                            <i className="fas fa-chart-pie fa-2x text-muted mb-5"></i>
                            <h2 className="text-muted">0</h2>
                            <p className="text-uppercase">Completed Transactions</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}