import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth'

import { GET_CASH, DELETE_CASH, ADD_CASH } from './types';

// GET CASH
export const getCash = () => (dispatch, getState) =>  {
    axios
        .get("/api/cash/", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_CASH,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

// DELETE CASH 
export const deleteCash = (id) => (dispatch, getState) =>  {
    axios
        .delete(`/api/cash/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteCash: "Cash Deleted" }));
            dispatch({
                type: DELETE_CASH,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

// ADD CASH
export const addCash = (cash) => (dispatch, getState) =>  {
    axios
        .post("/api/cash/", cash, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addCash: "Cash Added" }));
            dispatch({
                type: ADD_CASH,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};