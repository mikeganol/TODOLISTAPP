import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const TodoListScreen = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  useEffect(() => {
    // Fetch todos from storage or API on component mount
    // For simplicity, let's use local state for now
  }, []);

  const handleAddTodo = () => {
    if (newTodoTitle.trim() !== '') {
      setTodos([...todos, { id: Date.now(), title: newTodoTitle }]);
      setNewTodoTitle('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <View style={styles.container}>
     <text>TODOLIT APP</text>
     
      <TextInput
        style={styles.input}
        placeholder="Enter todo title"
        value={newTodoTitle}
        onChangeText={text => setNewTodoTitle(text)}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text>{item.title}</Text>
            <Button title="Delete" onPress={() => handleDeleteTodo(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'violet',
    paddingVertical: 10,
  },
});

export default TodoListScreen;
