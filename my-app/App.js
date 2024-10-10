import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Homerogod</Text>
      <Image 
        source={{ uri: 'Homerogod.gif' }} 
        style={styles.image} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 15,
  },
});

export default App;

