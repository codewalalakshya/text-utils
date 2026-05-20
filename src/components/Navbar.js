import React from "react"
import PropTypes from 'prop-types';
export default function Navbar(props) {
      return ( 
      
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">

          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src={props.logo}
              alt={props.logoAlt}
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
            />
            {props.title}
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/link">
                  About
                </a>
              </li>

            </ul>

            {/* <form className="d-flex" role="search">

              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}

              {/* <button
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button> */}

            {/* </form> */}
             <div class="form-check form-switch" text="light">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
              </div>

          </div>
        </div>
      </nav> 
      );
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  logo: PropTypes.string,
  logoAlt: PropTypes.string
};
Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About text here',
  logo: '/logo.png',
  logoAlt: 'App logo'
};  