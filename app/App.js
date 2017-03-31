/**
 * AppDine app
 * Copyright © 2017 by Alphonsus C. Coyote
 * @flow
 */

import React, { Component } from 'react';
import {Actions, Scene, Router} from 'react-native-router-flux';

import Home from './screens/HomeScreen';
import ChefList from './screens/ChefOnDemendList'
import ChefOnDemend from './screens/ChefOnDemend'

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="home" component={Home} title="Home"/>
    <Scene key = "cheflist" component = {ChefList} title="Chef OnDemend List"/>
    <Scene key = "chefondemend" component = {ChefOnDemend} title="Chef OnDemend"/>
  </Scene>
);

class App extends React.Component {
  render() {
    return <Router scenes={scenes}/>
  }
}

export default App