import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <footer class="pt-4 my-md-5 pt-md-5 border-top">
      <div class="row">
        <div class="col-12 col-md">
          {/* <img class="mb-2" src="../../assets/brand/bootstrap-solid.svg" alt="" width="24" height="24"/> */}
          <a className="navbar-brand text-info font-weight-bold" href="/">
            MoneyGuard
          </a>

          <ul class="list-unstyled text-small">
            <li>mg@mgmail.com</li>
            <li>+123456789</li>
          </ul>
          <small class="d-block mb-3 text-muted">&copy; 2019-2020</small>
        </div>

        <div class="col-6 col-md">
          <h5>Product</h5>
          <ul class="list-unstyled text-small">
            <li>
              <a class="text-muted" href="/">
                Instant escrow
              </a>
            </li>
            <li>
              <a class="text-muted" href="/">
                Privacy policy
              </a>
            </li>

            <li>
              <a class="text-muted" href="/">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>

        <div class="col-6 col-md">
          <h5>Company</h5>
          <ul class="list-unstyled text-small">
            <li>
              <a class="text-muted" href="/">
                About us
              </a>
            </li>
            <li>
              <a class="text-muted" href="/">
                FAQ
              </a>
            </li>
            <li>
              <a class="text-muted" href="/">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="icons">
          <i
            class="fab fa-twitter  fa-2x"
            aria-hidden="true"
            style={{ color: "#1DA1F2", fontSize: 50, marginRight: 1 }}
          ></i>
          <i
            class="fab fa-facebook fa-2x"
            style={{ color: "#4267B2", fontSize: 50, marginLeft: 1 }}
          ></i>
        </div>
      </div>
    </footer>
  );
}
