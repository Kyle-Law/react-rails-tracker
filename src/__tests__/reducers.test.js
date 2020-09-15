import userReducer from '../reducers';

const initialState = {
  users: [],
  user: {},
  auth: false,
  records: [],
};

it('handles actions of type LOGIN', () => {
  const action = {
    type: 'LOGIN',
    payload: { id: 1, username: 'kyle' },
  };

  const newState = userReducer(initialState, action);

  expect(newState.user).toEqual({ id: 1, username: 'kyle' });
  expect(newState.auth).toEqual(true);
});

it('handles actions of type LOGOUT', () => {
  const action = {
    type: 'LOGOUT',
    payload: '',
  };

  const newState = userReducer(initialState, action);

  expect(newState.auth).toEqual(false);
});

it('handles action with unknown type', () => {
  const newState = userReducer(initialState, { type: 'ASDKLJAD' });

  expect(newState).toEqual(initialState);
});
