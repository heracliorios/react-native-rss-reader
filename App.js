import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView
} from 'react-native';
import Router from './components/router';
import Footer from './components/footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  footer: {
    padding: 8,
    height: 50,
    backgroundColor: 'skyblue',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Router />
        <View style={styles.footer}>
          <Footer />
        </View>
      </SafeAreaView>
    );
  }
};
