import React from "react";
import LoginContainer from "../../containers/Login";

export default class LayoutComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <LoginContainer/>
        {this.props.children}
      </div>
    );
  }
}
