import _ from 'lodash';
import 'babel-polyfill';
import {put, takeEvery} from 'redux-saga/effects';
import {clearError, setError} from '../actions/app_status';
import {loadResults, updateFavoritesStatuses} from '../actions/search';

const pickResponseData = (json) => {
  return _
    .chain(_.get(json, 'data'))
    .map(giphy => ({
      id: _.get(giphy, 'id'),
      url: _.get(giphy, 'images.fixed_height.url'),
      favorite: false,
      name: _.get(giphy, 'title')
    }))
    .value()
}

export function* fetchGiphys({favorites, searchString}) {
  try {
    // @todo pass api key from config, not safe to have api_key here
    const response = yield fetch(`https://api.giphy.com/v1/gifs/search?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q=${encodeURI(searchString)}`);
    const json = yield response.json();
    const pickedData = pickResponseData(json);
    yield put(loadResults(pickedData));
    yield put(updateFavoritesStatuses(favorites));
    yield put(clearError());
  } catch (e) {
    yield put(setError(`Could not fetch from Giphy: ${e}`));
  }
}

export function* root() {
  yield takeEvery('SEARCH', fetchGiphys);
}
