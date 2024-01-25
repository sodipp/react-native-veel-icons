# react-native-veel-icons

expo icons made for the veel react native app

## Installation
1. Install peer dependencies
    ```sh
    npx expo install @react-native-masked-view/masked-view expo-linear-gradient
    ```
2. Install `react-native-veel-icons`
    ```sh
    yarn add react-native-veel-icons
    ```
3. Configure [`expo-fonts`](https://docs.expo.dev/versions/latest/sdk/font/) to load the `Vicons.ttf` font file located at `project_root/node_modules/react-native-veel-icons/src/font/Vicons.ttf`

## Usage
```js
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { Vicon } from 'react-native-veel-icons';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Vicons: require('project_root/node_modules/react-native-veel-icons/src/font/Vicons.ttf'),
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
```

## Name of all the icons
|                         |                         |                         |
|-------------------------|-------------------------|-------------------------|
| add                     | arrowhead-down          | authenticity           |
| bell                    | bookmark                | bug                     |
| call                    | campaign                | cancel-circle           |
| cancel-circle-filled    | capture                 | chat                    |
| check                   | check-cirlce            | clock                   |
| collaboration           | content-creator         | content-verified        |
| diamond                 | diamond-alter-filled    | diamond-bold            |
| diamond-filled          | disabled-filled         | document                |
| document-alter          | double-check            | explore                 |
| eye-close               | eye-open                | home                    |
| information-circle      | left-arrow              | like                    |
| link                    | location                | logout                  |
| mail-open               | map                     | monetization            |
| next-mods               | notification            | pause-circle-filled     |
| payment                 | play-circle             | plus                    |
| plus-cirlce             | radio                   | radio-filled            |
| retake                  | right-arrow             | rocket                  |
| search                  | send-campaign           | send-cancel             |
| setting                 | star-full-filled        | star-half-filled        |
| star-unfilled           | tag                     | talent                  |
| tax                     | up-arrow-circle         | user                    |
| user-video              | users                   | users-plus              |
| video                   | video-pause             | videos                  |
| visibility              | window                  |                         |


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
