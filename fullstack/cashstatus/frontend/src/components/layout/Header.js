import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth'

export class Header extends Component {

  static proptypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }
    render() {
      const {isAuthenticated, user} = this.props.auth;

      const authLinks = (
        <>
          <li className="nav-item ">
            <a className="nav-link"> <strong>{user ? `Welcome ${user.username}` : ""}</strong></a>
          </li>
          <li className="nav-item">
            <button onClick={this.props.logout} className="nav-link btn btn-info btn-sm text-light"> Logout </button>
          </li>
        </>
      );

      const guestLinks = (
        <>
        <li className="nav-item">
        <Link to="/register" className="nav-link">Register</Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-link">Login</Link>
      </li>
      </>
      );


        return (
<nav className="navbar navbar-expand-sm navbar-light bg-light">
  <div className="container">
  <a><Link to="/" className="navbar-brand">LOGO</Link></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/" className="nav-link">example menu</Link>
      </li>
          {isAuthenticated? authLinks : guestLinks }
    </ul>
    </div>
  </div>
</nav>
        );
    }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps ,{ logout })(Header);
