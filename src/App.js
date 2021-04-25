import React, { Component } from 'react'
import Home from './Component/Home/Home'
import { Segment } from 'semantic-ui-react'
import {BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import MenuExampleVerticalPointing from './Component/Sidemenu/Sidemenu';
 

class App extends Component {
  render () {
    return (
      <div>
        <Home/>
      </div>
    )
  }
}

export default App