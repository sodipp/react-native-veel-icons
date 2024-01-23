import React from 'react';
import { StyleSheet, Text } from 'react-native';

import glyphMap from '../src/font/unicodesMap.json';

interface IconGlyphMap {
  [key: string]: number;
}

export default function Vicon({
  name,
  size = 24,
  color,
}: {
  name: string;
  size?: number;
  color?: string;
}) {
  const iconGlyphMap: IconGlyphMap = glyphMap;
  let glyph = name ? iconGlyphMap[name] || '??' : '';

  if (typeof glyph === 'number') {
    glyph = String.fromCodePoint(glyph);
  }

  return (
    <Text
      style={StyleSheet.flatten({
        fontFamily: 'Vicons',
        fontSize: size,
        color: color,
      })}
    >
      {glyph}
    </Text>
  );
}
