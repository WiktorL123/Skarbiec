# Decyzje / ADR / otwarte kwestie

## ADR-001: MVP lokalne
**Status:** accepted. iPhone + React Native + Expo + SQLite, bez backendu/logowania/połączeń bankowych. Bankowy AIS jako osobna faza.

## ADR-002: Źródło prawdy finansowej
**Status:** accepted. Lokalne wpisy potwierdzone, planowane i wyceny to różne typy danych. Nie mieszamy sald z przepływami.

## ADR-003: Transfer ≠ wydatek
**Status:** accepted. Własne rachunki i wpłaty do XTB nie zwiększają konsumpcji. Przelew ≠ zakup instrumentu.

## ADR-004: Styl Stitch Liquid Glass
**Status:** proposed / direction accepted conceptually. Głęboki granat, emerald/cobalt/violet, szkło i silna hierarchia. Implementacja natywna RN z dostępnością i fallbackiem; CSS z briefu nie jest kodem gotowym do skopiowania.

## ADR-005: Jeden główny rachunek CA24 przy przyszłym AIS
**Status:** future agreed scope. Nie podłączać drugiego rachunku CA ani Pekao w pierwszej integracji; brak PIS.

## ADR-006: Default dark
**Status:** proposed. Stitch definiuje wyłącznie estetykę ciemną; wcześniejszy brief rozważał Light Mode. W MVP realizujemy najpierw Dark Mode, bez blokowania przyszłego Light Mode.

## Pytania do rozstrzygnięcia implementacyjnie
- Czy „Skarbiec” staje się oficjalną nazwą, czy pozostaje robocza „Savings App”?
- Czy w MVP śledzimy dokładne saldo głównego CA24, czy wyłącznie pulę oszczędności i zapis operacji? Bez danych do rekonsyliacji nie zgaduj salda.
- Czy rezerwacja części miękkich to wyłącznie cel oznaczony, czy osobny realny „subwallet”?
- Czy pierwsza wersja obejmuje PPK jako pełną oś czasu, czy wyłącznie ręczną wycenę?
- Jaki jest sposób eksportu/odtwarzania SQLite (plik DB vs JSON)?
- Czy „poduszka” jest potrzebna? Stitch wymienia 5000 zł tylko przykładowo, nie potwierdzona kwota.

## Reguła ADR
Zmiana danych domenowych: aktualizuj `02-domain`, `03-data-fixtures`, testy. Zmiana UI: `04-design-system` / `05-screens`. Zmiana architektury: nowy wpis ADR przed dodaniem biblioteki/usługi zewnętrznej.
