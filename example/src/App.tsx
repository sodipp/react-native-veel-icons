import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Vicon } from 'react-native-veel-icons';

export default function App() {
  return (
    <View style={styles.container}>
      {/* default */}
      <Vicon name="tag" />

      {/* with speicific size and color values */}
      <Vicon name="video" size={40} color={['red']} />

      {/* gradient */}
      <Vicon name="setting" size={50} color={['red', 'blue']} />
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
