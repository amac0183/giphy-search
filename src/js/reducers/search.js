import _ from 'lodash';

export const searchReducer = (state = {}, action) => {
  const {type} = action;

  switch(type) {
    case 'SEARCH':
      return _.merge({}, state, {
        searchString: action.searchString
      });
    case 'LOAD_RESULTS':
      return _.merge({}, state, {
        results: action.results
      });
    default:
      return state;
  }
}
