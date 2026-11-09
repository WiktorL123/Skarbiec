# Product brief — Skarbiec

## Problem i obietnica produktu
Standardowy bankowy raport wydatków pokazuje np. 3 170 zł wypływów, choć 2 700 zł zostało przesunięte do oszczędności i inwestycji. Skarbiec pokazuje **faktyczne wydatki konsumpcyjne** i zrozumiały postęp majątku oraz planu finansowego.

## Użytkownik i ton
Jedna osoba, własny iPhone, prywatne dane, PLN, polski interfejs. UX ma być spokojny, kompetentny, przejrzysty, bez moralizowania i nadmiernej grywalizacji. Wydanie MVP jest w pełni offline.

## Pięć zakładek
1. **Pulpit:** miękkie jako ważna karta, suma z zaznaczeniem płynności, twarde, miesiąc, cel, akcja „Dodaj”.
2. **Oszczędności:** miękkie, obligacje, ETF/akcje, PPK, historia i wkłady.
3. **Plan:** miesiąc, spodziewane i rzeczywiste wpływy, stałe koszty, jednorazowe wydatki, odkładanie, plan vs wykonanie.
4. **Cele:** zakupy z miękkich, wkład własny, horyzont, scenariusze.
5. **Historia:** typy transakcji, filtry, realna konsumpcja vs transfery, edycja.

## MVP
Ręczny zapis i edycja operacji; ręczne salda i wyceny; tworzenie subskrypcji i harmonogramów; prognozy z edytowalną podwyżką; cele; podsumowanie miesiąca; bez logowania i sync online. Proponowana funkcja bezpieczeństwa: eksport/backup pliku w systemowym udostępnianiu.

## Po MVP, WYRAŹNIE poza zakresem
Enable Banking AIS (tylko CA24), Azure Function do JWT, synchronizacja, kategoryzacja z danych banku, deep linking autoryzacji. Nie dodawaj do MVP ukrytych zależności od internetu.

## Podstawowe przepływy
- Wypłata: wprowadź przychód → zobacz stałe koszty → zaplanuj obligacje/ETF/miękkie → potwierdź wykonane przelewy.
- Subskrypcja: utwórz harmonogram → widoczna w planie → oznacz pojedynczą płatność wykonaną.
- Cel zakupowy: zaplanuj wydatek z miękkich → zobacz skutki w prognozie → wykonaj albo przesuń.
- Podwyżka: zmień datę i dochód w wariancie optymistycznym → porównaj warianty, nie zmieniaj historii.
