import * as React from 'react';
import Svg, { Path, Circle, G, Defs } from 'react-native-svg';

const VideoEmpty = ({ width = 175, height = 130 }: SvgIconProps) => (
  <Svg fill="none" width={width} height={height}>
    <Path
      fill="#A4ACFC"
      d="m15.55 118.851-15-90c-1.6-5.2.667-8.833 2-10 62-22 140.5-17.833 172-13-.833 28.834-2.4 88.1-2 94.5.4 6.4-5.5 7.667-8.5 7.5-55.5-4.5-129 14.5-136.5 17-6 2-10.5-3.166-12-6Z"
    />
    <Path
      fill="#0017FF"
      d="M0 23.996.978 32C72.15 6.387 146.648 10.656 175 15.992l-1.955-11.506C115.559-7.92 35.685 8.322 2.933 17.993.587 19.193 0 22.495 0 23.996Z"
    />
    <Circle cx={8.5} cy={23.5} r={2.5} fill="#FF007A" />
    <Circle cx={16.5} cy={20.5} r={2.5} fill="#FF007A" />
    <Circle cx={25.5} cy={18.5} r={2.5} fill="#FF007A" />
    <Path
      stroke="#FF007A"
      strokeWidth={2}
      d="M25 113.332c19.167-8.167 73.7-23.8 138.5-21"
    />
    <Circle cx={64.5} cy={100.5} r={4.5} fill="#FCC836" />
    <G filter="url(#a)">
      <Circle cx={91} cy={56} r={16} fill="#fff" fillOpacity={0.32} />
    </G>
    <Path
      fill="#0017FF"
      d="M87 50.223v12.554c0 .675.6 1.223 1.34 1.223.263 0 .52-.07.74-.203l10.319-6.222c.617-.373.787-1.132.379-1.695a1.286 1.286 0 0 0-.37-.341l-10.32-6.33c-.614-.378-1.447-.229-1.86.332a1.15 1.15 0 0 0-.228.682Z"
    />
    <Defs />
  </Svg>
);
export default VideoEmpty;
