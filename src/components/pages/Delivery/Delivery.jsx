import React from "react";

export default function ConfirmDelivery() {
  return (
    <section className="container">
      <h4>Confirm Delivery</h4>
      <p className="text-muted">Transactions to be delivered</p>

      <div className="table-responsive">
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Created date</th>
              <th scope="col">Due date</th>
              <th scope="col">View Transaction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
