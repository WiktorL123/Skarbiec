---
name: ci-cd-planning
description: Planowanie, opiniowanie i dopiero po akceptacji implementowanie GitHub Actions CI, artefaktów oraz przyszłych buildów iOS dla Skarbca. Wymaga interaktywnej ankiety.
---

# CI/CD Planning — Skarbiec

## Kiedy stosować
Każde zadanie dotyczące GitHub Actions, testów w CI, publikowania artefaktów, buildów Expo/EAS, podpisywania iOS, release'ów i sekretów.

## Obowiązkowe źródła
1. `AGENTS.md`, `PROGRESS.md`, odpowiedni plik taska i realne repo.
2. `docs/13-ci-cd-plan.md` (propozycja, nie wdrożona konfiguracja).
3. `docs/10-agent-workflow.md` i `skills/interactive-planning/SKILL.md`.
4. Faktyczny `package.json`, lockfile, konfiguracja Expo i testów, jeśli już istnieją.

## Procedura
1. **Nie twórz workflow ani sekretów przy pierwszym poleceniu „zaplanuj CI/CD”.** Sprawdź stan repo i znane ograniczenia.
2. Ustal minimalny cel pipeline'u i wyraźnie oddziel testy, JS export, iOS Simulator oraz podpisane `.ipa` na urządzenie.
3. Przeprowadź Interactive Planning Gate (małe serie pytań, propozycje z kompromisami, brak powtórzeń). Dla CI/CD gate jest `required`, nawet jeśli opis taska go pomija.
4. Zwróć plan etapowy i zakres pierwszego małego taska: triggers, runners, komendy, artefakty, retencja, sekrety, permissions, szacunkowe koszty, failure modes, acceptance criteria.
5. Zaczekaj na **wyraźne zatwierdzenie planu i zgody na implementację**.
6. Implementuj dokładnie jeden zatwierdzony task. Nie dodawaj przypadkowych buildów iOS, kroków release ani nowych usług.
7. Zweryfikuj YAML lokalnie, jeśli masz narzędzia; potem rzeczywiste uruchomienie CI tylko jeśli masz dostęp i zgodę. Nie deklaruj sukcesu bez logów.
8. Zgłoś status `Review`, zaproponuj wpis do `PROGRESS.md` i ewentualną decyzję do `docs/12-implementation-decisions.md`; nie zapisuj bez akceptacji.

## Reguły krytyczne
- `expo export` nie wytwarza podpisanego `.ipa`.
- Simulator `.app` nie jest aplikacją dla fizycznego iPhone'a.
- PR nie ma dostępu do sekretów podpisujących; nie przekazuj ich niezaufanemu kodowi.
- Nie wstawiaj do CI rzeczywistych danych finansowych, prywatnych baz ani poświadczeń.
- Nie uznawaj workflow za działający bez sprawdzenia faktycznych skryptów, zgodnych zależności i wyników uruchomienia.
- Unikaj kosztownych macOS buildów na każdy commit bez zgody.

## Output przy etapie planowania
- `Current repo state`
- `Questions and recommended defaults`
- `Proposed pipeline stages`
- `Artifacts and installation constraints`
- `Security / secrets / costs`
- `Proposed task IDs and dependencies`
- `Awaiting approval`
