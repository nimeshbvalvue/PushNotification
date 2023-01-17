/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Initial from './src/navigation'

import messaging from '@react-native-firebase/messaging';
function App(): JSX.Element {

  useEffect(() => {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      alert(JSON.stringify(remoteMessage))
      console.log("remoteMessage1", JSON.stringify(remoteMessage))
    });
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      alert(JSON.stringify(remoteMessage));
      console.log("remoteMessage", JSON.stringify(remoteMessage))
    })
    return unsubscribe;
  }, []);
  return (
    <Initial />
  );
}

export default App;
