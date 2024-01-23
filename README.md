# react-native-veel-icons

expo icons made for the veel react native app

## Installation

1. Configure [expo-font](https://docs.expo.dev/versions/latest/sdk/font/)

2. Run command

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
    Vicons: require('project_root/node_modules/react-native-veel-icons/assets/Vicons.ttf'),
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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
