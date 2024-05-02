import React from 'react';
import { StyleSheet, View } from 'react-native';
import TodoListScreen from './component/TodoSceen';



export default function App() {
  return (
    <View style={styles.container}>
    <TodoListScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
