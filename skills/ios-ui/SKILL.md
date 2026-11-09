---
name: skarbiec-ios-ui
description: Implement and review Polish React Native Expo interfaces based on Stitch Liquid Glass while preserving accessibility and financial semantics.
---
# iOS UI — Liquid Glass

## Kiedy użyć
Projektowanie i kodowanie dashboardu, tab bar, kart, formularzy, list, wykresów, stanów.

## Procedura
1. Przeczytaj `AGENTS.md`, `docs/04-design-system.md`, `docs/05-screens.md`, `reference/stitch-original.txt`.
2. Zaznacz, które wartości są rzeczywiste, planowane, modelowe i nieznane.
3. Projektuj komponent wielokrotnego użytku z tokenami, nie pojedynczy ekran z hardcodem.
4. Użyj natywnych prymitywów RN; CSS Stitch jest wizualną referencją, nie syntaxem gotowym do RN.
5. Dla glass zapewnij fallback bez blur, gdy ograniczenia wydajności/dostępności.
6. Sprawdź iOS safe areas, VoiceOver, Dynamic Type, Reduce Motion, długie liczby i pusty stan.
7. Zwróć: `Screen structure`, `Component API`, `Token usage`, `Accessibility`, `Visual QA`.

## Szczególne reguły
Transfery nigdy nie wyglądają jak utrata pieniędzy; plan nie wygląda jak wykonanie; brak wartości nie wygląda jak zero; szkło nie może zmniejszać kontrastu kwot.
