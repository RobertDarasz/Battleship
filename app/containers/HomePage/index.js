import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { makeSelectAuthStatus } from '../Login/selectors';
import * as C from '../../constants/ActionTypes';


class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props)

  }

  static propTypes = {
    status: PropTypes.string.isRequired,
  };

  render() {

    const roomId = Math.ceil(Math.random() * 100);
    const currentAuthStatus = this.props.status;
    const isLoggedIn = currentAuthStatus === C.LOGGED_IN;

    if(isLoggedIn) {
      return (
        <div>
          <Link to={`/match/${roomId}`}>Stwórz grę</Link>
        </div>
      );
    }

    return (
      <div>Zaloguj się aby móc utworzyć grę.</div>
    )

  }
}


const mapStateToProps = createStructuredSelector({
  status: makeSelectAuthStatus(),
});

export default connect(mapStateToProps)(HomePage)
