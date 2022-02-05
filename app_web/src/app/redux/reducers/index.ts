import { AppReducer } from './app.reducer';
import { combineReducers } from 'redux';

export const mainReducer = combineReducers({
  workspace: AppReducer.workspaceReducer,
  dataUser: AppReducer.dataUserReducer,
});
