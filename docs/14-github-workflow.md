# Skarbiec — GitHub Issues i synchronizacja backlogu

**Status:** PROPOSAL. Wprowadzenie konfiguracji na GitHubie wymaga interaktywnego uzgodnienia, dry-run i zgody właściciela repozytorium. **Nie jest to polecenie wykonania synchronizacji.**

## Cel i źródła prawdy

- Lokalny `docs/backlog/` oraz `docs/09-backlog.md`: *co* i *jak* zrealizować; wymagania, zakres, zależności, acceptance criteria.
- GitHub Issues: status, dyskusja, przypisanie, relacje parent/sub-issue, powiązania z PR. Jeden issue na jeden task; bez GitHub Projects na MVP.
- `PROGRESS.md`: zatwierdzona retrospektywa i faktyczny przebieg prac; **nie** tablica issue-statusów.
- `docs/08-decisions.md` i `docs/12-implementation-decisions.md`: zatwierdzone decyzje, nie przypadkowe komentarze w Issues.

Nie synchronizuj dwustronnie pełnego tekstu. Zmiany w wymaganiach najpierw uzgodnij i zapisz lokalnie; potem zaproponuj aktualizację GitHub. Ręczne zmiany po stronie GitHub wymagają przeglądu konfliktów.

## Mapowanie

| Lokalnie | GitHub |
|---|---|
| Milestone A–E | GitHub Milestone o jednoznacznej nazwie |
| `EPIC.md`, np. `A01` | Parent Issue `A01 — ...` |
| Task `A01.1-*.md` | Sub-issue `A01.1 — ...` pod A01 |
| Zależności w tasku | Relacje `blocked by` tam, gdzie wspierane |
| `Review` | Issue otwarty, komentarz o stanie Review; opcjonalny label |
| `Done` | Zamknięcie po wyraźnej akceptacji użytkownika |

GitHub Issues nie posiadają natywnego, uniwersalnego pięcioetapowego statusu poza open/closed. Jeśli użytkownik wybierze statusy pośrednie, użyj labeli (np. `status:ready`, `status:in-progress`, `status:review`, `status:blocked`); ustal zasady ich aktualizacji i nie wymagaj GitHub Projects. Nie zakładaj, że typy Issue `Epic`/`Task` są dostępne w repozytorium prywatnym lub osobistym: to opcjonalna funkcja zależna od konfiguracji GitHub.

W ciele każdego Issue umieść: stabilny ID, krótki cel, precyzyjne kryteria akceptacji (lub link do nich), ścieżkę do lokalnego pliku Markdown jako zwykły tekst lub link do wersji w GitHub, zależności, `Out of scope` i znacznik `Source: local docs/backlog`. Linki do plików wolno zbudować dopiero po ustaleniu rzeczywistego owner/repo/branch. Nie kopiuj prywatnych realnych danych finansowych do publicznych Issues.

## Pierwsza synchronizacja: bootstrap

### Etap 0 — Read-only / inspection

1. Przeczytaj `AGENTS.md`, `PROGRESS.md`, `docs/09-backlog.md`, wszystkie `EPIC.md` i taski w `docs/backlog/` oraz ten dokument.
2. Sprawdź `gh --version` (wymagane aktualne CLI obsługujące `gh issue create --parent`), `gh auth status`, `gh repo view` i poprawność docelowego repozytorium. `gh auth status` nie ujawniaj użytkownikowi z tokenami.
3. Sprawdź, czy w repozytorium włączone są Issues, czy konto ma uprawnienia oraz czy repo jest publiczne/prywatne.
4. Przejrzyj istniejące milestones, etykiety i Issues **otwarte i zamknięte** z paginacją. Odczytaj także relacje podzadań tam, gdzie dostępne. Sprawdź dopasowanie stabilnych identyfikatorów, nie samych numerów Issue.
5. Zweryfikuj faktyczny stan lokalnego backlogu; liczby 5/15/50 ze starszej paczki są jedynie historycznym szacunkiem.

### Etap 1 — Interactive Planning Gate

Przed zapisami zapytaj (w małych turach, nie powtarzając ustaleń):
- Czy celem jest repo wykryte przez `gh repo view`, i czy może być publiczne?
- Czy importować wszystkie Milestone'y/Epiki/Taski, czy najpierw tylko etap A?
- Czy tworzyć labels statusów i dependencies, czy zacząć tylko od hierarchii?
- Czy Issue ma zawierać pełne kryteria akceptacji, czy skrót i link do lokalnej specyfikacji?
- Jak obsłużyć już istniejące Issues i różnice w treści?

Podaj rekomendację i konsekwencje każdego wyboru. Rozstrzygnij prywatność danych przed publikacją.

### Etap 2 — Dry-run (bez zmian na GitHubie)

Wypisz: target `owner/repo`, listę planowanych Milestones, parent Issues, sub-issues, labels, dependencies, wzór treści Issue, liczbę create/update/no-op/conflict i wykryte duplikaty. Pokaż kilka przykładów, w tym A01 i A01.1. Sprawdź limity i ograniczenia API/CLI; jeśli relacje nie są dostępne, zaproponuj fallback z linkami w ciele issue. **Zatrzymaj się i poproś o jednoznaczną zgodę na zapis.** Dry-run nie wykonuje żadnych mutacji.

### Etap 3 — Apply (tylko po akceptacji)

1. Utwórz brakujące milestones / uzgodnione labels.
2. Utwórz brakujące parent issues (Epic), potem brakujące sub-issues (Task) z `--parent`.
3. Opcjonalnie ustaw zależności `--blocked-by` na podstawie znanych numerów już utworzonych Issues.
4. W razie błędu zatrzymaj się, odczytaj faktyczny stan i nie ponawiaj ślepo tworzenia.
5. Zmapuj każdy lokalny ID na rzeczywisty URL i numer Issue (preferowany plik `docs/github-issue-map.json`, generowany dopiero przy zatwierdzonym apply), bez prywatnych tokenów.
6. Sprawdź hierarchię i sumy. Zgłoś konflikty i elementy pominięte; nie oznaczaj tasków jako `Done`.

Nie wolno robić force-update ani usuwać ręcznych komentarzy. Nie wolno tworzyć Issues automatycznie przy zwykłym uruchomieniu aplikacji lub buildzie.

## Kolejne synchronizacje: update

Wyszukaj odpowiadający Issue po mapie i ID, potwierdź jego aktualny stan i wykryj różnice. Proponuj osobno: nowe Issues, aktualizacje tekstu, statusy, relacje. Wymagaj dry-run i zgody przed mutacją. Zmiany statusu `Review → Done` i zamknięcie Issue wymagają potwierdzenia użytkownika. Akceptacja retrospektywy w `PROGRESS.md` jest osobna.

## Przydatne polecenia (przykłady, NIE uruchamiać przed zatwierdzeniem)

```bash
# Rozpoznanie (read-only)
gh --version
gh auth status
gh repo view
gh issue list --state all --limit 100

# Po uzgodnieniu i zatwierdzeniu, przykład:
gh issue create --title "A01 — Konfiguracja aplikacji" --body-file epic-body.md
gh issue create --title "A01.1 — Bootstrap Expo" --body-file task-body.md --parent 123
```

W CLI od wersji 2.94.0 dostępne są flagi `--parent` i `--blocked-by`; w praktyce przed zastosowaniem agent powinien sprawdzić `gh issue create --help`. Repozytorium i issue #123 to **przykład**, nie prawdziwy identyfikator. Migracja issue między rodzicami lub łączenie istniejących issue wymaga osobnej weryfikacji flag `gh issue edit` i zgody.

## Review oraz PR

- Przed rozpoczęciem implementacji: przeczytaj issue i jego lokalny plik; zakres lokalny ma pierwszeństwo.
- Po ukończeniu zadania: zostaw issue otwarty w stanie Review, przedstaw raport, testy i proponowaną retrospektywę.
- Po zatwierdzeniu przez właściciela: zaktualizuj `PROGRESS.md` (jeśli zaakceptowano wpis), status i issue; połączenie z PR jest opcjonalne.
- Nie zamykaj issue automatycznie przez `Closes #...` w PR, jeśli właściciel nie zaakceptował tego trybu. Do czasu zgody używaj neutralnego `Refs #...`.

## Bezpieczeństwo

Nie używaj tokenów w promptach, skryptach repo ani logach. Preferuj lokalne `gh auth login`; nie zbieraj danych bankowych. Nie kopiuj do issue rzeczywistych wartości portfela, nazwisk, kont, IBAN czy tajemnic. W publicznym repo rozważ ograniczenie treści issue do wymagań produktowych bez historycznych danych finansowych.
