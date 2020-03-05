import {combineReducers} from 'redux';

import PageReducer from './page/reducer';

const rootReducer = combineReducers({
    page: PageReducer
});

export default rootReducer;
