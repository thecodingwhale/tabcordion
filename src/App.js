import React, { Component } from 'react';
import Tabs from './Tabs';
import Accordion from './Accordion';
import './App.css';

class App extends Component {
  render() {
    const items = [
      {
        title: 'first title',
        content: 'your first content',
      },
      {
        title: 'second title',
        content: 'your second content',
      },
      {
        title: 'third title',
        content: 'your third content',
      },
      {
        title: 'fourth title',
        content: 'your fourth content',
      },
    ];
    return (
      <div className="App">
        <div className="Wrapper">
          <h2>Tabs</h2>
          <Tabs items={items} />
        </div>
        <div className="Wrapper">
          <h2>Accordion</h2>
          <Accordion items={items} />
        </div>
      </div>
    );
  }
}

export default App;