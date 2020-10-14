import React, { Fragment } from "react";

const LabelContainer = (props) => {
  return (
    <Fragment>
      <div id={props.id}>{props.children}</div>
    </Fragment>
  );
};

export default LabelContainer;
