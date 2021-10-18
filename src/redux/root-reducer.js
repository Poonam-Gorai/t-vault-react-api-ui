import { combineReducers } from 'redux';

import createSafeReducer from './createSafe/createSafe.reducer';

export default combineReducers ({
    createSafe: createSafeReducer
})