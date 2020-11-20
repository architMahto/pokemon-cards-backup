import { combineReducers } from 'redux';

import backupsStateReducer from './Reducers/backupsStateReducer';

export default function rootReducer() {
  return combineReducers({
    backupsState: backupsStateReducer
  });
};
