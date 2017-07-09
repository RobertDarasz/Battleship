import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import ChatComponent from '../../components/Chat'


class MatchPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    // socket.emit('room', {
    //   roomId: this.props.routeParams.id
    // });
    // socket.on('player joined', function (id) {
    //   console.log('a user joined ' + id);
    // });
  }

  render() {

    return (
      <h1>
        To jest pokój gry nr {this.props.routeParams.id}.
        <Link to="/">Wyjdz</Link>
        <ChatComponent/>
      </h1>
    );
  }
}


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MatchPage)
