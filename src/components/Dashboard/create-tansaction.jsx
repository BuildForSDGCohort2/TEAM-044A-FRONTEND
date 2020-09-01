import React from "react";

export default function CreateTransaction() {
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="bg-info p-3 shadow text-white rounded" style={{ "height": "10vh" }}>
                        <h5>Create Transaction</h5>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="card p-3">
                        <form className="create-transaction-form">
                            <div className="form-row">
                                <div className="col">
                                    <label htmlFor="fname">First name</label>
                                    <input type="text" className="form-control" placeholder="First name" />
                                </div>
                                <div className="col">
                                    <label htmlFor="lname">Last name</label>
                                    <input type="text" className="form-control" placeholder="Last name" />
                                </div>
                            </div>
                            <div className="form-row mt-3">
                                <div className="col">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                                </div>
                                <div className="col">
                                    <label htmlFor="phone">Phone Nnumber</label>
                                    <input type="number" className="form-control" id="phone" placeholder="+234XXX" />
                                </div>
                            </div>
                            <div className="form-row mt-3">
                                <div className="col">
                                    <label htmlFor="inspection">Inspection period</label>
                                    <input type="text" className="form-control" id="inspection" placeholder="Inspection period" />
                                </div>
                                <div className="col">
                                    <label htmlFor="inspection">Due date</label>
                                    <input type="date" className="form-control" id="duedate" />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="title">Transaction title</label>
                                <input type="text" className="form-control" id="title" placeholder="Title" />
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="description">Transaction description</label>
                                <textarea className="form-control" id="description" rows="3"></textarea>
                            </div>
                            <div className="form-row mt-3">
                                <div className="col">
                                    <label htmlFor="currency">Currency</label>
                                    <select className="form-control" id="currency">
                                        <option>Select currency</option>
                                        <option>&#8358;</option>
                                        <option>&#36;</option>
                                        <option>&pound;</option>
                                        <option>&euro;</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="amount">Amount</label>
                                    <input type="number" className="form-control" id="amount" placeholder="Enter amount" />
                                </div>
                            </div>
                            <div className="text-center mt-3">
                                <button type="submit" class="btn btn-block btn-info">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}