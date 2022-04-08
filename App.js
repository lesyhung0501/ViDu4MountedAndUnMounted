import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native';
import Content from './Content';

export default function App() {
  let [mouted, setMounted] = useState(false);

  function handleClick() {
    setMounted(!mouted);
  }

  return (
    <View style={styles.container}>
      <Button
        title="Toggle"
        onPress={handleClick}
      ></Button>
      {mouted && <Content/>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
