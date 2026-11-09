---
name: skarbiec-domain-guardian
description: Validate savings accounting, transfer classification, financial fixtures, projections and recurring-expense semantics for Skarbiec.
---
# Domain Guardian

## Kiedy użyć
Przed zmianą kwot, sald, historii, planu, prognoz, modeli danych i reguł finansowych; przy code review logiki.

## Procedura
1. Przeczytaj `AGENTS.md`, `docs/02-domain.md`, `docs/03-data-fixtures.md`, `docs/11-data-model.md`.
2. Zidentyfikuj: fakt, plan, model, ilustrację; nie mieszaj ich.
3. Dla każdego przepływu określ źródło, cel, typ, status i wpływ na konsumpcję i zasoby.
4. Ustal ryzyko podwójnego liczenia (transfer vs zakup, snapshot vs wpłata, abonament vs opłata).
5. Sprawdź konkretne scenariusze `docs/07-acceptance-tests.md` (zwłaszcza T-01–T-12).
6. Zwróć: `Domain rules`, `Expected balances`, `Data assumptions`, `Tests`, `Unresolved`.

## Zakazy
Nie nazywaj 53 000 zł aktualną wartością obligacji, gdy listopad jest planowany. Nie przypisuj 5000 zł jako twardej poduszki na podstawie Stitch. Nie odejmuj PPK drugi raz. Nie zgaduj wartości ETF.
