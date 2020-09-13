import React from "react";

export default function LandingPage() {
  return (
    <section className="container-fluid lnd-container">
      {/* <div className="row-one"> */}
      <div className="item-one lead">
        Do you have this fear of paying for a service or product before
        delivery? <br />
        We have all experienced that timid feeling when transacting with someone
        online.
        <br />
        Fear no more. <strong>MoneyGuard </strong>is here to safeguard your
        money, giving you that peace of mind whenever you shop online and the
        assurance that you will never get scammed.
        <br />
        <a className="btn btn-outline-primary btn-lnd " href="/signup">
          Get started
        </a>
        <a className="btn btn-outline-primary btn-lnd " href="/contact">
          Contact Us
        </a>
      </div>
      <div className="item-two lead">
        <div className="lnd-img">
          <img src={Image} width="80%" height="80%" alt="" />
        </div>
      </div>
      {/* </div> */}

      {/* <div className="row-two"> */}
      <div className="item-three lead">
        <div className="lnd-img">
          <img src={shopping} width="80%" height="80%" alt="" />
        </div>
      </div>
      <div className="item-four lead">
        <div class="intro-header px-3 mx-auto text-center">
          <h1 class="display-4">What we do</h1>
          <p class="">
            Simple. effective. Flexible <br />
            Introducing transparency to the commerce space
            <br />
            Our scrow technology being PCI compliant, is easy to use and get
            started with.
          </p>
        </div>
      </div>
      {/* </div> */}

      <div className="container jumbotron flex-type">
        <div>
          <h3>TWO FACTOR AUTHORIZATION</h3>
          Funds are released based on authorization from both parties.
        </div>
        <i
          class="fa fa-arrow-right"
          style={{ justifySelf: "center", fontSize: 80 }}
          aria-hidden="true"
        ></i>
        <div>
          <h3>COMPLETE TRANSPARENCY</h3>
          There is transparency on both sides. Both the buyer and the seller can
          see the status of each transaction in realtime!
        </div>
        <i
          class="fa fa-arrow-right"
          style={{ justifySelf: "center", fontSize: 80 }}
          aria-hidden="true"
        ></i>
        <div>
          <h3>GREAT TRUST</h3>
          You are rest assured of the safety of your funds and assets
        </div>
      </div>

      <div className=" jumbotron flex-type">
        <header style={{ padding: 1 }}>
          <h3>HOW IT WORKS?</h3>
        </header>

        <div className="nested-div" style={{ border: 1 }}>
          <div>
            <h3>Sign Up</h3>
            Provide details that matches your Bank name and Phone number in
            order to avoid future payouts.
          </div>
          <i
            class="fa fa-arrow-right"
            style={{ justifySelf: "center", fontSize: 80 }}
            aria-hidden="true"
          ></i>
          <div>
            <h3>PUT A SIGN UP IMAGE HERE</h3>
            There is transparency on both sides. Both the buyer and the seller
            can see the status of each transaction in realtime!
          </div>

          <div style={{ gridRowStart: 3, gridColumnStart: 3 }}>
            <h3>Sign In</h3>
            Provide the email and password used in sign up
          </div>
          <i
            class="fas fa-arrow-down"
            style={{ gridColumnStart: 3, justifySelf: "center", fontSize: 80 }}
          ></i>
          <div
            style={{
              gridRowStart: 3,
              gridColumnStart: 1,
              justifySelf: "center",
            }}
          >
            <i
              class="fas fa-sign-in-alt"
              style={{ justifySelf: "center", fontSize: 80 }}
            ></i>
          </div>

          <i
            class="fas fa-arrow-left"
            style={{ gridColumnStart: 2, justifySelf: "center", fontSize: 80 }}
          ></i>

          <button
            className="btn btn-info btn-lg "
            style={{
              gridColumnStart: 1,
              gridColumnEnd: 4,
              justifySelf: "center",
            }}
          >
            Sign up with MoneyGuard Today
          </button>
        </div>
      </div>
    </section>
  );
}
