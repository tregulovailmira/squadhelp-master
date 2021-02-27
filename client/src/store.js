import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootSaga from './sagas';
import {initSocket} from './api/ws/socketController';



const sagaMiddleware=createSagaMiddleware();
const store=createStore(rootReducers,composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

initSocket(store);

export default store;
