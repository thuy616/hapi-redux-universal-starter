import * as actions from '../actions/types';

const initialState = {
  data: null
}

export default function(state=initialState, action) {
  switch (action.type) {
    case actions.FETCH_DATA:
      return {...state, data: 'some dynamic data from the redux store' }
    default:
      return state;
  }
  return state;
}
