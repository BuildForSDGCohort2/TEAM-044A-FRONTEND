import React from 'react';

export default function Disputes() {
    return (
        <section className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="bg-secondary p-3 shadow text-white rounded" style={{ "height": "10vh" }}>
                        <h5>Disputes</h5>
                    </div>
                </div>
            </div>

            <div className="text-right my-3">
            <button className="btn btn-outline-info">New Dispute</button>
            </div>

            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Status</th>
                            <th scope="col">Date</th>
                            <th scope="col">Decision</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td className="text-warning">Pending</td>
                            <td>01/02/03</td>
                            <td>lorem ipsum</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td className="text-warning">Pending</td>
                            <td>01/02/03</td>
                            <td>lorem ipsum</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td className="text-success">Resolved</td>
                            <td>01/02/03</td>
                            <td>lorem ipsum</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td className="text-success">Resolved</td>
                            <td>01/02/03</td>
                            <td>lorem ipsum</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}