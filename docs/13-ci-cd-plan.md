# Skarbiec — plan CI/CD i artefaktów (proposal, bez workflow YAML)

**Status:** PROPOSAL — do omówienia z użytkownikiem, nie do automatycznej implementacji.  
**Właściciel decyzji:** użytkownik.  
**Zakres:** prywatna aplikacja Expo/React Native iOS, bez App Store, rozwijana agentic programming.

## 1. Cel

Dostarczyć niewielkie, tanie i przewidywalne CI dla kodu oraz możliwość pobierania artefaktów z uruchomień GitHub Actions. Nie wprowadzać od razu podpisywania iOS ani wydawania aplikacji.

## 2. Istotne rozróżnienie artefaktów

| Artefakt | Jak powstaje | Zastosowanie | Czy zainstaluje się na fizycznym iPhonie? |
| --- | --- | --- | --- |
| Raport testów / coverage | test runner w CI | diagnostyka i regresja | Nie |
| Expo JS/export | `expo export` lub odpowiednik dopasowany do wybranego SDK | kontrola eksportu JS i assetów | **Nie** |
| iOS Simulator `.app` | build dla iOS Simulator, macOS/EAS | test na symulatorze | **Nie** |
| Podpisane `.ipa` na urządzenie | podpisany build iOS + provisioning | instalacja na zarejestrowanym iPhonie | **Tak, przy poprawnym podpisie i metodzie dystrybucji** |

Nie nazywaj eksportu JS „buildem iOS”. Nie obiecuj `.ipa` na GitHub-hosted Linux runner. Build simulatora nie działa na fizycznym iPhonie. Własne darmowe podpisywanie w Xcode może mieć krótką ważność i nie stanowi trwałej automatycznej dystrybucji CI.

## 3. Kolejność wdrażania

### CI-PLAN.1 — Quality checks (po A01.2)

**Wyzwalacze do uzgodnienia:** PR do `main`, push do `main`; opcjonalnie ręczne uruchomienie.  
**Runner:** `ubuntu-latest` jako opcja bazowa.  
**Kroki koncepcyjne:** checkout → setup Node z cache zależności → czysta instalacja przez zatwierdzony manager/lockfile → lint → typecheck → testy nieinteraktywne → raport.  
**Artefakty:** raport testów/coverage tylko jeśli generowany, szczególnie przy błędzie. Retencja np. 7–14 dni do zatwierdzenia.  
**Warunek wejścia:** rzeczywiste `package.json`/lockfile i działające skrypty z A01.1/A01.2. Nie tworzyć atrap testów ani fikcyjnych zielonych kroków.  
**Acceptance:** PR pokazuje jednoznaczny status check; poprawny projekt przechodzi, kontrolowana awaria testu blokuje check; raport zawiera komendy i wersje toolchainu.

### CI-PLAN.2 — Ręczne artefakty JS (po jakościowych checkach)

**Wyzwalacz:** `workflow_dispatch`, opcjonalnie tag wersji po zatwierdzeniu. Nie eksportować na każdym push bez potrzeby.  
**Kroki:** clean install → quality gate → weryfikacja konfiguracji Expo → eksport bundle/assets zgodny z SDK → archiwizacja.  
**Nazewnictwo:** `skarbiec-js-<commit-short-sha>` (przykładowe).  
**Metadane:** commit SHA, wersja Node/Expo, nazwa profilu, data, wynik.  
**Acceptance:** artefakt istnieje, da się pobrać, manifest pozwala zidentyfikować commit, a dokument jasno mówi, że nie jest instalowalnym `.ipa`.

### CI-PLAN.3 — Build iOS Simulator (opcjonalnie, później)

**Opcja A:** macOS runner z narzędziami Xcode (koszty i limity GitHub do sprawdzenia).  
**Opcja B:** EAS Build dla symulatora; może wymagać konta Expo, tokenów, profili i limitów usługi.  
**Wyzwalacz:** ręczny lub wybrane tagi, nie każdy commit.  
**Artefakt:** `.app` dla symulatora; ewentualnie screenshoty/logi z testu E2E.  
**Acceptance:** aplikacja uruchamia się bez Metro w trybie odpowiednim do testu iOS Simulator; wynik jest reproducible i ma opis kosztów.

### CI-PLAN.4 — Podpisana instalacja na fizycznym iPhonie (odrębna decyzja)

Wykonać dopiero przed prywatną dystrybucją i po wyborze metody: lokalny Xcode, EAS Build z podpisywaniem albo pipeline macOS. Potrzebne są decyzje o Apple Developer Program, certyfikatach, provisioning profiles, rejestracji urządzeń, sposobie instalacji i rotacji credentiali. Żadnych sekretów w repo i uploadowanych artefaktach. Weryfikacja `.ipa` obejmuje poprawne podpisanie dla docelowego iPhone'a; sam plik `.ipa` nie gwarantuje instalacji.

## 4. Ankieta Interactive Planning Gate

Agent zadaje pytania w krótkich rundach i podaje rekomendację, bez ponownego pytania o wcześniej zatwierdzone wybory:

1. Repozytorium publiczne czy prywatne? Plan i limity GitHub Actions zależą od konfiguracji konta.
2. Czy kontrolujemy PR + `main`, czy tylko push do `main`? Czy wymagany status check blokuje merge?
3. Jaki package manager, wersja Node, lockfile i skrypty zostały zatwierdzone podczas A01.1/A01.2?
4. Które testy i coverage są faktycznie dostępne? Czy upload raportów tylko przy błędach czy zawsze?
5. Czy chcemy artefakt JS już teraz, a jeśli tak, czy tylko manualny?
6. Czy CI ma obejmować symulator iOS teraz czy dopiero po implementacji UI/E2E?
7. Jakie są limity kosztów i retencja artefaktów? Jak powiadamiać o porażkach?
8. Czy na obecnym etapie **świadomie odkładamy podpisane `.ipa`** i obsługę Apple credentials?

Po odpowiedziach: przedstawić diagram przepływu, minimalne permissions, koszty/ryzyka, dokładne workflow do utworzenia, Definition of Done i rollback. **Czekać na akceptację; nie generować YAML wcześniej.**

## 5. Bezpieczeństwo i deterministyczność

- GitHub Actions `permissions` minimalne; ostrożnie z PR z forków, `pull_request_target`, sekretami i kodem niezaufanym.
- Pinning akcji do zatwierdzonych wersji lub commit SHA, sprawdzenie aktualnych wersji w dniu implementacji.
- Zatwierdzony lockfile i `npm ci`/odpowiednik. Preferuj cache paczek, nie `node_modules` jako artefakt.
- Nie publikuj `.env`, prywatnych danych, baz SQLite, kluczy, certyfikatów ani nieszyfrowanych danych użytkownika.
- CI nie aktualizuje samodzielnie `PROGRESS.md` ani statusu taska. Review i zgoda użytkownika są nadal wymagane.
- PR workflow nie wykonuje automatycznego deployu ani nie podpisuje buildów.
- Oddziel raporty testów od artefaktów produktu; nazwy, SHA i retencja muszą być jasne.

## 6. Zależności i sposób dodania do backlogu

Nie zmieniaj istniejącego A01.1 i A01.2. Po ich akceptacji agent powinien **zaproponować** dwa odrębne taski z małym zakresem:

- `CI01.1` — GitHub Actions PR/push checks, po A01.2, obowiązkowa ankieta.
- `CI01.2` — ręczny eksport JS + upload artefaktu, po CI01.1, obowiązkowa ankieta.

Później osobne propozycje `CI02.1` (simulator) i `CI02.2` (podpisana dystrybucja). **ID są robocze, nie zadaniami Ready ani istniejącymi elementami backlogu.** Nie wykonywać ich bez zatwierdzenia i dopisania do indeksu backlogu.

## 7. Referencje do sprawdzenia przy implementacji

- GitHub Actions artifacts: https://docs.github.com/en/actions/tutorials/store-and-share-data
- Expo unit testing: https://docs.expo.dev/develop/unit-testing/
- Expo iOS simulator builds: https://docs.expo.dev/build-reference/simulators/
- Expo iOS device builds: https://docs.expo.dev/tutorial/eas/ios-development-build-for-devices/
- EAS Build: https://docs.expo.dev/build/

> Dokument celowo **nie** zawiera `.github/workflows/*.yml`. Pipeline ma powstać dopiero po zaakceptowaniu wyborów i gdy projekt rzeczywiście ma komendy, które można uruchomić w CI.
