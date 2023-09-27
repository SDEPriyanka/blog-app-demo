import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isAuthonticated, setAuthonticated] = useState(false);

  const handelLogout = () => {
    localStorage.removeItem("myToken");
    setAuthonticated(false)
   
  };

  useEffect(() => {
    setAuthonticated(localStorage.getItem("myToken"));
    
  }, []);

  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            Logo
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="Products" class="nav-link">
                  Products
                </Link>
              </li>

              {isAuthonticated === 'True' ? (
                <li class="nav-item">
                  <Link to="signin" class="nav-link" onClick={handelLogout}>
                    Logout
                  </Link>
                </li>
              ) : (
                <li class="nav-item">
                  <Link to="signin" class="nav-link">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
