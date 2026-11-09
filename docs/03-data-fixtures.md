# Fakty i fixture'y dla interfejsu — stan 2026-11-09

## Zasada statusów
`confirmed` = wyraźnie podana jako faktyczna; `planned` = zamiar, ale brak potwierdzenia przelewu; `model` = scenariusz; `illustrative` = sztuczny przykład UI. Nie zamieniaj statusów.

| Dane | Wartość | Status | Uwagi |
|---|---:|---|---|
| Pierwszy transfer na obligacje we wrześniu | 30 000 zł | reported | Nie utożsamiać automatycznie z zakupem obligacji |
| Drugi transfer na obligacje we wrześniu | 21 000 zł | reported | Razem 51 000 zł początkowej alokacji |
| Początkowa alokacja na obligacje | **51 000 zł** | confirmed allocation | Nie 52 000 zł; nie sumować jej dodatkowo z transferami |
| Październik: dodatkowa wpłata | 1 000 zł | reported | Nie zgaduj serii obligacji |
| Listopad: dodatkowa wpłata | 1 000 zł | planned | 53 000 zł łącznej alokacji PO wykonaniu listopadowej wpłaty |
| Przyszły standard wpłaty obligacyjnej | 1 500–2 000 zł/mies. | target | Elastyczny |
| Listopad: koszyk inwestycyjny | 300 zł | planned | Wpłata poprzez BLIK do XTB |
| Listopad: miękkie przed planowanym przelewem | 8 600 zł | reported | Wypłata otrzymana 9 XI; wartość 8600 nie jest saldem CA24 |
| Listopad: przelew do miękkich | 1 400 zł | planned | Cel 10 000 zł |
| Listopad: dodatkowa wpłata do miękkich | 1 000 zł | optional | Cel rozciągnięty do 11 000 zł na grudzień |
| Model po podwyżce: obligacje | 3 250 zł/mies. | model | Scenariusz optymistyczny |
| Model po podwyżce: koszyk | 600 zł/mies. | model | Scenariusz optymistyczny |
| Podział koszyka | 80% ETF / 20% akcje | model | Przy 300 zł to 240 + 60; nie potwierdza zakupu |

## Wyliczenia fixture'ów
- 30 000 + 21 000 = **51 000 zł** (pierwotna alokacja).
- 51 000 + 1 000 (październik) = **52 000 zł** (podana alokacja do końca października, bez wyceny).
- 52 000 + 1 000 (plan na listopad) = **53 000 zł** (warunkowe po wpłacie).
- 8 600 / 10 000 = **86%** celu miękkich; brakujące 1 400 zł.
- Przykład klasyfikacji (CA24): wypływy 3 170 zł, z czego konsumpcja 470 zł, transfery 2 700 zł. To **illustrative**, nie rzeczywista historia.

## Przykłady zakupów (historyczne, niepotwierdzone obowiązki)
Apple Watch ~2000; PS5+GTA VI ~3900; Londyn ~1000; prezenty ~1000; Sylwester ~2500–3000; telefon ~6000–7000; komputer ~6000–7000 (PLN). Używaj tylko jako `illustrative` albo `planned` po potwierdzeniu.

## Pułapka z briefu Stitch
Stitch proponuje „nienaruszalną poduszkę 5 000 zł / wolne 3 600 zł”. **To tylko kompozycja wizualna, NIE potwierdzona polityka oszczędnościowa.** Jeśli widok ma używać takiego podziału, musi być opcjonalną funkcją z konfigurowalną wartością. Na ekranach produkcyjnych nie wymyślaj poduszki 5000 zł.

## Brak danych
Brak dokładnego salda PPK, wyceny ETF, aktualnego rachunku CA24, faktycznego wykonania listopadowych wpłat, aktualnego oprocentowania/serii obligacji. Renderuj jako „Nie podano”, a nie zero.
