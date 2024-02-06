// import React from 'react'
// import { Link, useLocation, useNavigate } from "react-router-dom";



// const Navbar = () => {
//     let navigate = useNavigate();
//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         navigate('/EmployeeLogin');
//     }
//     let location = useLocation();
//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="/">Grads On Hire</Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
//                         </li>
//                     </ul>
//                     {localStorage.getItem('token') ?<div className="btn-group">
//                         <button type="button" className="btn btn-primary dropdown-toggle mx-1" data-bs-toggle="dropdown" aria-expanded="false">
//                             Action
//                         </button>
//                         <ul className="dropdown-menu">
//                             <li><Link className="dropdown-item" to="#">My account</Link></li>
//                             <li><Link className="dropdown-item" to="#">Another action</Link></li>
//                             <li><Link className="dropdown-item" to="#">Something else here</Link></li>
//                             <li><hr className="dropdown-divider" /></li>
//                             <li><Link className="dropdown-item" to="#">Separated link</Link></li>
//                         </ul>
//                     </div>: null}
//                     {!localStorage.getItem('token') ? <form className="d-flex">
//                     <Link className="btn btn-primary mx-1" to="/EmployerLogin" role="button">Login</Link>
//                     <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
//                     <div className="btn-group">
//                         <button type="button" className="btn btn-primary dropdown-toggle mx-1" data-bs-toggle="dropdown" aria-expanded="false">
//                             Employer
//                         </button>
//                     <ul className="dropdown-menu">
//                             <li><Link className="dropdown-item" to="/EmployerLogin">Employer Login</Link></li>
//                             <li><Link className="dropdown-item" to="/EmployerSignup">Employer Signup</Link></li>
//                             </ul>
//                             </div>
//                         {/* <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link> */}
//                     </form> : <button onClick={handleLogout} className="btn btn-primary">Logout</button>}
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar

// Navbar.js
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/EmployeeLogin');
  };
  let location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Grads On Hire
        </Link>
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
              <Link
                className={`nav-link ${
                  location.pathname === '/' ? 'active' : ''
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === '/about' ? 'active' : ''
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {localStorage.getItem('token') ? (
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle mx-1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Action
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/employerdetails">
                    My Account
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Another Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Something Else Here
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Separated Link
                  </Link>
                </li>
              </ul>
            </div>
          ) : null}
          {!localStorage.getItem('token') ? (
            <form className="d-flex">
              <Link
                className="btn btn-primary mx-1"
                to="/EmployerLogin"
                role="button"
              >
                Login
              </Link>
              <Link
                className="btn btn-primary mx-1"
                to="/signup"
                role="button"
              >
                Signup
              </Link>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle mx-1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Employer
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/EmployerLogin">
                      Employer Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/EmployerSignup">
                      Employer Signup
                    </Link>
                  </li>
                </ul>
              </div>
            </form>
          ) : (
            <button onClick={handleLogout} className="btn btn-primary">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
