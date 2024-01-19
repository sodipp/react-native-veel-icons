import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const Wallet = ({ width = 17, height = 17 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      fill="url(#a)"
      d="M2.858 0h12.738v5.691H2.836a2.861 2.861 0 0 1-1.98-.974l-.004-.004A2.802 2.802 0 0 1 .15 2.68v.008A2.824 2.824 0 0 1 2.825.003h.007L2.858 0Zm11.26 1.478H2.908c-.704.031-1.265.6-1.284 1.304v.002l-.002.065c0 .342.129.654.34.89v-.002c.233.269.566.446.94.476H14.118V1.479ZM13.451 8.5H17v4.287h-3.548a2.144 2.144 0 0 1-1.538-3.636c.386-.402.928-.651 1.528-.651h.01Zm2.07 1.478H13.442a.642.642 0 0 0-.465.199.665.665 0 0 0 .475 1.132h2.07v-1.33ZM0 2.883h1.478V2.9c0 .746.59 1.355 1.328 1.386H16.26v.665H17V17H2.143A2.144 2.144 0 0 1 0 14.857V2.883Zm15.522 2.882H2.809a2.723 2.723 0 0 1-1.344-.36l.013.007v9.445c0 .367.298.665.665.665h13.379V5.765Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={8.5}
        x2={8.5}
        y1={0}
        y2={17}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" />
        <Stop offset={1} stopColor="white" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default Wallet;
