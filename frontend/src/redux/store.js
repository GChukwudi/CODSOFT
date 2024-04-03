import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { loadJobsReducer } from './reducers/jobReducers';


// combine all reducers
const reducer = combineReducers({
    loadJobs: loadJobsReducer
});


// initial state
let initialState = {};
const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    );


export default store;