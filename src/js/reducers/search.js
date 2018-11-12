import _ from 'lodash';

export const search = (state = {}, action) => {
  const {type} = action;

  switch(type) {
    case 'SEARCH':
      return _.merge({}, state, {
        searchString: action.searchString
      });
    case 'LOAD_RESULTS':
      const newState = _.cloneDeep(state);
      newState.results = action.results;
      return newState;
    case 'UPDATE_FAVORITE_STATUS':
      return _.merge({}, state, {
        results: _.map(state.results, giphy => {
          if(giphy.id === action.id) {
            giphy.favorite = !giphy.favorite; 
          }
          return giphy;
        })
      })
    case 'UPDATE_FAVORITE_STATUSES':
      return _.merge({}, state, {
        results: _.map(state.results, giphy => {
          if(_.findIndex(action.favorites, (id) => id === giphy.id ) !== -1) {
            giphy.favorite = true;
          }
          return giphy;
        })
      })
    default:
      return state;
  }
}
