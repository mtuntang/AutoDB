import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Customers from './components/customer'
import Companies from './components/company'
import Box from '@material-ui/core/Box';
import DB from './container/dbGrid'

class App extends Component {
    render (){
      return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> AUTO DB</h1>
            <DB/>
        </header>
      </div>
      )
  }
}

export default App;
