import * as React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Google = ({ width = 25, height = 25, color }: SvgIconProps) => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        borderWidth: 1,
        borderColor: color !== undefined ? color[0] : undefined,
        width: width * 2,
        height: height * 2,
        borderRadius: width,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 18,
      }}
    >
      <Svg width={width} height={height} fill="none">
        <Path d="M0 0h24v24H0V0z" fill="#fff" fillOpacity={0.01} />
        <Path
          d="M17.25 3.5l-2.5 3.75c-.5-.266-1.5-.75-2.75-.75-3 0-5.5 2.5-5.5 5.25s2 5.75 5.5 5.75c2.8 0 4.75-2 4.75-3.5H12v-3.5h10c.25 3.75-.855 5.95-2.25 7.75C17.662 20.944 14.586 22 12 22 7 22 2 18 2 11.75 2 5.75 7.362 2 11.5 2s5.75 1.5 5.75 1.5z"
          fill={color !== undefined ? color[0] : undefined}
        />
      </Svg>
    </View>
  );
};

export default Google;
