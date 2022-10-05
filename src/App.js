import './App.css';
import { Component } from 'react';
import { List } from './List';

class App extends Component {
  render() {
    
    return <div>
    <h1 className="container">What plans do you have today?</h1>
    
    <List/>
    </div>
  }
}

export default App;
