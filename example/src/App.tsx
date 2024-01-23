import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Vicon } from 'react-native-veel-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Vicon name="setting" height={50} width={50} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
