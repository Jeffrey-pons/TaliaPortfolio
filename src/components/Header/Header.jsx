import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <Link to="/works">WORKS</Link>
          </li>
          <li style={{ fontWeight: 600 }}>
            <Link to="/">XXV.V.MM</Link>
          </li>
          <li>
            <Link to="/profil">PROFIL</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
