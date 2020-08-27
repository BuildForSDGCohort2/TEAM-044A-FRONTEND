import React from "react";

export default function Transactions() {
    return (
        <section className="container">
            <section className="container d-flex justify-content-center mt-2 mb-5">
                <button className="btn btn-outline-info mx-2">Buy</button>
                <button className="btn btn-outline-info mx-2">Sell</button>
                <button className="btn btn-outline-info mx-2">Broker</button>
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
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead className="bg-info text-white">
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>01/02/03</td>
                                    <td>N1000</td>
                                    <td>Some stuff</td>
                                    <td>Buyer</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>01/02/03</td>
                                    <td>N1000</td>
                                    <td>Another stuff</td>
                                    <td>Broker</td>
                                    <td>Pending</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="tab-pane fade p-3 bg-light" id="closed" role="tabpanel" aria-labelledby="closed-tab">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>01/02/03</td>
                                    <td>N1000</td>
                                    <td>Some stuff</td>
                                    <td>Buyer</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>01/02/03</td>
                                    <td>N1000</td>
                                    <td>Another stuff</td>
                                    <td>Broker</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}