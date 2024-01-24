# react-native-veel-icons

expo icons made for the veel react native app

## Installation

1. Run command

```sh
yarn add react-native-veel-icons
```

## Usage

```js
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
          <Vicon name="Vicons-tag" />

          {/* with speicific size and color values */}
          <Vicon name="Vicons-video" size={40} color={['red']} />

          {/* gradient */}
          <Vicon name="Vicons-setting" size={50} color={['red', 'blue']} />
        </>
      ) : (
        <Text>Error while loading font</Text>
      )}
    </View>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
