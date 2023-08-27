import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [enteredText, setEnteredText] = useState('');
  const [goalsList, setGoalsList] = useState([]);

  const inputHandler = (text) => {
    setEnteredText(text);
  };
  const addButtonHandler = () => {
    setGoalsList(state => [...state, enteredText])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={inputHandler}
          style={styles.textInput}
          placeholder='Your goal'
        />
        <Button
          title='Add Goal'
          onPress={addButtonHandler}
        />
      </View>
      <View style={styles.listContainer}>
        {goalsList.map((goal, ind) =>
          <View style={styles.item} key={ind}>
            <Text style={styles.itemText}>{goal}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    paddingLeft: 10,
  },
  listContainer: {
    flex: 4,
  },
  item: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  itemText: {
    color: 'white',
  },
});