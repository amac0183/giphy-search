import { combineReducers } from 'redux';
import {appStatus} from './app_status';
import {favorites} from './favorites';
import {search} from './search';

export const reducers = combineReducers({
  appStatus,
  favorites,
  search
});
