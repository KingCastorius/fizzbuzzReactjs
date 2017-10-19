import React from 'react';
import ReactDOM from 'react-dom';

class FizzBuzz extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      fizzBuzz: ''
    }
  }
  
  render() { 
    return (
      <div>
        <h2>
          {this.state.fizzBuzz || this.state.count}
        </h2>
        <div>
          <button onClick={this.decrement.bind(this)}>-</button>
          <button onClick={this.increment.bind(this)}>+</button>
        </div>
      </div>
    );
  }
  
  fBuzz(num) {
    if (num % 15 === 0) {
      this.setState({fizzBuzz: 'FizzBuzz'});
    } else if (num % 5 === 0) {
      this.setState({fizzBuzz: 'Buzz'});
    } else if (num % 3 === 0) {
      this.setState({fizzBuzz: 'Fizz'});
    } else {
      this.setState({fizzBuzz: ''});
    }
  }
  
  decrement() {
    if (this.state.count > 1) {
      this.setState({count: --this.state.count});
      this.fBuzz(this.state.count);
    }
  }
  
  increment() {
    if (this.state.count < 100) {
      this.setState({count: ++this.state.count});
      this.fBuzz(this.state.count);
    }
  }
}

ReactDOM.render(
	<FizzBuzz />, 
	document.getElementById('root'));
