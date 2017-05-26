import React, { Component } from 'react';
import Button from './button';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: '',
            value: '',
        };
    }
    
    textEntered = (event) => {
        this.setState({ value: event.target.value.toUpperCase() });
    }
    
    changeText  = () => {
        this.setState({ textValue: this.state.value });
    }
    
  render() {
    return (
      <div>
        <Button name={'Click Me'} clicked={this.changeText} />
      </div>
      );
  }
}
