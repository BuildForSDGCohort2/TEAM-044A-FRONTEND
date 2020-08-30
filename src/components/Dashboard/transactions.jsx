import React from "react";

export default function Transactions() {
    return (
        <section className="container">

            <section className="container d-flex justify-content-center mt-2 mb-5">
                <a href="/dashboard/create-transactions" className="btn btn-outline-info mx-2">Create Transaction</a>
            </section>

            <ul className="nav nav-tabs d-flex justify-content-center" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="active-tab" data-toggle="tab" href="#active" role="tab" aria-controls="active" aria-selected="true">Active Transactions</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="closed-tab" data-toggle="tab" href="#closed" role="tab" aria-controls="closed" aria-selected="false">Closed Transactions</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade bg-light p-3 show active" id="active" role="tabpanel" aria-labelledby="active-tab">
                    <div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src="..." alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Transaction title</h5>
                                        <p className="card-text">Some brief description.</p>
                                        <button className="btn btn-warning">Status</button>
                                        <button className="ml-1 btn btn-dark">View details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src="..." alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Transaction title</h5>
                                        <p className="card-text">Some brief description.</p>
                                        <button className="btn btn-danger">Status</button>
                                        <button className="ml-1 btn btn-dark">View details</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src="..." alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Transaction title</h5>
                                        <p className="card-text">Some brief description.</p>
                                        <button className="btn btn-info">Status</button>
                                        <button className="ml-1 btn btn-dark">View details</button>
                                    </div>
                                </div>
                            </div>

                            <div className="w-100 d-none d-md-block mt-2"></div>

                            <div className="col-6 col-sm-4">
                                <div className="card" style={{ width: "18rem" }}>
                                    <img className="card-img-top" src="..." alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">Transaction title</h5>
                                        <p className="card-text">Some brief description.</p>
                                        <button className="btn btn-info">Status</button>
                                        <button className="ml-1 btn btn-dark">View details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade p-3 bg-light" id="closed" role="tabpanel" aria-labelledby="closed-tab">
                    <div className="row">
                        <div className="col-6 col-sm-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src="..." alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Transaction title</h5>
                                    <p className="card-text">Some brief description.</p>
                                    <button className="ml-1 btn btn-dark">View details</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src="..." alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Transaction title</h5>
                                    <p className="card-text">Some brief description.</p>
                                    <button className="ml-1 btn btn-dark">View details</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-sm-4">
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src="..." alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">Transaction title</h5>
                                    <p className="card-text">Some brief description.</p>
                                    <button className="ml-1 btn btn-dark">View details</button>
                                </div>
                            </div>
                        </div>

                        <div className="w-100 d-none d-md-block mt-2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}