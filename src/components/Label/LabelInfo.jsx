import React from "react";

const LabelInfo = ({ labelfor, labeltitle }) => {
  return <label htmlFor={labelfor}>{labeltitle}</label>;
};

export default LabelInfo;
