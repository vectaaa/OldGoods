import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,View, Image,TouchableWithoutFeedback,TouchableNativeFeedback, SafeAreaView, Button, Dimensions} from 'react-native';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {

  return (
    <LoginScreen/>
  );
}