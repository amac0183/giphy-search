import _ from 'lodash';

export const favorites = (state = [], action) => {
  const {type} = action;

  switch(type) {
    case 'ADD_FAVORITE':
      return [
        ...state,
        action.id
      ];
    case 'REMOVE_FAVORITE':
      return _.without(state, action.id);
    default:
      return state;
  }
}
