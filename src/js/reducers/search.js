import _ from 'lodash';

export const searchReducer = (state, action) => {
  const {type} = action;

  switch(type) {
    case 'SEARCH':
      return _.merge({}, state, {
        searchString: action.text
      });
    case 'LOAD_RESULTS':
      return _.merge({}, state, {
        results: action.response
      });
    default:
      return state;
  }
}
