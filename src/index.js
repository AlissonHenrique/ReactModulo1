import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Button from './Button';

class App extends Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState({ counter: +1 });
  };

  render() {
    return (
      <Fragment>
        <h1>Titulo</h1>
        <Button
          onClick={() => {
            alert('teste');
          }}
        />
        <Button onClick={this.handleClick}> Botao</Button>

        {this.state.counter}
      </Fragment>
    );
  }
}
render(<App />, document.getElementById('app'));
