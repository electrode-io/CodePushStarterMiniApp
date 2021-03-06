import React, { Component } from 'react';
import codePush from "react-native-code-push";

export default class App extends Component<Props> {
  render() {
    return null
  }
}

App = codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
  minimumBackgroundDuration: 60 * 2
})(App);
codePush.sync()