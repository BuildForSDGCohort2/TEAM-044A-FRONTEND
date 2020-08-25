import React from "react";
import Form from "./form";

export default function Signup() {
  return (
    <div>
    Sign up Page!
      {" "}
      <div className="card">
      <div className="card-body">
      <h5 class="card-title">Sign up</h5>
      <form>
          <Form className="signup-form" />
        </form>
      </div>
        
      </div>
    </div>
  );
}
