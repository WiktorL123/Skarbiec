# Skill: github-issue-sync

## Cel
Bezpieczne tworzenie i utrzymywanie GitHub Issues jako tablicy postępu dla lokalnego backlogu Skarbca, z zachowaniem Markdown jako źródła specyfikacji.

## Wyzwalacz
Użytkownik prosi o import / eksport / synchronizację backlogu, tworzenie GitHub Issues, parent/sub-issues, milestones, etykiet lub zależności z lokalnych tasków.

## Wymagana dokumentacja
1. `AGENTS.md`, `PROGRESS.md`.
2. `docs/09-backlog.md` i komplet `docs/backlog/**/EPIC.md` oraz tasków.
3. `docs/14-github-workflow.md`.
4. `skills/interactive-planning/SKILL.md`.

## Tryby
- **inspect**: tylko odczyt. Weryfikuj CLI, auth, repo, istniejące issues, duplikaty i zgodność hierarchii.
- **bootstrap**: pierwszy import całości / wybranego zakresu. Zawsze najpierw inspect, pytania, dry-run i akceptacja.
- **sync**: kolejne uzgodnione zmiany. Wymaga odczytu aktualnego stanu i jawnej zgody przed zapisem.

## Procedura
1. Odczytaj wymagania z lokalnych plików, nie generuj tasków „z głowy”. Policzyć faktyczne pliki i relacje.
2. Sprawdź `gh --version`, `gh auth status`, `gh repo view`, `gh issue list --state all`, milestones i labels. Nie ujawniaj tokenów.
3. Wykonaj **Interactive Planning Gate**. Nie pytaj o decyzje, które już zostały potwierdzone. Ustal target, zakres, widoczność i format issue.
4. Przygotuj **dry-run**, z wyraźnymi operacjami: create / update / no-op / conflict, pokazując także duplikaty, przykładowe body i ryzyka danych prywatnych.
5. **Zatrzymaj się**. Zapytaj o zgodę na dokładnie przedstawiony plan. Żadnych mutacji GitHub w etapie inspect/dry-run.
6. Po jednoznacznym zatwierdzeniu twórz brakujące milestones, parent issues, sub-issues i zaakceptowane relacje. `gh issue create --parent` wymaga obsługującej go wersji CLI (2.94.0+).
7. Nie powielaj istniejących ID i nie nadpisuj ręcznie edytowanych treści. Gdy stan GitHuba zmienił się od dry-run, zatrzymaj apply i zgłoś konflikt.
8. Zweryfikuj wynik, numery i URL. Zapisz zatwierdzoną mapę lokalne ID → issue (np. `docs/github-issue-map.json`) dopiero przy apply. Zgłoś brakujące / błędne wpisy.
9. Nie modyfikuj `PROGRESS.md` bez osobnej akceptacji retrospektywy. Sam import backlogu nie oznacza wykonania żadnego taska.

## Zasady
- Źródło zakresu i acceptance criteria: lokalny Markdown.
- Źródło statusu i dyskusji: GitHub Issue; nie twórz alternatywnej automatycznej tablicy lokalnej.
- GitHub Milestone = etap, parent issue = Epic, sub-issue = task. Story może pozostać opisem rezultatu w Epicu.
- Do zamknięcia issue wymagana jest wyraźna akceptacja użytkownika; `Review` pozostaje otwarte.
- Nie zakładaj istnienia GitHub Projects ani Issue Types. Ustal labels po ankiecie.
- Nie ujawniaj prywatnych informacji finansowych w publicznych Issues. Nigdy nie dodawaj sekretów i poświadczeń.
- Nie implementuj kodu aplikacji w tym skillu.

## Rezultat
Raport: wybrane repo, wykryta hierarchia, plan/zrealizowane zmiany, utworzone lub odnalezione numery Issue, konflikty, statusy i następne zatwierdzenie wymagane od użytkownika.
