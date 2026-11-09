# Workflow agentów — atomic tasks, bez sprintów

## Hierarchia
**Milestone → Epic → Story/rezultat → Task.** Każdy plik `docs/backlog/.../<ID>-<nazwa>.md` jest pojedynczym taskiem. Pole `Story / rezultat` opisuje wartość dla użytkownika, a task jej ograniczony, implementowalny wycinek. Checklisty w tasku nie tworzą kolejnego poziomu hierarchii.

## Stany i właściciel akceptacji
`Backlog → Ready → In Progress → Review → Done` oraz `Blocked`.
- **Ready:** zależności spełnione, wynik jednoznaczny, Scope/Out of scope i kryteria weryfikowalne.
- **In Progress:** agent pracuje nad jednym, wskazanym ID.
- **Review:** agent przedstawił kod i faktycznie wykonane testy. To maksymalny status, który agent ustawia samodzielnie.
- **Done:** dopiero po akceptacji przez użytkownika; agent nie przechodzi automatycznie dalej.
- **Blocked:** brakuje decyzji lub zależności; podaj dokładny powód i propozycję odblokowania.

## Definition of Ready
- Jedna samodzielnie weryfikowalna zmiana; zależności nie są zablokowane.
- Znane powiązane dokumenty i invarianty finansowe.
- Zakres/wyłączenia oraz 3–7 sensownych kryteriów; jeśli task zbyt szeroki, podziel przed implementacją.
- Brak nieuzgodnionej decyzji domenowej, która jest konieczna do startu.

## Definition of Done (potwierdza użytkownik)
- Kryteria akceptacji spełnione, brak regresji domenowej i niepowiązanych zmian.
- Typecheck/lint/testy adekwatne do zmiany, wraz z jawnie zgłoszonymi ograniczeniami.
- Migracje bez utraty danych, gdy task zmienia schemat.
- Raport z handoff oraz ewentualna aktualizacja dokumentów/ADR, tylko gdy wymagana.
- Akceptacja człowieka po review.

## Role (jeden agent lub kilka)
1. **Domain Guardian** (`skills/domain-guardian`): invarianty, fixture'y, interpretacja kwot.
2. **iOS UI** (`skills/ios-ui`): RN, Stitch tokens, accessibility i stany UI.
3. **Feature Builder** (`skills/feature-builder`): implementacja bieżącego taska i testy.
4. **QA Reviewer** (`skills/qa-reviewer`): niezależne sprawdzenie acceptance criteria, rekomendacja PASS/FAIL/BLOCKED.

## Interactive Planning Gate — decyzje przed implementacją
- Task deklaruje `Interactive Planning Gate: required | optional | none` (gdy brak pola, domyślnie `optional`).
- `required`: przed jakimikolwiek zmianami plików lub instalacją pakietów przeprowadź dialog według `skills/interactive-planning/SKILL.md`, następnie podaj plan i **poczekaj na osobną, wyraźną zgodę**.
- Pytania prowadź w małych rundach, z rekomendacją; nie zastępuj dialogu arbitralnymi domysłami. Nie pytaj ponownie o zaakceptowane decyzje.
- Zatwierdzenie planu nie jest akceptacją implementacji; ta nadal kończy się na `Review`.
- Zatwierdzone wybory techniczne proponuj do `docs/12-implementation-decisions.md`; retrospektywy nadal do `PROGRESS.md`, po osobnej akceptacji.

## Cykl jednego taska
1. Przeczytaj `PROGRESS.md`, sprawdź rzeczywisty stan kodu i otwórz dokładnie jeden task z `docs/09-backlog.md`. Sprawdź zależności i Definition of Ready.
2. Przed zmianami podaj: `Goal`, `Docs`, `Invariants`, `Files`, `Out of scope`, `Tests`, `Unknowns`.
3. Jeśli obowiązuje Interactive Planning Gate, przeprowadź ankietę i uzyskaj zgodę na plan. Następnie wykonaj najmniejszy spójny zakres. Nie dopisuj funkcji „przy okazji”.
4. Uruchom testy, wykonaj samoocenę; QA może wykonać review.
5. Zgłoś `Changed`, `Decisions`, `Tests actually run`, `Screens verified`, `Known limitations`, `Docs changed` i status `Review`. **Dodaj sekcję `Proposed PROGRESS.md entry` z gotowym, krótkim wpisem retrospektywnym.**
6. **Nie edytuj `PROGRESS.md` na etapie Review.** Użytkownik może zatwierdzić wpis, poprawić go lub odrzucić niezależnie od oceny kodu.
7. Dopiero po wyraźnej akceptacji retrospektywy dopisz zaakceptowaną wersję do `PROGRESS.md`. Status `Done` nadaj tylko po odrębnej akceptacji implementacji.
8. Czekaj na osobną zgodę, zanim przejdziesz do innego ID.

## Gdy task jest za duży
Nie implementuj połowy bez zgody. Zaproponuj podział na kilka ID z osobnym rezultatem, kryteriami i zależnościami. Utrzymaj obecną domenę. Nie rozdrabniaj sztucznie według plików ani minut.

## Przykład wywołania
„Zrealizuj tylko `B01.1` z `docs/backlog/`. Przeczytaj `AGENTS.md`, wskazany plik taska i dokumenty z jego sekcji. Nie rób `B01.2`. Sprawdź kryteria, przetestuj i oddaj do Review.”

## Konflikty
Najnowsza decyzja użytkownika > dokumenty domenowe > product/UX > style Stitch. Dane nieznane oznacz jako nieznane. Konieczną nową decyzję oznacz `proposed` w ADR i zgłoś, zamiast zgadywać.

## Protokół retrospektywy / PROGRESS.md
- `PROGRESS.md` to **zatwierdzona pamięć operacyjna** (co zrobiono, co sprawdzono, czego się nauczono, co pozostaje otwarte). Nie zastępuje backlogu, ADR ani domeny.
- Agent zawsze czyta go na początku sesji, ale zestawia z rzeczywistym stanem plików.
- Przy oddaniu każdego taska do Review agent proponuje wpis według szablonu w `PROGRESS.md`: data, ID, rezultat, testy, decyzje, wnioski, ryzyka, proponowany następny krok.
- **Dwa niezależne zatwierdzenia:** akceptacja implementacji (`Done`) i akceptacja treści retrospektywy (zapis). Użytkownik może zaakceptować jedno, a drugie odesłać do korekty.
- Bez zatwierdzenia **nie dopisuj** notatki i nie zmieniaj historii. Po zgodzie nie dopisuj więcej niż zaakceptowano.
- Nowy trwały standard lub zmiana decyzji → zaproponuj osobną aktualizację dokumentu źródłowego/ADR, nie tylko wpis retrospektywy.
- Jeśli użytkownik odrzuci wpis, nie dodawaj go; jeśli poprosi o poprawkę, przedstaw zrewidowany tekst do ponownej akceptacji.
- Nie twórz retrospektyw „na zapas” dla tasków, których nie zrealizowano.
