import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);

  const addButtonHandler = (enteredText) => {
    setGoalsList((state) => [
      ...state,
      { text: enteredText, id: Math.random().toString() },
    ]);
  };
  const deleteGoalHandler = (id) => {
    console.log("delete");
    setGoalsList((state) => state.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput addButtonHandler={addButtonHandler} />
      <View style={styles.listContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => (
            <GoalItem
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
              text={itemData.item.text}
            />
          )}
          keyExtractor={(item) => item.id}
        ></FlatList>
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
  listContainer: {
    flex: 4,
  },
});
