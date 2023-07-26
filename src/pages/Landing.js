import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="container">
      <h1>Welcome to our Website!</h1>
      <p>This is the home page content.</p>
      <p>
        <Link to='/login'>Login</Link> or{" "}
        <Link to="/registration">Register</Link> to get started.
      </p>

    </div>
  );
}

export default Landing;
