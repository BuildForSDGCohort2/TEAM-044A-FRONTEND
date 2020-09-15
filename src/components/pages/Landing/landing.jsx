import React from "react";
import shopping from "./online_shopping.jpg";
import Image from "./online-tsx-img.jpg";
import "./landing.css";

export default function LandingPage() {
  return (
    <div className="container-fluid">
      <section className="item-one lead-1 row-one">
        <div className="intro-header px-3 mx-auto text-center">
          <h1 className="display-4">What we do!</h1>
          <p>
            Do you have this fear of paying for a service or product before
            delivery? <br />
            We have all experienced that timid feeling when transacting with
            someone online.
            <br />
            Fear no more. <strong>MoneyGuard </strong>is here to safeguard your
            money, giving you that peace of mind whenever you shop online and
            the assurance that you will never get scammed.
            <br />
          </p>
          <a
            className="btn btn-outline-primary btn-lnd "
            href="/signup"
            style={{ margin: 1 + "em" }}
          >
            Get started
          </a>
          <a
            className="btn btn-outline-primary btn-lnd "
            href="/contact"
            style={{ margin: 1 + "em" }}
          >
            Contact Us
          </a>
        </div>

        <img
          src={Image}
          style={{ width: 80 + "%", height: 80 + "%" }}
          alt="online shopping"
        />
      </section>

      <section className="item-three lead-2">
        <div className="lnd-img">
          <img
            src={shopping}
            style={{ width: 80 + "%", height: 80 + "%" }}
            alt=""
          />
        </div>
        <div className="intro-header px-3 mx-auto text-center">
          <h1 className="display-4">How we do it!</h1>
          <p className="">
            Simple. effective. Flexible <br />
            Introducing transparency to the commerce space
            <br />
            Our scrow technology being PCI compliant, is easy to use and get
            started with.
          </p>
        </div>
      </section>

      <section className="container jumbotron lead-3">
        <div
          style={{
            border: 1 + "px solid lightblue",
            padding: 2 + "em",
            margin: 2 + "em",
            borderRadius: 5 + "px",
          }}
        >
          <h3>TWO FACTOR AUTHORIZATION</h3>
          Funds are released based on authorization from both parties.
        </div>

        <div
          style={{
            border: 1 + "px solid lightblue",
            padding: 2 + "em",
            margin: 2 + "em",
            borderRadius: 5 + "px",
          }}
        >
          <h3>
            COMPLETE TRANSPARENCY{" "}
            <i
              className="fas fa-handshake"
              style={{ color: "#1DA1F2", fontSize: 40 + "px" }}
            ></i>
          </h3>
          There is transparency on both sides. Both the buyer and the seller can
          see the status of each transaction in realtime!
        </div>

        <div
          style={{
            border: 1 + "px solid lightblue",
            padding: 2 + "em",
            margin: 2 + "em",
            borderRadius: 5 + "px",
          }}
        >
          <h3>GREAT TRUST</h3>
          You are rest assured of the safety of your funds and assets
        </div>
      </section>

      <section className=" jumbotron">
        <header style={{ padding: 1 }}>
          <h3>HOW IT WORKS?</h3>
        </header>
        <div className="lead-4">
          <div>
            <h3>
              Sign Up{" "}
              <i
                className="fas fa-user-plus"
                style={{ color: "#1DA1F2", fontSize: 40 + "px" }}
              ></i>
            </h3>
            Provide details that matches your Bank name and Phone number in
            order to avoid future payouts.
          </div>

          <div>
            <h3>
              Sign In{" "}
              <i
                className="fas fa-sign-in-alt"
                style={{ color: "#1DA1F2", fontSize: 40 + "px" }}
              ></i>
            </h3>
            Provide the email and password used in sign up
          </div>
        </div>

        <a
          className="btn btn-outline-primary "
          href="/signup"
          style={{
            marginTop: 2 + "em",
          }}
        >
          Sign up with MoneyGuard Today
        </a>
      </section>
    </div>
  );
}
