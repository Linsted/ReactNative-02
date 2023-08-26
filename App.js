import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hello world</Text>
      <Text style={styles.text}>hello world  #2255</Text>
      <Button style={{ backgroundColor: '#cccfff' }} title='Tap me' />
      <Button style={{ color: "red" }} title='Don`t tap me' />
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
  text: {
    marginBottom: 15,
    color: 'red',
    padding: 5,
    borderColor: 'blue',
    borderWidth: 1,

  }
});
