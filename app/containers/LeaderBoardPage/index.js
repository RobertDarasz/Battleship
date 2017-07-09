import React from 'react';
import { connect } from 'react-redux'

class LeaderboardPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <h1>
        //TODO LEADERBOARD.
      </h1>
    );
  }
}

const mapStateToProps = state => ({


});

const mapDispatchToProps = dispatch => ({


});

export default connect(mapStateToProps, mapDispatchToProps)(LeaderboardPage)
