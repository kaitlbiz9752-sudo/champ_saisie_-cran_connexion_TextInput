import * as React from 'react';
import { View, StyleSheet } from 'react-native';


import WelcomeScreen from '../../components/WelcomeScreen';
import LoginScreen from '../../components/LoginScreen';

export default function HomeScreen() {
   return (
    <>
      <View style={styles.container}>
        
        <LoginScreen/>
      </View>
      <View style={styles.footerContainer}>
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#333333',
  },
});

