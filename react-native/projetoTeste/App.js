/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
    <StatusBar barStyle="dark-content" />

      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.sectionContainer}>
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem ipsum dolor sit amet </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem ipsum dolor sit amet </Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem ipsum dolor sit amet</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem ipsum dolor sit amet</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem ipsum dolor sit amet</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem ipsum dolor sit amet</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem ipsum dolor sit amet</Text>
        </View>
        
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>Estudando React Native</Text>
          <Text style={styles.postDescription}>Lorem ipsum dolor sit amet</Text>
        </View>
      </ScrollView>
    </>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flexGrow: 1,
    backgroundColor: "#333",
  },
  postContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 3,
    flex: 1,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postDescription: {
    color: "#666"
  },
});

export default App;
