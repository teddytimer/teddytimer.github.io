// Logotipo de la app: escudo con "72h" (72 horas de autonomía recomendadas en una emergencia).
import React from 'react';
import { View } from 'react-native';
import { FONT } from '../figures/kit';
import Svg, { Defs, LinearGradient, Path, Stop, Text as SvgText } from 'react-native-svg';

export function Logo({ size = 96 }: { size?: number }) {
  return (
    <View accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <Defs>
        <LinearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#F0443E" />
          <Stop offset="1" stopColor="#FF8A3D" />
        </LinearGradient>
      </Defs>
      <Path d="M50 6 L86 18 L86 48 C86 72 70 87 50 95 C30 87 14 72 14 48 L14 18 Z" fill="url(#lg)" />
      <Path d="M50 14 L79 24 L79 48 C79 67 66 80 50 87 C34 80 21 67 21 48 L21 24 Z" fill="#0F1217" />
      <SvgText x="50" y="60" fontFamily={FONT} fontSize="30" fontWeight="900" fill="#F2F4F7" textAnchor="middle">
        72h
      </SvgText>
    </Svg>
    </View>
  );
}
