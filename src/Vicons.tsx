import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

import glyphMap from '../src/font/unicodesMap.json';

interface IconGlyphMap {
  [key: string]: number;
}

const iconGlyphMap: IconGlyphMap = glyphMap;

export default function Vicon({
  name,
  size = 24,
  color,
}: {
  name: string;
  size?: number;
  color?: string[];
}) {
  const isGradientIcon = Array.isArray(color) && color.length > 1;

  let glyph = name ? iconGlyphMap[name] || '??' : '';
  if (typeof glyph === 'number') {
    glyph = String.fromCodePoint(glyph);
  }

  const renderText = () => (
    <Text
      style={StyleSheet.flatten({
        fontFamily: 'Vicons',
        fontSize: size,
        color:
          Array.isArray(color) && color.length === 1 ? color[0] : undefined,
      })}
    >
      {glyph}
    </Text>
  );

  const renderGradientIcon = () => (
    <MaskedView
      maskElement={
        <View style={{ height: size, width: size }}>{renderText()}</View>
      }
    >
      <LinearGradient
        style={StyleSheet.flatten({
          height: size,
          width: size,
          backgroundColor: 'transparent',
        })}
        colors={Array.isArray(color) ? color : []}
      />
    </MaskedView>
  );

  return isGradientIcon ? renderGradientIcon() : renderText();
}
