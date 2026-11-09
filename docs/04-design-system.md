# Design system — synteza Stitch (Skarbiec iOS) i domeny

## Kierunek
**Dark, premium, czytelny iOS z miękką estetyką Liquid Glass.** Oryginalna inspiracja: `reference/stitch-original.txt`. Cel to charakter produktu, nie ślepa imitacja CSS/DOM. Priorytet: czytelność, kontrast, wydajność, dostępność, obsługa VoiceOver, Reduce Motion i większego tekstu.

## Warstwy
0. Tło „Deep Void” ciemnoniebieskie.
1. Dekoracyjne subtelne plamy/gradienty emerald/cobalt/violet, najlepiej statyczne lub bardzo lekkie.
2. Półprzezroczyste karty i belki; rozmycie tylko tam, gdzie technicznie działa i nie niszczy kontrastu.
3. Delikatna krawędź świetlna / gradient u góry, bez nachalnego neonowego blasku.
4. Wyraźne dane liczbowe i funkcjonalne etykiety.

## Tokeny (podstawa z Stitch)
| Token | Wartość | Użycie |
|---|---|---|
| bg.void | `#060E20` | tło główne |
| bg.surface | `#0B1326` | tła drugorzędne |
| bg.container | `rgba(19,27,46,0.65)` | karta |
| glass.low | `rgba(255,255,255,0.04)` | subtelna warstwa |
| border.subtle | `rgba(255,255,255,0.08)` | separator |
| border.crisp | `rgba(255,255,255,0.14)` | obwódka |
| border.top | `rgba(255,255,255,0.25)` | refleks |
| emerald | `#10B981` | miękkie, postęp |
| cobalt | `#3B82F6` | obligacje/twarde |
| violet | `#8B5CF6` | inwestycje |
| amber | `#F59E0B` | subskrypcje/uwaga |
| coral | `#EF4444` | konsumpcja/błąd |
| text.primary | `#F8FAFC` | podstawowy |
| text.secondary | `#94A3B8` | opis |
| text.tertiary | `#64748B` | pomocniczy, nie dla drobnych krytycznych treści |

## Geometria
- Hero: zaokrąglenie ok. 28 px; zwykłe karty ok. 24 px; avatar ok. 14 px; pigułki pełne zaokrąglenie.
- Hero amount 32–38 px, semibold/bold, cyfry tabularne; format `pl-PL` i `zł`.
- Progress bar ~8 px, zawsze z etykietą tekstową i kwotą brakującą.
- Wiersz: ikona 44 × 44 px; opis, kwota, status, data. Separator subtelny.
- Bottom tabs: Pulpit, Oszczędności, Plan, Cele, Historia; środkowy FAB tylko jeśli nie zasłania nawigacji. Uwzględnij safe areas.

## Semantyka finansowa
- Konsumpcja: czerwony/neutralny minus i oznaczenie „Wydatek”.
- Transfer oszczędności: strzałka przeniesienia + kategoria celu, nigdy automatycznie „strata”.
- Zaplanowane: obrys/kropka/„Planowane”, nie nasycony kolor zrealizowanych.
- Potwierdzone: „Wykonane”, daty i ślady edycji.
- Prognozy: linia przerywana i napis „Scenariusz”, bez mylenia z historią.
- Zysk/strata rynku: osobny kolor i label, nie mylić z transferem.

## Implementacja w React Native
- `expo-blur` może zapewnić BlurView; `expo-linear-gradient` (nie `react-native-linear-gradient` w przykładowym imporcie Stitch) dla gradientów.
- CSS `backdrop-filter`, `filter: blur`, `inset box-shadow`, `position:fixed`, `env(safe-area-inset-bottom)` **nie działają 1:1** w RN. Buduj natywne odpowiedniki, a jeśli efekt jest zbyt kosztowny, bezpieczny fallback z półprzezroczystą jednolitą powierzchnią.
- Preferuj bezpieczny natywny system tab bar / sprawdzony router, testuj clipping BlurView na fizycznym iPhonie.
- Efekty ambient mogą być statyczne; nie renderuj wielu kosztownych BlurView na listach.
- Przestrzegaj dostępności: tekst kontrastowy, min. hit area ~44 pt, dynamic type, VoiceOver i Reduce Motion.
- Light Mode był w domenowym briefie jako życzenie; Stitch mocno preferuje dark. **MVP default dark, Light Mode jako późniejszy wariant projektowy, nie blokada implementacji.** To decyzja robocza, nie wymóg techniczny.

## Stany komponentów
`loading`, `empty`, `populated`, `planned`, `completed`, `error`, `missing value`, `disabled` (wedle sensu). Zero ≠ brak danych. Animacje nie mogą być jedynym nośnikiem informacji.

## Kontrakt UI
Projektując komponent, podaj: props i ich znaczenie, skąd pochodzi kwota, status kwoty, formatowanie, zachowanie w pustym stanie, VoiceOver, jak radzi sobie z długimi kwotami i danymi użytkownika.
