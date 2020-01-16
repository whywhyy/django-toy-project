import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages'


export class Register extends Component {
    state = {
        username: '',
        email : '',
        password: '',
        password2: ''
    };

    static propTypes ={
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    };

    onSubmit = e => {
        e.preventDefault();
        const { username, email, password, password2 } = this.state;
        if (password != password2){
            this.props.createMessage({ passwordNotMatch: 'Password do not match'});
        } else{
            const newUser = {
                username,
                password,
                email
            };
            this.props.register(newUser);
        }
    };
    onChange = e => this.setState({ [e.target.name]: e.target.value});

    render() {
        if(this.props.isAuthenticated){
            return <Redirect to="/" />;
        }
        const {username, email, password, password2} = this.state;
        return (
            <div className="container">
                <form className="form-horizontal" onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h2>Register New User</h2>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 ">
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon"   ><i className="fa fa-user"></i></div>
                                    <input
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
                        <div className="col-md-3 ">
                            <label htmlFor="email">E-Mail Address</label>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon"   ><i className="fa fa-at"></i></div>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        onChange={this.onChange}
                                        value={email}
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
                        <div className="col-md-3 ">
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group has-danger">
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon"   ><i className="fa fa-key"></i></div>
                                    <input
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
                        <div className="col-md-3 ">
                            <label htmlFor="password">Confirm Password</label>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                    <div className="input-group-addon"   >
                                        <i className="fa fa-repeat"></i>
                                    </div>
                                    <input
                                        type="password"
                                        name="password2"
                                        className="form-control"
                                        onChange={this.onChange}
                                        value={password2}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-success"><i className="fa fa-user-plus"></i> Register</button>
                        </div>
                        <div className="col-md-4">
                            Already have an account? <Link to="/login"> login </Link>
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

export default connect(mapStateToProps, { register, createMessage })(Register);