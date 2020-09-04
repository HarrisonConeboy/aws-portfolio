import React from 'react';
import './styling/App.css';
import MyNavBar from './components/NavBar';
import Intro from './components/Intro';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

const App = () => {
  return (
    <div className="App">
      <MyNavBar/>
      <Intro />
    </div>
  );
}

export default App;
