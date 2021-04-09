import React from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext, Product } from './App';

export default function NavBar() {
  let cartItems = React.useContext<Product[]>(CartContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Cart: <b>{cartItems.length}</b>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
