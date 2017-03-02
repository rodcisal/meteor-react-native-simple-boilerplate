import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {Scene, Router} from 'react-native-router-flux'

import connect from './connect'

import RouteList from './routes/routeList'
import AccountsContainer from './containers/accounts'

export default class RNApp extends Component {

  componentWillMount () {
    connect()
  }

  render () {
    return (
      <Router getSceneStyle={() => styles.sceneStyle}>
        <Scene key="root">
          <Scene key="routelist" component={RouteList} title="Home"/>
          <Scene key="getAccounts" component={AccountsContainer} title="Accounts"/>
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sceneStyle: {
    paddingTop: 64
  }
})
