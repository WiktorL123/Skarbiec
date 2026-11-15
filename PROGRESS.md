# PROGRESS.md — Skarbiec

> Zatwierdzona pamięć operacyjna projektu. To **nie** jest backlog, dziennik każdej komendy ani źródło nadrzędne wobec wymagań domenowych.
> Aktualizacje proponowane przez agenta wymagają **wyraźnej akceptacji użytkownika** przed zapisaniem.

## Stan projektu
- **Ostatni zatwierdzony task:** A01.2 — Fundament testów jednostkowych i UI.
- **Bieżący etap:** Milestone A — Foundation.
- **Kolejny kandydat:** A01.3 — nawigacja pięciu zakładek (po akceptacji PR i osobnej zgodzie).
- **Ostatnia aktualizacja:** 2026-11-16, akceptacja A01.2.

> Wpisy powyżej są stanem początkowym dokumentacji, nie potwierdzeniem wykonania prac programistycznych. Po rozpoczęciu implementacji weryfikuj rzeczywisty kod i historię repozytorium.

## Zatwierdzone retrospektywy

### 2026-11-15 — A01.1: Bootstrap Expo i Hello World Liquid Glass
- **Status:** Done
- **Dostarczono:** Szkielet Expo SDK 58 z TypeScript, Expo Router, NativeWind oraz tokenami Stitch; pojedynczy ekran `Hello World` w karcie Liquid Glass z fallbackiem ograniczonej przezroczystości.
- **Zweryfikowano:** `npm run typecheck`, `npm run lint`, `npx expo install --check`, `npx expo-doctor` (20/20), `npx expo config --type public`, `git diff --check` — zakończone pomyślnie. Weryfikacja fizycznego iPhone'a, VoiceOver, Dynamic Type i Reduce Transparency pozostaje niewykonana.
- **Decyzje / ADR:** Ustalenia A01.1 zapisane w `docs/12-implementation-decisions.md`; powiązane ADR-y: ADR-001, ADR-004, ADR-006 i ADR-007.
- **Wnioski dla następnych zadań:** Testy jednostkowe i komponentowe należy skonfigurować osobno w A01.2. Nie dziedziczyć automatycznie decyzji testowych z A01.1.
- **Ryzyka / dług / blokery:** Brak ręcznej weryfikacji na iPhonie. Eksport iOS potwierdza bundle JavaScript, ale nie zastępuje builda Release.
- **Następny krok:** A01.2 — fundament testów jednostkowych i UI, po osobnej ankiecie Interactive Planning Gate.

### 2026-11-16 — A01.2: Fundament testów jednostkowych i UI
- **Status:** Done
- **Dostarczono:** Konfigurację Jest z `jest-expo`, React Native Testing Library, test ekranu `Hello World`, prosty test jednostkowy, raport coverage bez progu, konfigurację scenariusza Maestro oraz dokumentację testów.
- **Zweryfikowano:** `npm test` — 2/2; `npm run test:coverage` — 86,95% statements; `npm run typecheck`; `npm run lint`; `npx expo config --type public`; `git diff --check` — pomyślnie.
- **Decyzje / ADR:** Wybrano Jest, RNTL, Maestro oraz coverage informacyjne bez progu. E2E pozostaje przygotowane konfiguracyjnie, bez wykonania lokalnego.
- **Wnioski dla następnych zadań:** Przy testach NativeWind potrzebny jest izolowany mock JSX runtime. Testy RNTL w użytej wersji wymagają asynchronicznego `render`.
- **Ryzyka / dług / blokery:** Maestro nie jest zainstalowane lokalnie, więc `.maestro/hello-world.yaml` nie został wykonany. Instalacja zależności zgłosiła 28 podatności w drzewie npm; nie uruchamiano `npm audit fix`.
- **Następny krok:** A01.3 — nawigacja pięciu zakładek, po akceptacji PR i osobnej zgodzie na rozpoczęcie taska.

<!-- SZABLON NOWEGO WPISU (nie jest zatwierdzonym wpisem)
### YYYY-MM-DD — TASK_ID: Krótki tytuł
- **Status:** Done / Review (zgodny z rzeczywistą decyzją użytkownika)
- **Dostarczono:** faktycznie ukończone rezultaty i zmienione obszary
- **Zweryfikowano:** testy uruchomione i ich wynik; osobno niewykonane
- **Decyzje / ADR:** odsyłacze do docs/08-decisions.md, jeśli dotyczy
- **Wnioski dla następnych zadań:** 1–3 konkrety, bez ogólników
- **Ryzyka / dług / blokery:** otwarte sprawy z odnośnikami do backlogu
- **Następny krok:** proponowany task (nie automatyczna zgoda na jego implementację)
-->

## Zasady prowadzenia
1. Jeden zwięzły wpis po zaakceptowanej iteracji/tasku. Drobne szczegóły pozostają w commitach, PR i testach.
2. Nie wpisuj propozycji jako faktów. Każdy wpis musi odzwierciedlać rzeczywiście wykonane zmiany i testy.
3. Nie zmieniaj historii po cichu: korekty oznacz datą i powodem, zachowując ślad.
4. Trwałe reguły finansowe → `docs/02-domain.md`; architektura/ADR → `docs/08-decisions.md`; kolejne zadania → `docs/09-backlog.md` i `docs/backlog/`.
5. Retrospektywa nie zmienia zakresu kolejnego taska i nie nadaje automatycznie statusu `Done`.
6. W razie konfliktu aktualna, wyraźna decyzja użytkownika i dokumenty domenowe mają pierwszeństwo; zgłoś rozbieżność do wyjaśnienia.
7. Nie umieszczaj danych dostępowych, sekretów ani prywatnych danych bankowych w historii.
