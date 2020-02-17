import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCash } from '../../actions/cash'


export class Form extends Component {
    state = {
        base_nation: '',
        target_nation: '',
        Data_date: '',
        rate: '',
    }

    static propTypes = {
        addCash: PropTypes.func.isRequired
    }

    onChange = e => this.setState ({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { base_nation, target_nation, Data_date, rate }  = this.state;
        const cash = { base_nation, target_nation, Data_date, rate };
        this.props.addCash(cash);
        this.setState({
            base_nation: "",
            target_nation:"",
            Data_date:"",
            rate:""
        });
    };

    render() {
        const { base_nation, target_nation, Data_date, rate } = this.state;
        return (
          <div className ="card card-body mt-4 bm-4">
            <h2>Add Cash</h2>
            <form onSubmit ={this.onSubmit}>
                <div className="form-group">
                    <label>base nation</label>
                    <select className="custom-select" 
                            name="base_nation"
                            value={base_nation} 
                            onChange={this.onChange}
                    >
                        <option value="" disabled  >Choose..</option>
                        <option value="KRW">KRW</option>
                        <option value="USA">USA</option>
                        <option value="EUR">EUR</option>
                    </select>

                </div>
                <div className="form-group">
                    <label>target nation</label>
                    <select className="custom-select" 
                            name="target_nation"
                            value={target_nation} 
                            onChange={this.onChange}
                    >
                        <option value="" disabled>Choose..</option>
                        <option value="KRW">KRW</option>
                        <option value="USA">USA</option>
                        <option value="EUR">EUR</option>
                    </select>
                </div>
                <div className="form-row">
                    <label>Data date</label>
                    <div className="input-group">
                    <input
                        className="form-control"
                        type="datetime-local"
                        name="Data_date"
                        onChange={this.onChange}
                        value={Data_date}
                    />
                    <div className="input-group-append" >
                         <button className="btn btn-outline-secondary" type="button">Button</button>
                    </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>rate</label>
                    <input
                        placeholder="input number"
                        className="form-control"
                        type="number"
                        name="rate"
                        onChange={this.onChange}
                        value={rate}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>

            </form>
          </div>
        );
    }
}

export default connect(null, { addCash })(Form);
