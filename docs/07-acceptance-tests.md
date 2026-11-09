# Kryteria akceptacji i katalog testów

## Domena (testy jednostkowe, obowiązkowe)
- **T-01**: 150 + 120 + 200 zł wydatków → konsumpcja 470 zł.
- **T-02**: +1000 Pekao, +1400 CA savings, +300 XTB jako wypływy → suma wypływów 3170 zł, konsumpcja nadal 470 zł, transfery 2700 zł.
- **T-03**: 30000 + 21000 = 51000; po październiku +1000 = 52000; po listopadowej *planowanej* +1000 = 53000 tylko w prognozie; rzeczywista wartość obligacji nie jest równa domyślnie 53000.
- **T-04**: miękkie 8600, cel 10000 → 86%, brakuje 1400; opcjonalny 1000 → stretch 11000, nie zrealizowany.
- **T-05**: transfer obligacyjny 1000 nie zwiększa wydatków i nie tworzy automatycznie `bond_purchase`.
- **T-06**: BLIK do XTB 300 nie zwiększa wydatków i nie tworzy automatycznie `etf_purchase`.
- **T-07**: abonament 120 zł rocznie: ekwiwalent 10 zł/mies., rzeczywiste 120 zł tylko w miesiącu wymagalności (z uwzględnieniem daty).
- **T-08**: oznaczenie wystąpienia subskrypcji jako zapłacone + powiązanie z operacją → w raporcie jeden wydatek.
- **T-09**: niedostępne saldo PPK/ETF → „Brak danych”, nie `0 zł`; pełna wartość majątku nie udaje kompletnej.
- **T-10**: PPK już potrącone z pensji netto → nie zmniejsza drugi raz gotówki.
- **T-11**: zmiana daty podwyżki aktualizuje tylko prognozę; przeszłe operacje bez zmian.
- **T-12**: dodanie celu rezerwującego 2000 zł z miękkich nie zwiększa majątku o 2000 zł.
- **T-13**: odwrócenie/reklasyfikacja transferu zachowuje spójność sald i historii.
- **T-14**: import/utworzenie dwa razy tego samego zdarzenia o tym samym kluczu idempotencji nie dubluje operacji.
- **T-15**: kalkulacje groszowe: brak błędów float, także przy 0,01 i 999999,99.

## UI i jakościowe
- **U-01**: wypłaty, transfery i wydatki mają odrębne etykiety, nie tylko kolory.
- **U-02**: przy długich kwotach oraz Dynamic Type brak ucinania wartości istotnych.
- **U-03**: VoiceOver czyta cel, postęp i kwotę brakującą (nie tylko „86 procent”).
- **U-04**: widoki empty, bez ETF/PPK, bez celów i bez historii są użyteczne.
- **U-05**: Reduce Motion nie ukrywa informacji i ogranicza animacje.
- **U-06**: bez internetu wszystkie funkcje MVP są dostępne.
- **U-07**: listy scrollują płynnie; efekt glass nie blokuje kliknięć, nie zasłania treści.
- **U-08**: planowane 1000 obligacje nie wygląda jak potwierdzone 1000.

## Definition of Done
1. Kod typowany, testy domenowe + regresyjne zielone (albo jawnie napisane, czego nie uruchomiono).
2. Jeden screenshot/ocena wizualna na iPhone i ciemnym motywie, ocena safe areas.
3. Zaktualizowane dokumenty, jeśli zmieniła się semantyka lub decyzja.
4. Bez hardcoded tajnych danych i bez sztucznych sald przedstawianych jako rzeczywiste.
