# AGENTS.md — Skarbiec / Savings App

## Misja
Buduj prywatną aplikację iOS do śledzenia miękkich i twardych oszczędności, planów, celów, wydatków i ich prognoz. **MVP: React Native + Expo + TypeScript + lokalny SQLite, offline-first, bez konta, bez backendu, bez połączenia z bankiem.** Wszystkie teksty interfejsu po polsku; dokumenty dla agentów po polsku.

## Obowiązkowe lektury przed zmianą
0. **Zawsze** przeczytaj `PROGRESS.md` (ostatni zatwierdzony stan i wnioski) oraz sprawdź rzeczywisty stan repozytorium; `PROGRESS.md` nie zastępuje kodu ani backlogu.
1. `docs/02-domain.md` i `docs/03-data-fixtures.md` przed dotknięciem finansów.
2. `docs/04-design-system.md` i `docs/05-screens.md` przed UI.
3. `docs/06-architecture.md`, `docs/11-data-model.md` przed logiką/danymi.
4. `docs/07-acceptance-tests.md` przed zakończeniem zadania.

## Hierarchia źródeł prawdy
1. Najnowsza wyraźna decyzja użytkownika.
2. `docs/02-domain.md` + `docs/03-data-fixtures.md` (fakty/semantyka).
3. `docs/01-product.md` + `docs/05-screens.md` (funkcje i UX).
4. `docs/04-design-system.md` (wygląd; wytyczne Stitch są inspiracją, nie nadrzędną regułą biznesową).
5. `reference/stitch-original.txt` (źródło wizualne; nie traktuj przykładowych liczb jako rzeczywistego salda).

## Niepodlegające negocjacji reguły
- Przelew CA24 → Pekao na oszczędności/obligacje, CA24 → oszczędnościowe CA oraz BLIK → XTB **nie są wydatkami konsumpcyjnymi**.
- Przelew na rachunek obligacyjny != potwierdzony zakup obligacji; BLIK do XTB != zakup ETF.
- Nie licz kapitału dwa razy. Rozróżniaj źródło pieniędzy, transfer, zakup aktywa, wycenę i saldo.
- Planowane != wykonane. Przewidywane != rzeczywiste. Wpłaty != rynkowa wartość.
- PPK nie jest płynną gotówką; od wypłaty netto nie odejmuj PPK drugi raz.
- Stała subskrypcja generuje planowane wystąpienie, nie rzeczywisty wydatek.
- Dane finansowe w integer groszach; bez float do księgowania. Daty kalendarzowe lokalne, czytelne formatowanie `pl-PL`.
- Brak sztucznych danych udających autentyczne, brak dodawania auth/backendu/bank API w MVP.
- Zachowaj dostępność; nie przenoś CSS `backdrop-filter`, `position: fixed`, `box-shadow: inset` 1:1 do React Native.

## Interactive Planning Gate
- Każdy task może deklarować `Interactive Planning Gate: required | optional | none`. Dla `required` agent **musi najpierw przeprowadzić interaktywną ankietę**, zebrać Twoje decyzje i uzyskać odrębną akceptację planu przed instalacją zależności lub edycją kodu. Reguły: `skills/interactive-planning/SKILL.md`.
- Pytania po polsku, w krótkich rundach, z rekomendacją i kompromisami. Nie pytaj ponownie o decyzje już zatwierdzone. Uzgodnienia zapisuj tylko po zgodzie do `docs/12-implementation-decisions.md`.
- **A01.1:** szkielet Expo/TypeScript, tokeny Stitch i wyłącznie ekran `Hello World` w jednej karcie Liquid Glass. **A01.2:** konfiguracja testów jednostkowych i komponentowych po osobnej ankiecie. Nawigacja to A01.3.

## Jak pracować
- Zacznij od `docs/09-backlog.md` i **jednego** pliku taska w `docs/backlog/`. Sprawdź zależności, Scope, Out of scope oraz kryteria. Bez zgody użytkownika nie rozpoczynaj następnego ID.
- Status po wykonaniu: **Review**, nie Done; Done dopiero po akceptacji użytkownika. Szczegóły w `docs/10-agent-workflow.md`.
- W zadaniu użyj odpowiedniego SKILL.md. Najpierw zapisz krótkie założenia i pliki, których dotkniesz.
- Implementuj najmniejszy pionowy wycinek: typy → use case → repo → UI → testy.
- Dodaj testy reguł finansowych i co najmniej jednego stanu pustego/niepowodzenia.
- Na koniec: zmiany, testy wykonane/niewykonane, ryzyka, wymagane decyzje (bez zgadywania). **Zaproponuj wpis do `PROGRESS.md` w odpowiedzi Review, ale nie edytuj pliku przed wyraźną akceptacją użytkownika.** Po akceptacji zapisz uzgodniony wpis; nie rozpoczynaj kolejnego taska bez osobnej zgody.
- Nie zmieniaj potwierdzonych kwot ani architektury bez aktualizacji dokumentacji i uzgodnienia.

## Zakres MVP
Dashboard; Oszczędności; Plan miesiąca; Cele; Historia; stałe wydatki; ręczna ewidencja; scenariusz z podwyżką; ręczne salda i wyceny; lokalny eksport danych. Kolejność w backlogu; bez sprintów, jeden mały task naraz.
