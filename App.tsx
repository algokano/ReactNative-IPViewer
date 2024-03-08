import React, {Component} from 'react';
import AppNavigator from './src/navigators/AppNavigator';
import {AppDataProvider} from './src/providers/AppDataProvider';

class App extends Component {
  render() {
    return (
      <AppDataProvider>
        <AppNavigator />
      </AppDataProvider>
    );
  }
}

export default App;
