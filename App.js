import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import HomePage from './src/app/pages/home/HomePage'
// import AppNavigation from "./src/app/main/AppNavigation";
// import {AppHeader} from './src/app/common/controls/header'

import HomeView from './src/app/main/home/HomeView'

export default function App() {
  return (
    // <View style={{flex: 1,flexDirection:'column'}}>
    //   <AppHeader style={{flex:1}} />
    //   <AppNavigation style={{flex:9}}/>
    // </View>
          <HomeView/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
