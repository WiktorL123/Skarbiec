# Skill: interactive-planning

## Cel
Przed zmianami wysokiego wpływu ustal z użytkownikiem wybory techniczne i plan, zamiast samemu dokonywać nieodwracalnych założeń.

## Kiedy używać
Task ma `Interactive Planning Gate: required`; opcjonalnie `optional` w sytuacji rzeczywiście nierozstrzygniętych decyzji.

## Procedura
1. Przeczytaj `AGENTS.md`, `PROGRESS.md`, task i powiązane dokumenty, sprawdź repo i rzeczywiste wersje zależności.
2. Zidentyfikuj tylko **nieuzgodnione** decyzje, które materialnie zmieniają implementację. Nigdy nie pytaj ponownie o już zatwierdzone wybory.
3. Zadaj pytania **interaktywnie**, w małych rundach, w języku polskim. Każde pytanie: 2–4 realne opcje, rekomendacja i istotne konsekwencje; dozwolone odpowiedzi wolnym tekstem. Nie generuj gigantycznej ankiety.
4. Zbieraj odpowiedzi aż nie będzie istotnych niewiadomych. W razie konfliktu ze źródłem prawdy wskaż konflikt i zapytaj o rozstrzygnięcie.
5. Przedstaw Plan do zatwierdzenia: decyzje, zależności, pliki, kroki, testy, Out of scope, zagrożenia. Zakończ pytaniem o zgodę; **nie instaluj pakietów, nie edytuj kodu ani konfiguracji wcześniej**.
6. Po wyraźnej zgodzie realizuj wyłącznie wybrany task. Nie traktuj zgody na plan jako akceptacji gotowego kodu.
7. Proponuj zapis uzgodnionych wyborów do `docs/12-implementation-decisions.md`; aktualizuj go tylko po zgodzie użytkownika. Po implementacji osobno zaproponuj retrospektywę do `PROGRESS.md`.

## Tryby
- `required`: zawsze ankieta i zatwierdzenie planu.
- `optional`: krótka ankieta tylko gdy decyzje pozostają otwarte; jeśli nie, zaznacz brak pytań i pracuj normalnie.
- `none`: bez ankiety, chyba że krytyczna sprzeczność uniemożliwia wykonanie.

## Handoff
Odróżniaj `Plan approved`, `Implementation in Review`, `Implementation Done` i `Retrospective approved`. Nie zaznaczaj `Done` samodzielnie.
