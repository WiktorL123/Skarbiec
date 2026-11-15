import { BlurView } from 'expo-blur';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';

import { tokens } from './tokens';
import { useReducedTransparency } from './useReducedTransparency';

export function HelloGlassCard() {
  const reducedTransparency = useReducedTransparency();

  return (
    <View style={styles.shadow}>
      <View style={[styles.card, reducedTransparency && styles.opaque]}>
        {!reducedTransparency && (
          <BlurView
            intensity={tokens.glass.intensity}
            tint="dark"
            pointerEvents="none"
            accessible={false}
            style={StyleSheet.absoluteFill}
          />
        )}
        {!reducedTransparency && (
          <LinearGradient
            colors={tokens.colors.reflection}
            pointerEvents="none"
            accessible={false}
            style={StyleSheet.absoluteFill}
          />
        )}
        <Text
          accessibilityRole="header"
          accessibilityLanguage="en-US"
          className="text-center text-greeting font-semibold text-primary"
        >
          Hello World
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    width: '100%',
    maxWidth: tokens.glass.maxWidth,
    borderRadius: tokens.radius.card,
    shadowColor: tokens.colors.shadow,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.3,
    shadowRadius: 24,
  },
  card: {
    minHeight: tokens.glass.minHeight,
    justifyContent: 'center',
    padding: tokens.spacing.card,
    borderRadius: tokens.radius.card,
    overflow: 'hidden',
    backgroundColor: tokens.colors.background.container,
    borderWidth: 1,
    borderColor: tokens.colors.border.crisp,
    borderTopColor: tokens.colors.border.top,
  },
  opaque: { backgroundColor: tokens.colors.background.surface },
});
