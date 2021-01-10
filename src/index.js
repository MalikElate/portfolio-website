import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import axios from 'axios'; 
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import {takeEvery, put} from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_PROJECTS_CARD_INFO', getProjects); 
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const projectCardInfo = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS_CARD_INFO':
            return action.payload;
        default:
            return state;
    }
} 
// get the genre for movie on details page 
function* getProjects(){ 
    try {
        const response = yield axios.get('https://tnijvjh31f.execute-api.us-east-1.amazonaws.com/dev');
        yield put({type: 'SET_PROJECTS_CARD_INFO', payload: response.data.body})
        console.log('AWS portfolio-stite-project-data lambda function sent back:', response.data.body);
    }
    catch (error) {
        console.log('error with projects get request', error);
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projectCardInfo
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));

