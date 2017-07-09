import React from 'react';
import { Button } from 'react-bootstrap';

export default class ChatMessages extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <input type="text" />
        <Button>Dodaj wiadomość</Button>
      </div>
    );
  }
}
