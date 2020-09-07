import React, { Component } from 'react';
import './App.css';

import ComponentTest from './components/componentTest';
import PersonCard from './components/personCard';
import ChilrenTest from './components/childrenTest';
import LightSwitch from './components/lightSwitch';

class App extends Component {    
  render() {        
      return (
        <div className="App">
          {/* <LightSwitch></LightSwitch> */}
          {/* <ChilrenTest header="Header Prop">
            <p>This is a child</p>
            <p>This is another child</p>
            <p>This is even another child</p>
          </ChilrenTest> */}
          <h1>Hello Dojo</h1>
          <ComponentTest />
          <h2>Things I need to do:</h2>
          <li>Learn React</li>
          <li>Learn React</li>
          <li>Learn React</li>
          <ComponentTest someText={"Some text passed from App Component"}/>
          <ComponentTest someText={"Some more text..."} someText1={"Some text 1"}/>
          <div>
            <h1>Prop it Up</h1>
            <PersonCard lastName="Doe" firstName="Jane" age={45} hairColor="Black"/>
            <PersonCard lastName="Smith" firstName="John" age={88} hairColor="Brown"/>
            <PersonCard lastName="Fillmore" firstName="Millard" age={3} hairColor="Grey"/>
          </div>

          {/* React Blocks Assignment */}
          
        </div>
      );    
  }
}

export default App;
