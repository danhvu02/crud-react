import React from 'react';
import {Link } from "react-router-dom";
import '../App.scss';

const NavBar = props => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/" exact>Home</Link>
                </li>
                <li>
                    <Link to="/categories">Manage Categories</Link>
                </li>
                <li>
                    <Link to="/items">Manage Items</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
}

export default NavBar;
