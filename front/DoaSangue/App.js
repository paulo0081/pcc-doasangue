import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import CustomTextInput from './components/CustomTextInput.js';


function App() {
  return (
    <View style={styles.container}>
      <Text>Mousse UwU</Text>
      <CustomTextInput />
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;