import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Setting Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight : 32,
  },
});

export default SettingScreen;
