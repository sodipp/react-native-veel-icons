declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
interface SvgIconProps {
  width?: number;
  height?: number;
  color?: string[];
  active?: boolean;
  pathname?: string;
}
