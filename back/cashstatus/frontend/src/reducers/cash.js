import { GET_CASH, DELETE_CASH, ADD_CASH } from '../actions/types.js';

const initalState = {
    cash : []
}

export default function(state = initalState, action) {
    switch(action.type){
        case GET_CASH:
            return {
                ...state,
                cash: action.payload
            }
        case DELETE_CASH:
            return {
                ...state,
                cash: state.cash.filter(cash => cash.id !== action.payload)
            };
        case ADD_CASH:
            return {
                ...state,
                cash: [...state.cash, action.payload]
            };
        default:
            return state;
    }
}