import * as React from 'react';
import Svg, { Path, Ellipse, Mask } from 'react-native-svg';

const VideoHelp = ({ height = 30, width = 38 }: SvgIconProps) => (
  <Svg fill="none" height={height} width={width}>
    <Path
      fill="#fff"
      fillOpacity={0.01}
      d="M11.177.167H38V28.48H11.177V.167Z"
    />
    <Ellipse
      cx={10.059}
      cy={19.043}
      fill="#0017FF"
      fillOpacity={0.2}
      rx={10.059}
      ry={10.618}
    />
    <Mask id="a" fill="#fff">
      <Path
        fillRule="evenodd"
        d="M33.118 8h-6.941v7.438h6.94V8Zm-6.941-1a1 1 0 0 0-1 1v7.438a1 1 0 0 0 1 1h6.94a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-6.94ZM15 8h6.941v7.438H15V8Zm-1 0a1 1 0 0 1 1-1h6.941a1 1 0 0 1 1 1v7.438a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1V8Zm1 11.797h6.941v7.438h-6.94v-7.438Zm-1 0a1 1 0 0 1 1-1h6.941a1 1 0 0 1 1 1v7.438a1 1 0 0 1-1 1h-6.94a1 1 0 0 1-1-1v-7.438Zm12.177 0h6.94v7.438h-6.94v-7.438Zm-1 0a1 1 0 0 1 1-1h6.94a1 1 0 0 1 1 1v7.438a1 1 0 0 1-1 1h-6.94a1 1 0 0 1-1-1v-7.438Z"
        clipRule="evenodd"
      />
    </Mask>
    <Path
      fill="#D9D9D9"
      fillRule="evenodd"
      d="M33.118 8h-6.941v7.438h6.94V8Zm-6.941-1a1 1 0 0 0-1 1v7.438a1 1 0 0 0 1 1h6.94a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-6.94ZM15 8h6.941v7.438H15V8Zm-1 0a1 1 0 0 1 1-1h6.941a1 1 0 0 1 1 1v7.438a1 1 0 0 1-1 1H15a1 1 0 0 1-1-1V8Zm1 11.797h6.941v7.438h-6.94v-7.438Zm-1 0a1 1 0 0 1 1-1h6.941a1 1 0 0 1 1 1v7.438a1 1 0 0 1-1 1h-6.94a1 1 0 0 1-1-1v-7.438Zm12.177 0h6.94v7.438h-6.94v-7.438Zm-1 0a1 1 0 0 1 1-1h6.94a1 1 0 0 1 1 1v7.438a1 1 0 0 1-1 1h-6.94a1 1 0 0 1-1-1v-7.438Z"
      clipRule="evenodd"
    />
    <Path
      fill="#0017FF"
      d="M26.177 8V7h-1v1h1Zm6.94 0h1V7h-1v1Zm-6.94 7.438h-1v1h1v-1Zm6.94 0v1h1v-1h-1ZM21.942 8h1V7h-1v1ZM15 8V7h-1v1h1Zm6.941 7.438v1h1v-1h-1Zm-6.941 0h-1v1h1v-1Zm6.941 4.36h1v-1h-1v1Zm-6.94 0v-1h-1v1h1Zm6.94 7.437v1h1v-1h-1Zm-6.94 0h-1v1h1v-1Zm18.117-7.438h1v-1h-1v1Zm-6.941 0v-1h-1v1h1Zm6.94 7.438v1h1v-1h-1Zm-6.94 0h-1v1h1v-1Zm0-18.235h6.94V7h-6.94v2Zm1 6.438V8h-2v7.438h2Zm5.94-1h-6.94v2h6.94v-2Zm-1-6.438v7.438h2V8h-2Zm-5.94 0V6a2 2 0 0 0-2 2h2Zm0 7.438V8h-2v7.438h2Zm0 0h-2a2 2 0 0 0 2 2v-2Zm6.94 0h-6.94v2h6.94v-2Zm0 0v2a2 2 0 0 0 2-2h-2Zm0-7.438v7.438h2V8h-2Zm0 0h2a2 2 0 0 0-2-2v2Zm-6.94 0h6.94V6h-6.94v2ZM21.94 7H15v2h6.941V7Zm1 8.438V8h-2v7.438h2Zm-7.941 1h6.941v-2H15v2ZM14 8v7.438h2V8h-2Zm0 0h2-2Zm1-2a2 2 0 0 0-2 2h2V6Zm6.941 0H15v2h6.941V6Zm2 2a2 2 0 0 0-2-2v2h2Zm0 7.438V8h-2v7.438h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-6.941 0h6.941v-2H15v2Zm-2-2a2 2 0 0 0 2 2v-2h-2ZM13 8v7.438h2V8h-2Zm8.941 10.797h-6.94v2h6.94v-2Zm1 8.438v-7.438h-2v7.438h2Zm-7.94 1h6.94v-2h-6.94v2Zm-1-8.438v7.438h2v-7.438h-2Zm1-2a2 2 0 0 0-2 2h2v-2Zm6.94 0h-6.94v2h6.94v-2Zm2 2a2 2 0 0 0-2-2v2h2Zm0 7.438v-7.438h-2v7.438h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-6.94 0h6.94v-2h-6.94v2Zm-2-2a2 2 0 0 0 2 2v-2h-2Zm0-7.438v7.438h2v-7.438h-2Zm20.117-1h-6.941v2h6.94v-2Zm1 8.438v-7.438h-2v7.438h2Zm-7.941 1h6.94v-2h-6.94v2Zm-1-8.438v7.438h2v-7.438h-2Zm1-2a2 2 0 0 0-2 2h2v-2Zm6.94 0h-6.94v2h6.94v-2Zm2 2a2 2 0 0 0-2-2v2h2Zm0 7.438v-7.438h-2v7.438h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-6.94 0h6.94v-2h-6.94v2Zm-2-2a2 2 0 0 0 2 2v-2h-2Zm0-7.438v7.438h2v-7.438h-2Z"
      mask="url(#a)"
    />
  </Svg>
);
export default VideoHelp;
