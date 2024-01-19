import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const TallyBox = ({ width = 109, height = 109 }: SvgIconProps) => (
  <Svg width={width} height={height} fill="none">
    <Path
      fill="#0017FF"
      fillOpacity={0.1}
      fillRule="evenodd"
      d="M29.845 6.732C44.626-2.868 61.01.942 76.06 3.143c11.717 1.715 22.483 5.629 28.577 14.534 5.673 8.29 4.746 19.663 2.526 30.917-2.271 11.508-5.014 24.075-15.044 32.54-10.062 8.491-22.848 8.476-34.772 9.5-12.975 1.115-26.358 2.928-35.767-3.44C9.738 79.179-1.07 67.856.54 52.187 2.259 35.45 13.766 17.174 29.845 6.732Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default TallyBox;
