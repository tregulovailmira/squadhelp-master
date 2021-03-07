import { put } from 'redux-saga/effects';
import { getTransactionRequest, getTransactionSuccess, getTransactionError } from '../actions/actionCreator';
import * as restController from '../api/rest/restController';

export function * getTransactionsSaga() {
    yield put(getTransactionRequest());

    try {
        const { data: { data: transactions } } = yield restController.getTransactions();
        yield put(getTransactionSuccess(transactions));
    } catch (error) {
        yield put(getTransactionError(error));
    }
}