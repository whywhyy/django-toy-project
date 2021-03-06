import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCash, deleteCash } from '../../actions/cash';
import {Bar, Line, Pie} from 'react-chartjs-2';


export class Cash extends Component {
    static propTypes ={
        cash: PropTypes.array.isRequired,
        getCash : PropTypes.func.isRequired,
        deleteCash : PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getCash();
    }
    render() {
        const chartdata = {
            labels:this.props.cash.map(cash=>(cash.Data_date)),
            datasets:[
                {
                    label:'Rate',
                    data:this.props.cash.map(cash=>(cash.rate)),
                    backgroundColor:[]
                }
            ]
        }
        return (
            <div>
                <h2>Cash List</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>BASE NATION</th>
                            <th>TARGET NATION</th>
                            <th>RATE</th>
                            <th></th>
                        </tr>
                    </thead>    
                    <tbody>
                        { this.props.cash.map(cash=>(
                            <tr key={cash.id}>
                                <td>{cash.id}</td>
                                <td>{cash.Data_date}</td>
                                <td>{cash.base_nation}</td>
                                <td>{cash.target_nation}</td>
                                <td>{cash.rate}</td>
                                <td>
                                    <button onClick={this.props.deleteCash.bind(this,cash.id)} className="btn btn-danger btn=sm">Delete</button>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>

                <Bar
                    data={chartdata}
                    width={10}
                    height={5}
                    options={{
                        title:{
                            display:true,
                            text:'Cash Status'
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                     }}
                    />
            </div>

        );
    }
}

const mapStateToProps = state => ({
    cash : state.cash.cash
});

export default connect(mapStateToProps,{ getCash, deleteCash })(Cash);
