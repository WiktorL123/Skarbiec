import { useEffect, useState } from 'react';
import { AccessibilityInfo, Platform } from 'react-native';

export function useReducedTransparency() {
  // Bezpieczny fallback do czasu odczytania preferencji urządzenia.
  const [reduced, setReduced] = useState(true);

  useEffect(() => {
    if (Platform.OS !== 'ios') return;
    let active = true;
    let changed = false;
    const subscription = AccessibilityInfo.addEventListener(
      'reduceTransparencyChanged',
      (enabled) => {
        changed = true;
        setReduced(enabled);
      },
    );
    AccessibilityInfo.isReduceTransparencyEnabled()
      .then((enabled) => {
        if (active && !changed) setReduced(enabled);
      })
      .catch(() => {
        // Błąd odczytu pozostawia nieprzezroczyste, czytelne tło.
      });
    return () => {
      active = false;
      subscription.remove();
    };
  }, []);

  return reduced;
}
