# Rejestr uzgodnień implementacyjnych

Ten dokument przechowuje **zatwierdzone** odpowiedzi z Interactive Planning Gate. Przed pierwszą ankietą nie ma ustaleń dotyczących package managera, wersji NativeWind, narzędzi testowych ani struktury katalogów. Nie wolno traktować rekomendacji agenta jako zatwierdzonej decyzji.

## Zatwierdzone ustalenia
### 2026-11-13 — A01.1 — Bootstrap aplikacji
- **Decyzja:** Expo SDK 58, TypeScript, npm i package-lock; Expo Go na iPhonie użytkownika (iOS 27.2.1).
- **Stylowanie:** NativeWind 4.2.7 i Tailwind 3.4.19; jedno źródło tokenów Stitch współdzielone przez style natywne i Tailwind.
- **Struktura:** Expo Router, jeden ekran w `src/app`, tokeny i elementy UI w `src/ui`. Dalsze warstwy dopiero przy odpowiednich taskach.
- **Glass:** expo-blur i expo-linear-gradient, statyczne tło, refleksy krawędzi, fallback przy Reduce Transparency lub braku obsługi blur. Efekt inspirowany Liquid Glass, nie natywny materiał Apple.
- **Motyw:** ciemny teraz; struktura tokenów umożliwi późniejszy tryb systemowy. Jasny wariant i przełącznik motywu poza A01.1.
- **Weryfikacja:** typecheck, lint, zgodność zależności i bundle iOS; weryfikacja fizycznego iPhone wymaga udziału użytkownika. Infrastruktura testowa w A01.2.
- **Opcje rozważone:** pnpm/Yarn, StyleSheet, App.tsx bez routera, natywne Liquid Glass, jasny motyw teraz.
- **Powód:** preferencje użytkownika, zgodność z Expo Go i mały zakres pierwszego taska.
- **Konsekwencje:** wersje natywne dobierane przez Expo; niezgodność stosu wymaga zgłoszenia przed zmianą uzgodnionych technologii.
- **Zatwierdzone przez użytkownika:** tak, 2026-11-13, wraz z zapisem ustaleń i konwencją branchy w `docs/10-agent-workflow.md`.
- **Powiązane ADR:** ADR-001, ADR-004, ADR-006; decyzje dotyczą obecnego wycinka A01.1.


## Szablon wpisu (nie wypełniaj bez zgody)

### [Data] — [Task ID] — [Temat]
- **Decyzja:** ...
- **Opcje rozważone:** ...
- **Powód:** ...
- **Konsekwencje / ograniczenia:** ...
- **Zatwierdzone przez użytkownika:** tak, [data]
- **Powiązane ADR:** ... (jeżeli wpływa na architekturę)

Wpis tutaj opisuje decyzję konfiguracyjną; trwałe ADR nadal przechowuje `docs/08-decisions.md`, a wyniki pracy `PROGRESS.md`.
