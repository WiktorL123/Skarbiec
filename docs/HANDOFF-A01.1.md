# HANDOFF — Skarbiec po A01.1

## Stan przekazania

- **Data:** 2026-11-15
- **Aktualny branch:** `feature/A01.1-bootstrap-expo`
- **Zakończony task:** `A01.1 — Bootstrap Expo, struktura i Hello World Liquid Glass`
- **Status:** `Review`; GitHub Issue [#16](https://github.com/WiktorL123/Skarbiec/issues/16) pozostaje otwarte i ma etykietę `status:review`.
- **Następny task:** `A01.2 — Fundament testów jednostkowych i UI`
- **GitHub Issue następnego taska:** [#17](https://github.com/WiktorL123/Skarbiec/issues/17)

## Co jest w repozytorium

- Expo SDK 58, React Native 0.88, TypeScript, npm i `package-lock.json`.
- Expo Router z jednym ekranem w `src/app`.
- NativeWind 4.2.7 + Tailwind 3.4.19.
- Tokeny Stitch w `src/ui/tokens.ts`.
- Ekran `Hello World` w jednej karcie Liquid Glass z `expo-blur`, gradientem i fallbackiem Reduce Transparency.
- Dokument uruchamiania: `docs/15-local-development.md`.
- Decyzje techniczne: `docs/12-implementation-decisions.md` i ADR-007 w `docs/08-decisions.md`.
- Konwencja branchy: `feature/<ID>-<krótki-opis>` w `docs/10-agent-workflow.md`.

## Wykonana weryfikacja

- `npm run typecheck` — PASS.
- `npm run lint` — PASS.
- `npx expo install --check` — PASS.
- `npx expo-doctor` — PASS, 20/20 kontroli.
- `npx expo config --type public` — PASS.
- `git diff --check` — PASS.
- Fizyczna weryfikacja na iPhonie, VoiceOver, Dynamic Type i Reduce Transparency — jeszcze niewykonane.
- Eksport iOS uruchamia Metro, ale w tej sesji nie potwierdzono kompletnego artefaktu w `dist`.

## Instrukcje dla kolejnej sesji

1. Przeczytaj `AGENTS.md`, `PROGRESS.md`, ten handoff, task A01.2, `docs/06-architecture.md`, `docs/07-acceptance-tests.md`, `docs/10-agent-workflow.md` oraz `skills/interactive-planning/SKILL.md`.
2. Sprawdź rzeczywisty branch i status repozytorium. Nie usuwaj ani nie nadpisuj istniejących zmian.
3. Nie zaczynaj A01.3 ani żadnego innego taska.
4. Dla A01.2 przeprowadź nową ankietę Interactive Planning Gate. Task wymaga decyzji o Jest/jest-expo, React Native Testing Library, mockach natywnych, coverage i E2E.
5. Przed akceptacją planu nie instaluj pakietów testowych i nie edytuj konfiguracji testów.
6. Po akceptacji utwórz branch zgodny z konwencją, rekomendowane: `feature/A01.2-test-infrastructure`.
7. Zachowaj zakres A01.2: konfiguracja testów, test `Hello World`, jeden prosty test jednostkowy i dokumentacja. Nie dodawaj SQLite, logiki finansowej, E2E ani nawigacji bez osobnej decyzji.
8. Po implementacji oddaj wynik do `Review`, zaktualizuj Issue #17 etykietą `status:review`, ale nie zamykaj Issue i nie edytuj `PROGRESS.md` bez osobnej akceptacji retrospektywy.

## Otwarte kwestie

- Użytkownik nie wykonał jeszcze ręcznej weryfikacji na iPhonie.
- A01.2 ma własny Interactive Planning Gate; decyzji testowych nie wolno dziedziczyć automatycznie z A01.1.
- `docs/github-issue-map.json` jest wcześniejszym artefaktem synchronizacji backlogu i pozostaje lokalną zmianą niepowiązaną z implementacją A01.1.

## Zakaz rozszerzania zakresu

Nie dodawaj na tym etapie SQLite, modeli domenowych, ekranów finansowych, pięciu zakładek, backendu, auth, bank API, CI/CD ani pełnego jasnego motywu.
