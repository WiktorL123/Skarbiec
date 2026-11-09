# Architektura MVP — decyzje implementacyjne

## Granice
- React Native + Expo + TypeScript, iOS first.
- Offline-first, **bez backendu i bez auth**.
- Local SQLite: źródło prawdy operacji, harmonogramów, sald i celów.
- Wszystkie obliczenia i klasyfikacje po stronie urządzenia.
- Build Release iOS zawiera bundle JS; Metro jest potrzebne w development, nie do codziennego uruchomienia gotowego buildu.

## Proponowany podział warstw
```text
src/
  app/             # ekrany i nawigacja (jeśli używany Expo Router)
  features/        # savings, planning, goals, expenses, history, scenarios
  domain/          # Money, Operation, Goal, Forecast, Recurrence; czyste TS
  application/     # use cases: classify, post, summarize, forecast
  data/            # SQLite adapters, migracje, repository interfaces
  ui/              # theme, tokens, primitives, shared components
  lib/             # data formatting, date tools
```
To jest rekomendacja, nie wymóg sztywnej struktury repo.

## Konwencje
- Integer grosze do przechowywania kwot. Na formularzu parsuj polskie zapisy, nie stosuj `parseFloat` na kwotach bez walidacji.
- Daty operacji: lokalna data kalendarzowa `YYYY-MM-DD` + znacznik zdarzenia gdy potrzebny, niezależnie od timezone w bazie.
- Salda i podsumowania obliczane z historii albo jawnych snapshotów z możliwością rekonsyliacji. Żadna suma nie może dublować transferów.
- Nie przechowuj sztucznych wartości jako stanu produkcyjnego; dane przykładowe tylko w seedach demonstracyjnych/testach.
- Modyfikacje schematu SQLite przez migracje, nie resetowanie danych urządzenia.
- Repozytoria oddzielają use cases od SQLite. Testuj pure TS bez UI i bazy.

## Stos technologiczny do oceny na starcie
Expo Router lub React Navigation; expo-sqlite; expo-linear-gradient; expo-blur tylko z fallbackiem; date-fns lub Temporal-compatible narzędzie (wybrać po sprawdzeniu kompatybilności Expo); React Hook Form + Zod opcjonalnie; test runner Vitest/Jest dobrany do RN. Wersje bibliotek instalować według zgodności z aktualnym Expo SDK, nie kopiować sztywnych starych wersji.

## Bank API (po MVP)
W przyszłości adapter Enable Banking AIS do pojedynczego CA24 i minimalny backend chroniący klucz prywatny, np. Azure Function. Brak PIS i nie wymagaj rachunku Pekao ani oszczędnościowego CA. Importer ma być idempotentny, użytkownik może korygować rozpoznanie transakcji. Klucz JWT nigdy w aplikacji mobilnej. Osobny ADR przed wdrożeniem.

## Praca offline
Bez sieci: pełen pulpit, plan, cele, wydatki, historia, prognozy. Nie wprowadzaj ekranów logowania, konta, API calls w MVP.
