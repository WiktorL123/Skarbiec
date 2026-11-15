import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HelloGlassCard } from '../ui/HelloGlassCard';
import { tokens } from '../ui/tokens';

export default function HelloScreen() {
  return (
    <View className="flex-1 bg-void">
      <View
        pointerEvents="none"
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
        style={StyleSheet.absoluteFill}
      >
        <LinearGradient
          colors={[
            tokens.colors.ambient.emerald,
            tokens.colors.ambient.transparent,
            tokens.colors.ambient.violet,
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={StyleSheet.absoluteFill}
        />
        <LinearGradient
          colors={[tokens.colors.ambient.transparent, tokens.colors.ambient.cobalt]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={StyleSheet.absoluteFill}
        />
      </View>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content}>
          <HelloGlassCard />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: tokens.spacing.screen,
  },
});
