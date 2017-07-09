import { fromJS } from 'immutable';
import * as C from '../../constants/ActionTypes';

// Initial auth state
const authInitialState = fromJS({
  status: C.UNAUTHORIZED,
  username: null,
  uid: null
});

function appReducer(state = authInitialState, action) {
  switch(action.type){
    case C.ATTEMPTING_LOGIN:
      return state
        .set('status', C.AWAITING_AUTH_RESPONSE)
        .set('username', 'guest')
        .set('uid', null);
    case C.LOGOUT:
      return state
        .set('status', C.UNAUTHORIZED)
        .set('username', 'guest')
        .set('uid', null)
        .set('email', null)
        .set('name', null);
    case C.LOGIN_USER:
      return state
        .set('status', C.LOGGED_IN)
        .set('email', action.payload.email)
        .set('uid', action.payload.uid)
        .set('name', action.payload.name);

    default:
      return state;
  }
}
export default appReducer;
