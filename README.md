# react-native-veel-icons

expo icons made for the veel react native app

## Installation
1. Run command
    ```sh
    yarn add react-native-veel-icons
    ```
    This will automatically install the following necessary dependencies:

    - `@react-native-masked-view/masked-view`
    - `expo-linear-gradient`

    Ensure that you have the correct versions of these dependencies by checking your `package.json` with file to avoid issues.

2. Configure [`expo-fonts`](https://docs.expo.dev/versions/latest/sdk/font/) to load the `Vicons` font family file placed in `node_modules/react-native-veel-icons/src/font/Vicons.ttf`. You can either load it directly from there or copy it and manage it with your other assets.


## Usage

```js
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { Vicon } from 'react-native-veel-icons';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Vicons: require('.node_modules/react-native-veel-icons/Vicons.ttf'),
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
