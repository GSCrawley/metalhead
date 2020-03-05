import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Band from './Band';
import Like from './Like';
import './App.css'
const data = require('./metal.json')

class App extends Component {
  
  render() {

    console.log("DATA: " + data)

    return (
      <div>
          <Heading />
          {
          data.map((bandObject) => {
            return <Band band_name={bandObject.band_name} formed={bandObject.formed} origin={bandObject.origin} fans={bandObject.fans}/>
          })
          }
          
      </div>
    )
  }
}

export default App;
