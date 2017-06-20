import * as actions from './types';

export const fetchDynamicData = () => {
  return dispatch => {
    dispatch({
      type: actions.FETCH_DATA
    });
  }
}
