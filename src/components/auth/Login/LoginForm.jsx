import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Form from "../../Form/Form";
import Input from "../../Input/Input";
import Button from "../../Button/Button";

const LoginForm = ({ email, password, onSubmit, onChange, loadBtn }) => {
  const bodyStyle = document.querySelector("body").style;
  // bodyStyle.backgroundImage = `url(${background})`;
  bodyStyle.backgroundImage = "linear-gradient(to bottom right, #66a8ff 0%, #cbfbd0 100%)";
  bodyStyle.backgroundColor = "#ffffff";
  bodyStyle.backgroundPosition = "center";
  bodyStyle.backgroundRepeat = "no-repeat";
  bodyStyle.backgroundSize = "cover";
  bodyStyle.height = "100%";
  bodyStyle.margin = "0";
  bodyStyle.backgroundRepeat = "no-repeat";
  bodyStyle.backgroundAttachment = "fixed";
  bodyStyle.fontFamily = "Rubik, sans-serif";

  return (
    <Fragment>
      <div id="login-container" className="mx-auto">
        <Form onSubmit={onSubmit}>
          <div id="login-form-inputs" className="form-group">
            <p
              className="text-center"
              style={{ fontSize: "1.5rem", color: "#3888087" }}
            >
              Login
            </p>
            <Input
              type="email"
              className="form-control"
              id="email-address"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
            />
            <Input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Password"
            />
          </div>
          {!loadBtn ? (
            <Button type="submit" className="btn" name="Submit" />
          ) : (
            <Button type="submit" spinner className="btn" />
          )}
        </Form>
      </div>
      <div className="mx-auto text-light py-3" id="login-cta">
        <p className="text-center text-dark">
          New to MoneyGuard?
          <p>
            <Link to={"/signup"} className="text-center text-dark">
              <b>Sign up</b>
            </Link>
            <br></br>
            <Link to={"#"} className="text-center text-dark">
              <b>Forgot your password?</b>
            </Link>
          </p>
        </p>
      </div>
    </Fragment>
  );
};

export default LoginForm;
