import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

const VerifiedBadge = ({ width = 30, height = 30 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill="#0017FF"
        stroke="#fff"
        strokeWidth={0.5}
        d="M4.911 2.25a.75.75 0 0 1 .624-.333h8.93a.75.75 0 0 1 .624.333l2.622 3.934a.75.75 0 0 1-.048.896l-7.087 8.505a.75.75 0 0 1-1.152 0L2.337 7.08a.75.75 0 0 1-.048-.896L4.91 2.25Z"
      />
      <G clipPath="url(#b)">
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M5.453 4.193a1.063 1.063 0 0 1 1.48.26l3.983 5.694a1.063 1.063 0 0 1-1.74 1.221L5.192 5.674a1.065 1.065 0 0 1 .261-1.481Z"
          clipRule="evenodd"
        />
        <G filter="url(#c)" opacity={0.46}>
          <Path
            fill="#000"
            fillRule="evenodd"
            d="m9.005 10.269 1.495-2.06a.355.355 0 1 1 .573.417l-1.494 2.06a.354.354 0 1 1-.574-.417Z"
            clipRule="evenodd"
          />
        </G>
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M13.546 5.815a1.065 1.065 0 0 1 .262 1.483l-2.847 4.07a1.062 1.062 0 0 1-1.917-.425 1.064 1.064 0 0 1 .176-.796l2.847-4.07a1.063 1.063 0 0 1 1.48-.262Z"
          clipRule="evenodd"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
      <ClipPath id="b">
        <Path fill="#fff" d="M-1 0h20v20H-1z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default VerifiedBadge;
