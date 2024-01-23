import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';

import { Vicon } from 'react-native-veel-icons';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Vicons: require('../assets/Vicons.ttf'),
  });

  return (
    <View style={styles.container}>
      {fontsLoaded && !fontError ? (
        <>
          <Vicon name="Vicons-tag" size={32} />

          <Vicon name="Vicons-setting" size={32} />
        </>
      ) : (
        <Text>Error while loading font</Text>
      )}
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
