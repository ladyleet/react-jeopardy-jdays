import React, { Component } from 'react';

export default class Questions extends Component {
  render() {
    return (
    <div>
      <div>  
        Question: {this.props.q}
      </div>
      <div>
        Answer: {this.props.a}
      </div>
    </div>
    );
  }
}
