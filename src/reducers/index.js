import Cookies from 'js-cookie';
import {
  FETCH_USERS,
  NEW_RECORD,
  LOGIN,
  LOGOUT,
  FETCH_RECORDS,
} from '../actions/types';

const user = Cookies.get('user');

const initialState = {
  users: [],
  user: user ? JSON.parse(user) : {},
  auth: !!user,
  records: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case FETCH_RECORDS:
      return {
        ...state,
        records: action.payload,
      };
    case NEW_RECORD:
      return {
        ...state,
        records: [...state.records, action.payload],
      };
    case LOGIN:
      Cookies.set('user', action.payload);
      return {
        ...state,
        auth: true,
        user: action.payload,
        records: action.records,
      };
    case LOGOUT:
      return {
        ...state,
        auth: false,
        user: {},
        records: [],
      };
    default:
      return state;
  }
};

export default userReducer;
