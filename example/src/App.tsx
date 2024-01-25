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
          {/* default */}
          <Vicon name="tag" />

          {/* with speicific size and color values */}
          <Vicon name="video" size={40} color={['red']} />

          {/* gradient */}
          <Vicon name="setting" size={50} color={['red', 'blue']} />
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
