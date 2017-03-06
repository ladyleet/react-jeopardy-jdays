import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Questions from './Questions';

const data = [{
  title: 'React Jeopardy Questions',
  questions: [
      {Q: 'What company invented React?', A: 'Facebook.'},
      {Q: 'You must use create-react-app to build React apps', A: 'False.'},
      {Q: 'React Native is the same as React', A: 'False.'},
      {Q: 'What syntax is used to write React apps?', A: 'JSX.'},
      {Q: 'What technology is used to manage state in React?', A: 'Redux and RxJS.'}
    ]
}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          {data.map(jeopardy => (<div>
              <h3>{jeopardy.title}</h3>
              {jeopardy.questions.map(jeopardy => (
                <Questions q={jeopardy.Q} a={jeopardy.A}></Questions>
              ))}
            </div>))}
        </div>
      </div>
    );
  }
}

export default App;
