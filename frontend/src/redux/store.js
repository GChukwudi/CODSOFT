import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadJobReducer } from '../redux/reducers/jobReducer';


// combine all reducers
const reducer = combineReducers({
    loadJobs: loadJobReducer // loadJobs is the key in the state object
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