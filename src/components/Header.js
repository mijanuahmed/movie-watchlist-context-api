import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div clasName="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">WatchList</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Watch List</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li className="btn btn-main">
              <Link to="/add">+ Add</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
