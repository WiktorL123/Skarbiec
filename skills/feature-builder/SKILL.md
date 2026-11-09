---
name: skarbiec-feature-builder
description: Build vertical feature slices in a TypeScript React Native Expo SQLite offline-first savings application.
---
# Feature Builder

## Kiedy użyć
Implementacja pojedynczego taska wskazanego przez `docs/09-backlog.md` i jego plik w `docs/backlog/`.

## Procedura
1. Przeczytaj `PROGRESS.md` (ostatnie zatwierdzone retrospektywy) i otwórz dokładnie jeden task i jego zależności; sprawdź Definition of Ready, Scope, Out of scope i kryteria. Przeczytaj `AGENTS.md` i wskazane dokumenty.
2. Opisz kontrakt danych i ograniczenia. Jeśli to logika finansowa, skonsultuj `skills/domain-guardian/SKILL.md`.
3. Zaimplementuj w kolejności: model → use case → repozytorium SQLite → ekran → testy.
4. Przy danych operacjach zastosuj atomowość zapisu, walidację integer groszy i idempotencję.
5. Przy schemacie użyj migracji; nie czyść lokalnej historii.
6. Nie dokładaj serwera, logowania, konta bankowego ani automatycznego zakupu instrumentów.
7. Oddaj raport: `Files`, `Behavior`, `Tests actually run`, `Known gaps`, `Docs changed`; status `Review`. Dodaj propozycję retrospektywy (`Proposed PROGRESS.md entry`) zgodną z szablonem. **Nie zapisuj jej do `PROGRESS.md` bez zatwierdzenia użytkownika.** Nie oznaczaj `Done` i nie zaczynaj następnego taska.

## Kryterium zakończenia
Pionowy feature działa offline na demo fixture, nie myli planu z wykonaniem i zachowuje reguły domény; testy obejmują edge-case.
