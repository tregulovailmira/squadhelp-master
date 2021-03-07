import ACTION from '../actions/actionTypes';
import { produce } from 'immer';

const initialState = {
    isFetching: false,
    error: null,
    transactions: []
};

export default function (state = initialState, action) {
    const { type } = action; 
    switch (type) {
        case ACTION.GET_TRANSACTIONS_REQUEST: {
            return produce(state, draftState => {
                draftState.isFetching = true;
            });
        }

        case ACTION.GET_TRANSACTIONS_SUCCESS: {
            const { payload: { data } } = action;
            return produce(state, draftState => {
                draftState.isFetching = false;
                draftState.transactions = [...data];
            })
        }

        case ACTION.GET_TRANSACTIONS_ERROR: {
            const { payload: { error } } = action;
            return produce(state, draftState => {
                draftState.isFetching = false;
                draftState.error = error;
            })
        }
        default: return state;
    }
}