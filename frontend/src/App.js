import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import BottomBar from './BottomBar'

import Balance from './Balance'
import Nearby from './Nearby'
import Challenges from './Challenges'
import Profile from './Profile'
import { Z_FIXED } from 'zlib';

class App extends Component {
  render() {
    const styles = {
      outerContainer: {
        backgroundColor: '#eeeeee',
        height: 'calc(100vh - 56px)',
        width: '100vw',
        maxWidth: '500px',
        margin: '0 auto',
        position: 'fixed',
        top: '0',
        left: '0'
      }
    }
    return (
      <div style={{width: '100vw'}}>
        <div style={styles.outerContainer}>
          <Router>
            <Route exact path='/' component={Profile}></Route>
            <Route path='/balance' component={Balance}></Route>
            <Route path='/nearby' component={Nearby}></Route>
            <Route path='/challenges' component={Challenges}></Route>
            <Route path='/profile' component={Profile}></Route>
            <BottomBar />
          </Router>
        </div></div>

    );
  }
}

export default App;
