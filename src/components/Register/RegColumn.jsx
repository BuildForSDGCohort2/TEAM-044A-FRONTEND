import React, { Fragment } from "react";
import Form from "../Form/Form";
import Input from "../Input/Input";
import LabelContainer from "../Label/LabelContainer";
import LabelInfo from "../Label/LabelInfo";
import InputContainer from "../Input/InputContainer";
import Button from "../Button/Button";

const RegColumn = ({
  firstName,
  onSubmit,
  onChange,
  lastName,
  username,
  password,
  phoneNumber,
  email,
  loadBtn,
}) => {
  const bodyStyle = document.querySelector("body").style;
  bodyStyle.backgroundImage = "linear-gradient(to bottom, #F6F6F2, #C2EDCE)";
  bodyStyle.backgroundRepeat = "no-repeat";
  bodyStyle.overflow = "hidden";
  bodyStyle.height = "100%";
  bodyStyle.fontFamily = "Rubik, sans-serif";
  return (
    <Fragment>
      <div id="reg-column">
        <h3 style={{ color: "#388087" }}>REGISTRATION</h3>
        <Form divid="form-row1-label" onSubmit={onSubmit}>
          <LabelContainer id="form-row1-label">
            <LabelContainer id="firstNameLabel">
              <LabelInfo labelfor="firstName" labeltitle="First Name" />
            </LabelContainer>
            <LabelContainer id="lastNameLabel">
              <LabelInfo labelfor="lastName" labeltitle="Last Name" />
            </LabelContainer>
          </LabelContainer>
          <InputContainer id="form-row1-input">
            <InputContainer id="firstNameInput">
              <Input
                type="text"
                name="firstName"
                value={firstName}
                id="firstName"
                onChange={onChange}
              />
            </InputContainer>
            <InputContainer id="lastNameInput">
              <Input
                type="text"
                onChange={onChange}
                name="lastName"
                value={lastName}
                id="lastName"
              />
            </InputContainer>
          </InputContainer>
          <LabelContainer id="form-row2-label">
            <LabelInfo labelfor="email" labeltitle="Your Email" />
          </LabelContainer>
          <InputContainer id="form-row2-input">
            <Input
              type="email"
              onChange={onChange}
              name="email"
              value={email}
              id="email"
            />
          </InputContainer>
          <LabelContainer id="form-row3-label">
            <LabelInfo labelfor="phoneNumber" labeltitle="Phone Number" />
          </LabelContainer>
          <InputContainer id="form-row3-input">
            <Input
              type="text"
              onChange={onChange}
              name="phoneNumber"
              value={phoneNumber}
              id="phoneNumber"
            />
          </InputContainer>
          <LabelContainer id="form-row4-label">
            <LabelInfo labelfor="username" labeltitle="Username" />
          </LabelContainer>
          <InputContainer id="form-row4-input">
            <Input
              type="text"
              onChange={onChange}
              name="username"
              value={username}
              id="username"
            />
          </InputContainer>
          <LabelContainer id="form-row5-label">
            <LabelInfo labelfor="password" labeltitle="Password" />
          </LabelContainer>
          <InputContainer id="form-row5-input">
            <Input
              type="password"
              onChange={onChange}
              value={password}
              name="password"
              id="password"
            />
          </InputContainer>
          {!loadBtn ? (
            <Button type="submit" id="btn-register" name="Register" />
          ) : (
            <Button type="submit" spinner id="btn-register" name="Register" />
          )}
        </Form>
      </div>
    </Fragment>
  );
};

export default RegColumn;
