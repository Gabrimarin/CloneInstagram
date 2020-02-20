import React from 'react'
import { Provider } from 'react-redux'
import 'expo/build/Expo.fx';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { activateKeepAwake } from 'expo-keep-awake';

import Navigator from './src/Navigator'

import storeConfig from './src/store/storeConfig'

import axios from 'axios'
axios.defaults.baseURL = 'https://instragam-e2bc6.firebaseio.com/'

const store = storeConfig()
const Redux = () => (
  <Provider store={store}>
    <Navigator/>
  </Provider>
)

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(Redux);
