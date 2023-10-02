import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <h1>Frog Travel!</h1>
        <ul>
          <li>
            <a href="rewards.html">Rewards Program</a>
          </li>
          <li>
            <a href="bookflight.html">Book A Flight</a>
          </li>
          <li>
            <a href="contact.html">Contact Us</a>
          </li>

          <li>
            <a href="login.html">Log In</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
