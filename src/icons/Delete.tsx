import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Delete = ({ width = 24, height = 24, color = ['red'] }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      fill="transparent"
      d="M17.253 5.667H6.718v12.55c0 1.353 1.096 1.873 2.45 1.873h5.635c1.354 0 2.45-.52 2.45-1.873V5.667Zm-6.92-.334V4h3.334v1.333"
    />
    <Path fill="transparent" d="M5.667 5.333h12.666v1.334H5.667V5.334Z" />
    <Path
      stroke={color[0]}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M10.333 5.333V4h3.334v1.333m3.333 3v10.334A1.334 1.334 0 0 1 15.667 20H8.333A1.333 1.333 0 0 1 7 18.667V8.333m6.667 1.084v8.916m-3.334-8.916v8.916m-4.666-13h12.666v1.334H5.667V5.333Z"
    />
  </Svg>
);
export default Delete;
