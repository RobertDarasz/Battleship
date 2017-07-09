import React from 'react';
import { connect } from 'react-redux';
import * as C from '../../constants/ActionTypes';
import { createStructuredSelector } from 'reselect';
import { makeSelectAuthStatus, makeSelectFirstName } from './selectors';
import { loginUser, logOutUser } from '../../actions/auth';


class LoginContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const {status, name} = this.props;

    const isLoggedIn = status === C.LOGGED_IN;

    if(isLoggedIn) {
      return(
        <div>
          <button onClick={this.props.logOutUser}>{name}, jak chcesz to się wyloguj</button>
        </div>
      )
    }

    return(
      <div>
        <button onClick={this.props.loginUser}>Login with Facebook</button>
      </div>
    )

  };
}

const mapStateToProps = createStructuredSelector({
  status: makeSelectAuthStatus(),
  name: makeSelectFirstName()
});

const mapDispatchToProps = dispatch => ({
  loginUser: () => dispatch(loginUser()),
  logOutUser: () => dispatch(logOutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
