import React from 'react';
import { FiHome,   } from 'react-icons/fi';
import { BiBook } from 'react-icons/bi';
import 'bootstrap/dist/css/bootstrap.min.css';
function Sidebar() {
  return (
    <aside className="col col-2">
      <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <a className="navbar-brand" href="index.html">
            <img
              src="src/assets/logo/logo.png"
              alt="Spotify Logo"
              width="131"
              height="40"
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul className='sidebar-nav'>
                <li>
                <a className="nav-item nav-link d-flex align-items-center" href="#">
      <FiHome />&nbsp; Home
    </a>
                </li>
                <li>
                <a className="nav-item nav-link d-flex align-items-center" href="#">
      <BiBook />&nbsp; Your Library
    </a>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary btn-sm h-100 btn-go"
                      >
                        GO
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-btn">
          <button className="btn signup-btn" type="button">Sign Up</button>
          <button className="btn login-btn" type="button">Login</button>
          <div>
          <a href="#">Cookie Policy</a> | <a href="#"> Privacy</a>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;