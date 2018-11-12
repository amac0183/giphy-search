import _ from 'lodash';

export const appStatus = (state = {}, action) => {
  const {type} = action;

  switch(type) {
    case 'SET_ERROR_MESSAGE':
      return _.merge({}, state, {
        error: true,
        message: action.message
      });
    case 'CLEAR_ERROR_STATUS':
      return _.merge({}, state, {
        error: false,
        message: ''
      })
    default:
      return state;
  }
}
