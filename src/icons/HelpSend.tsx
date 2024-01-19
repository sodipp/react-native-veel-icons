import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';

const HelpSend = ({ height = 35, width = 38 }: SvgIconProps) => (
  <Svg fill="none" width={width} height={height}>
    <Path fill="#fff" fillOpacity={0.01} d="M38 0H4.441v35.094h33.56V0Z" />
    <Path
      stroke="#0017FF"
      strokeLinejoin="round"
      d="m34.505 3.656-8.462 25.281c-.292.873-1.508.921-1.868.074l-4.282-10.075-9.768-4.54c-.808-.375-.758-1.54.078-1.845l24.302-8.895Z"
    />
    <Path
      stroke="#0017FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M34.505 3.656 20 19"
    />
    <Ellipse
      cx={10.364}
      cy={17.849}
      fill="#0017FF"
      fillOpacity={0.2}
      rx={10.364}
      ry={10.94}
    />
  </Svg>
);
export default HelpSend;
