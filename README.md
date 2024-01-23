# react-native-veel-icons

icons made for the veel react native app

## Installation

1. Add [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer) as dependency

2. Run command

```sh
yarn add react-native-veel-icons
```

## Usage

```js
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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
