import React from "react";



function InputTag(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={props.className}
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
     
    />
  );
}

export default InputTag;
