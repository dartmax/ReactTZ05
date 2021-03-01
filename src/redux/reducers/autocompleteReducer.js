import initialState from '../../store/InitialState';
import injectReducer from '../../store/InjectReducer';

import {GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAILURE} from '../types';

export default injectReducer(initialState, {
  // Get data from API
  [GET_DATA]: state => ({
    ...state,
    list: [],
    isRequest: true,
    error: null
  }),
  [GET_DATA_SUCCESS]: (state, {payload}) => ({
    ...state,
    list: payload,
    isRequest: false,
    error: null
  }),
  [GET_DATA_FAILURE]: (state, {payload}) => ({
    ...state,
    list: [],
    isRequest: false,
    error: payload
  }),
});
