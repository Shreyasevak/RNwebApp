
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Demo from './src/screen/Demo';

// const { height } = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.center}>
      <Demo />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
});

export default App;