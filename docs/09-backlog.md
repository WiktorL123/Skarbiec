# Backlog MVP — indeks zadań (v2)

Backlog jest podzielony na **Milestone → Epic → Story/rezultat → Task**. Każdy plik taska to pojedyncza jednostka pracy agenta; opis `Story / rezultat` wyjaśnia wartość użytkową. Nie stosujemy sprintów ani estymacji godzinowych.

## Reguły wykonania
- Pracuj nad **jednym taskiem na raz**; nigdy automatycznie nie zaczynaj następnego.
- Task jest `Ready` tylko gdy zależności są ukończone, a zakres i testy jasne.
- Wynik agenta przechodzi do `Review`, nie `Done`; `Done` wymaga akceptacji użytkownika.
- Gdy task wykracza poza jeden spójny rezultat lub wymaga kilku niezależnych funkcji, podziel go przed implementacją.
- Stany: `Backlog → Ready → In Progress → Review → Done` oraz `Blocked`.
- Specyfikacja domenowa, model danych i design pozostają w odpowiednich dokumentach; backlog ich nie powiela.

## Milestone i Epiki

### Milestone A — Fundament

- [A01 — Konfiguracja aplikacji](backlog/milestone-a-foundation/epic-a01/EPIC.md) (3 tasków)
- [A02 — Fundament SQLite i modeli](backlog/milestone-a-foundation/epic-a02/EPIC.md) (5 tasków)
- [A03 — Komponenty interfejsu](backlog/milestone-a-foundation/epic-a03/EPIC.md) (3 tasków)

### Milestone B — Ewidencja i pulpit

- [B01 — Zarządzanie transakcjami](backlog/milestone-b-finances/epic-b01/EPIC.md) (5 tasków)
- [B02 — Ewidencja oszczędności](backlog/milestone-b-finances/epic-b02/EPIC.md) (4 tasków)
- [B03 — Dashboard](backlog/milestone-b-finances/epic-b03/EPIC.md) (3 tasków)

### Milestone C — Miesięczny plan

- [C01 — Plan miesięczny](backlog/milestone-c-planning/epic-c01/EPIC.md) (3 tasków)
- [C02 — Stałe wydatki](backlog/milestone-c-planning/epic-c02/EPIC.md) (4 tasków)
- [C03 — Podsumowanie miesiąca](backlog/milestone-c-planning/epic-c03/EPIC.md) (2 tasków)

### Milestone D — Cele i scenariusze

- [D01 — Cele finansowe](backlog/milestone-d-goals/epic-d01/EPIC.md) (4 tasków)
- [D02 — Scenariusze i podwyżki](backlog/milestone-d-goals/epic-d02/EPIC.md) (4 tasków)
- [D03 — Wykresy i prognozy](backlog/milestone-d-goals/epic-d03/EPIC.md) (3 tasków)

### Milestone E — Użytkowanie

- [E01 — Eksport i odzyskiwanie](backlog/milestone-e-release/epic-e01/EPIC.md) (2 tasków)
- [E02 — Build iOS bez Metro](backlog/milestone-e-release/epic-e02/EPIC.md) (2 tasków)
- [E03 — Regresja i dostępność](backlog/milestone-e-release/epic-e03/EPIC.md) (2 tasków)

## Po MVP

Enable Banking AIS wyłącznie CA24, Azure Function JWT, zgody, importer i reguły automatycznej klasyfikacji. Wymaga osobnego ADR, bezpieczeństwa i osobnego backlogu.

## Konwencja wykonania

Przykład: `Wykonaj A01.1` → agent czyta plik taska, sprawdza zależności, implementuje, testuje i zgłasza wynik do `Review`. Szczegóły w [workflow](10-agent-workflow.md).
