import firebase from "firebase";
import * as C from "../constants/ActionTypes";

export function loginUser() {
  return (dispatch) => {
    dispatch({type: C.ATTEMPTING_LOGIN});

    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function (result) {
      console.log(result)

      const userFirstName = result.user.displayName.split(" ")[0];
      dispatch({
        type: C.LOGIN_USER,
        payload: {
          email: result.user.email,
          uid: result.user.uid,
          name: userFirstName
        }
      });
    });
  }
};

export function logOutUser() {
  return (dispatch) => {
    firebase.auth().signOut().then(function() {
      dispatch({type: C.LOGOUT});
    }, function(error) {
      // An error happened.
    });
  };
}
