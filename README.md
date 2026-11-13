# Skarbiec 🏦

**Skarbiec** to prywatna aplikacja mobilna na iOS do świadomego planowania oszczędności, kontrolowania wydatków i realizacji celów finansowych. Powstaje w podejściu **agentic programming**: rozwój jest podzielony na niewielkie zadania, implementowane z pomocą agentów AI, testowane i zatwierdzane przez autora projektu.

> **Status:** projekt w przygotowaniu, przed implementacją MVP. To repozytorium zawiera na razie specyfikację produktu, reguły domenowe, założenia UI oraz backlog. Opisane poniżej funkcjonalności są **planowane**, a nie gotowe.

## Po co Skarbiec?

Typowe zestawienia bankowe potrafią zaliczać przelewy na własne oszczędności do „wydatków”. Skarbiec rozdziela **konsumpcję** od **przenoszenia własnego kapitału**, tak aby łatwo było odpowiedzieć na pytania: ile rzeczywiście wydałem, ile odłożyłem i czy mogę sobie pozwolić na kolejny zakup?

## Główne założenia

- **Miękkie oszczędności:** elastyczne środki na podróże, elektronikę, prezenty i nieprzewidziane sytuacje.
- **Twarde oszczędności:** długoterminowy kapitał, z odrębną ewidencją obligacji, inwestycji ETF/akcji i PPK.
- **Rzeczywiste wydatki:** przelew na własny rachunek oszczędnościowy, zasilenie rachunku obligacyjnego lub XTB nie stają się automatycznie wydatkiem konsumpcyjnym.
- **Plany miesięczne:** zaplanowane i wykonane wpłaty, wpływy, budżet i podsumowanie miesiąca.
- **Stałe wydatki:** subskrypcje i cykliczne opłaty, z terminami oraz rozróżnieniem kosztu planowanego i faktycznie opłaconego.
- **Cele finansowe:** od mniejszych zakupów po wkład własny do mieszkania.
- **Scenariusze:** prognozy zależne m.in. od wysokości przyszłych wpłat i potencjalnych podwyżek wynagrodzenia.

## MVP i technologia

Pierwsza wersja ma działać **offline-first**, bez logowania i bez obowiązkowego połączenia z bankiem. Dane będą wprowadzane i przechowywane lokalnie.

| Obszar | Założenie |
| --- | --- |
| Platforma | iOS, aplikacja iPhone |
| Framework | React Native + Expo |
| Język | TypeScript |
| Dane | SQLite na urządzeniu |
| UI | Ciemny motyw inspirowany koncepcją Liquid Glass, na podstawie projektu Google Stitch |
| Integracja bankowa | Poza MVP, ewentualna późniejsza integracja AIS |
| Dystrybucja | Prywatny build na urządzenie, bez planowanej publikacji w App Store |

Szczegóły bibliotek i struktury projektu zostaną zatwierdzone w ramach interaktywnego etapu inicjalizacji.

## Sposób realizacji

Projekt wykorzystuje **agentic programming**, ale decyzje o zakresie, architekturze i akceptacji zmian pozostają po stronie autora. Zadania są dzielone na małe, weryfikowalne części. Każde kończy się przeglądem implementacji i testów. Po zatwierdzeniu mogą zostać zapisane wnioski w dzienniku postępu.

Na początek powstanie szkielet aplikacji z ekranem **Hello World w jednej karcie Liquid Glass**, a następnie infrastruktura testów. Pełne ekrany i funkcje finansowe będą wdrażane w następnych krokach.

## Dokumentacja projektu

- [Wizja produktu](docs/01-product.md)
- [Model domenowy](docs/02-domain.md)
- [Design system](docs/04-design-system.md)
- [Architektura](docs/06-architecture.md)
- [Backlog](docs/09-backlog.md)
- [Plan CI/CD i artefaktów](docs/13-ci-cd-plan.md)

Instrukcje dla agentów i organizacja pakietu znajdują się w [przewodniku dla agentów](docs/00-agent-kit-guide.md) oraz w [`AGENTS.md`](AGENTS.md). Zapis postępu projektu: [`PROGRESS.md`](PROGRESS.md).

## Bezpieczeństwo i prywatność

Pierwsza wersja nie zakłada wysyłania historii finansowej na zewnętrzny serwer. Dane i kopie zapasowe wymagają świadomej ochrony; do repozytorium nie należy dodawać rzeczywistych wyciągów bankowych, prywatnych baz SQLite ani kluczy dostępowych. Przykłady w dokumentacji nie oznaczają dostępu do banku.

## Status wdrożenia

- [x] Specyfikacja domenowa i kierunek wizualny
- [x] Podział prac na epiki i małe zadania
- [ ] Inicjalizacja aplikacji i ekran Hello World
- [ ] Infrastruktura testów
- [ ] Funkcjonalności MVP
- [ ] Prywatny build iOS

---

*Projekt osobisty, rozwijany iteracyjnie.*
