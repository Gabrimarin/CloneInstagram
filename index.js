import 'expo/build/Expo.fx';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { activateKeepAwake } from 'expo-keep-awake';

import App from './src/App';
import Navigator from './src/Navigator'
import Feed from './src/screens/Feed'

import {name as appName} from './app.json'
import { AppRegistry } from 'react-native';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(Navigator);
