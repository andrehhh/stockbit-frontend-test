import { combineReducers } from "redux";

import keywordReducer from './keywordReducer';

const reducers = combineReducers({
    keywords: keywordReducer
})

export default reducers;