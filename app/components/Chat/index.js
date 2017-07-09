import React from 'react';
import ChatMessages from '../ChatMessages';
import ChatInput from '../ChatInput';

export default class ChatComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <ChatMessages></ChatMessages>
        <ChatInput></ChatInput>
      </div>
    );
  }
}
