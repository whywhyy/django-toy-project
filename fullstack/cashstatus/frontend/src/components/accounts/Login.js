import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';


export class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    static propTypes ={
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value});

    render() {
        if(this.props.isAuthenticated){
            return <Redirect to="/" />;
        }
        const {username, password } = this.state;
        return (
            <div className="container">
                <form className="form-horizontal" onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h2>Login</h2>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1 "></div>
                        <div className="col-md-2 ">
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                    <input
                                        placeholder="Username"
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        onChange={this.onChange}
                                        value={username}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-control-feedback">
                                <span className="text-danger align-middle">

                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1 "></div>
                        <div className="col-md-2 ">
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group has-danger">
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <span className="input-group-text"> <i className="fa fa-key"></i> </span>
                                    <input
                                        placeholder="password"
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        onChange={this.onChange}
                                        value={password}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-control-feedback">
                                <span className="text-danger align-middle">
                                    <i className="fa fa-close"> Example Error Message</i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-success">
                                <i className="fa fa-user-plus"></i> 
                                Login
                                </button>
                        </div>
                        <div className="col-md-4">
                            Don't have an account? <Link to="/register"> Register </Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);