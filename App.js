import React from 'react';
import {View, Text, Button} from 'react-native';

function App() {
  return (
    <View>
      <Text>Test</Text>
      <Button title="Press me" onPress={() => alert('Button pressed!')} />
    </View>
  );
}

export default App;
