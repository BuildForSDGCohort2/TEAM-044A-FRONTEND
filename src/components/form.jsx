import React, { useState } from "react";
import InputTag from "./input";
import Button from "./button";

function Form(props) {
  const [isSignedUp, setIsSignedUp] = useState(false);

  // useEffect(() => {
  //   setIsSignedUp((isSignedUp) => (isSignedUp ? "Login" : "Sign up"));
  // }, []);

  function monitorStatus() {
    setIsSignedUp((isSignedUp) => (isSignedUp ? "Login" : "Sign up"));
  }

  return (
    <div className={props.className}>
      <form>
        <div className="form-group  ">
          <InputTag
            className="form-control"
            type="email"
            value=""
            placeholder="abc@xyz.com"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group ">
          <InputTag
            className="form-control"
            type="password"
            placeholder="enter your password"
          />
        </div>
        <Button
          className="btn btn-primary btn-large"
          type="button"
          // text={isSignedUp ? "Login" : "Sign up"}
          text = "Sign up"
          onClick={monitorStatus}
        />
      </form>
    </div>
  );
}

export default Form;
