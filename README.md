# Skarbiec — AI development kit

Zestaw repozytoryjnych instrukcji dla agentów budujących aplikację oszczędnościową **Skarbiec** (nazwa z briefu Stitch, robocza; oryginalna nazwa projektu: Savings App).

## Jak używać
1. Skopiuj zawartość paczki do głównego katalogu repozytorium.
2. Otwórz repozytorium w IDE i poleć agentowi przeczytać `AGENTS.md` i `PROGRESS.md`.
3. Do zadań domenowych użyj `skills/domain-guardian/SKILL.md`, do UI `skills/ios-ui/SKILL.md`, do implementacji `skills/feature-builder/SKILL.md`, do review `skills/qa-reviewer/SKILL.md`.
4. Zacznij od `docs/09-backlog.md`, wybierz **jedno** zadanie z `docs/backlog/` i przekazuj agentowi tylko jego ID. Każdy task kończy się `Review`; tylko Ty zatwierdzasz `Done`. Agent proponuje retrospektywę, a `PROGRESS.md` zmienia wyłącznie po Twojej akceptacji.

## Układ
- `AGENTS.md`: reguły całego repo i przekazywanie pracy agentom.
- `PROGRESS.md`: zatwierdzony, zwięzły dziennik retrospektyw i ciągłość kontekstu między sesjami.
- `docs/01-product.md`: wizja, zakres MVP, język, nawigacja, user flows.
- `docs/02-domain.md`: znaczenie pieniędzy, operacji i sald.
- `docs/03-data-fixtures.md`: sprawdzone dane, planowane operacje i sample UI.
- `docs/04-design-system.md`: synteza Google Stitch + zasady natywnego RN.
- `docs/05-screens.md`: kontrakty ekranów i stanów.
- `docs/06-architecture.md`: architektura i decyzje techniczne MVP.
- `docs/07-acceptance-tests.md`: scenariusze i kryteria akceptacji.
- `docs/08-decisions.md`: ADR-y, niewiadome i pomysły na później.
- `docs/09-backlog.md`: indeks Milestone’ów i Epiców.
- `docs/backlog/`: szczegółowe taski, zależności, zakres i kryteria akceptacji.
- `docs/10-agent-workflow.md`: współpraca agentów i format handoff.
- `docs/11-data-model.md`: proponowany model danych, zdarzenia, SQLite.
- `docs/12-privacy.md`: minimalizacja danych i eksport offline.
- `reference/stitch-original.txt`: oryginalny, niezmieniony brief użytkownika.

Ważne: to **dokumentacja do implementacji**, nie gotowy kod aplikacji. Propozycje techniczne można zmieniać przez ADR, nie przez cichą zmianę domeny.

## Start: interaktywny bootstrap i testy (v2.2)
1. `A01.1` — agent najpierw pyta o wybory techniczne; po Twojej akceptacji tworzy Expo/TypeScript, tokeny Stitch i **tylko jeden ekran Hello World w karcie Liquid Glass**.
2. Po Review i akceptacji `A01.1`, `A01.2` — osobna ankieta dot. Jest/jest-expo, React Native Testing Library i ewentualnego E2E; dopiero potem konfiguracja testów.
3. Dopiero `A01.3` — nawigacja pięciu zakładek.

Claude Code: `CLAUDE.md` wskazuje na `AGENTS.md`. Uzgodnienia techniczne: `docs/12-implementation-decisions.md`. Skill rozmów: `skills/interactive-planning/SKILL.md`.
