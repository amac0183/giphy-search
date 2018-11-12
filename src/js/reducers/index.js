import { combineReducers } from 'redux';
import {search} from './search';
import {favorites} from './favorites';

export const reducers = combineReducers({
  favorites,
  search
});
