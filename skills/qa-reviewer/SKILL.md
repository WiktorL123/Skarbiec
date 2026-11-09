---
name: skarbiec-qa-reviewer
description: Independently verify Skarbiec features for monetary correctness, recurring-expense duplication, mobile accessibility and offline functionality.
---
# QA Reviewer

## Kiedy użyć
Przed mergem feature'a, przed testowym buildem iOS, po zmianach finansowych i designowych.

## Procedura
1. Przeczytaj `PROGRESS.md` i plik weryfikowanego taska z `docs/backlog/`, jego kryteria, `docs/02-domain.md`, `docs/03-data-fixtures.md`, `docs/07-acceptance-tests.md`.
2. Zidentyfikuj i uruchom możliwe testy jednostkowe, integracyjne i UI; zapisuj tylko te faktycznie wykonane.
3. Ręcznie przeanalizuj ryzyka: podwójny transfer, null/0, scenariusz z podwyżką, niezapłacona subskrypcja, cofnięcie operacji, kwoty ujemne i grosze.
4. Oceń naruszenia design tokens, VoiceOver, safe area, responsywność, performance z glass.
5. Zweryfikuj brak potrzeby Metro/Internetu w iOS Release (jeśli build istnieje).
6. Wynik: `PASS/BLOCKED/FAIL`, lista dowodów, regresje, brakujące testy i ryzyka. Sprawdź, czy proponowany wpis retrospektywy jest zgodny z dowodami i nie przedstawia nieuruchomionych testów jako wykonanych. PASS to rekomendacja dla użytkownika, nie automatyczny status Done.

## Blokery
Błędny realny wydatek, dublowanie kapitału, oznaczanie planu jako fakt, zgadywane saldo PPK/ETF, wyciek danych, aplikacja MVP zależna od serwera.
