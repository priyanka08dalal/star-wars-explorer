  
import { combineReducers } from 'redux';

import peopleReducer from './peopleReducer';
// import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    peopleReducer: peopleReducer,
//   searchState: searchReducer,
});

export default rootReducer;