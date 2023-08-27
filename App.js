import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your goal' />
        <Button title='Add Goal' />
      </View>
      <View style={styles.listContainer}>
        <Text>List of goals</Text>
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
    paddingBottom: 24,
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
    flex: 3,
  }
});