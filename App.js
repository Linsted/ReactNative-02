import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goalsList, setGoalsList] = useState([]);


  const addButtonHandler = (enteredText) => {
    setGoalsList(state => [...state, { text: enteredText, id: Math.random().toString() }])
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput addButtonHandler={addButtonHandler} />
      <View style={styles.listContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
          keyExtractor={(item) => item.id}
        >
        </FlatList>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  listContainer: {
    flex: 4,
  },
});