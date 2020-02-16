import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    };
    
    componentDidUpdate(prevProps){
        const { error, alert, message } = this.props;
        if(error !== prevProps.error) {
            // Nedd More fields 
            if(error.msg.rate) alert.error(`rate: ${error.msg.rate.join()}`);
            if(error.msg.base_nation) alert.error(`base_nation: ${error.msg.base_nation.join()}`);
            if(error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
            if(error.msg.username) alert.error('USERNAME : '+ error.msg.username.join());
            if(error.msg.password) alert.error('PASSWORD : '+ error.msg.password.join());
            if(error.msg.email) alert.error('EMAIL : '+ error.msg.email.join());

        }

        if(message !== prevProps.message){
            if(message.deleteCash) alert.success(message.deleteCash);
            if(message.addCash) alert.success(message.addCash);
            if(message.passwordNotMatch) alert.error(message.passwordNotMatch);
        }
    }

    render() {
        return <Fragment />;
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)( withAlert()(Alerts) );
