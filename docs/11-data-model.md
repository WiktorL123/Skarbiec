# Proponowany model danych (kontrakt, nie finalny schemat SQL)

## Value objects i encje
- `Money { minorUnits: integer, currency: 'PLN' }`. Walidacja zakresu, żadnych kwot `number` float do sumowania złotówek.
- `AccountBucket`: `MAIN_CA24?`, `SOFT_CA`, `BONDS_FUNDING`, `XTB_CASH`, `BONDS_ASSETS`, `ETF_ASSETS`, `STOCK_ASSETS`, `PPK`. `MAIN_CA24?` opcjonalny w MVP, jeśli pełne saldo głównego konta nie jest prowadzone.
- `Operation { id, date, kind, amountMinor, sourceBucket?, destinationBucket?, category?, status, description, recurrenceOccurrenceId?, linkedOperationId?, createdAt, updatedAt }`.
- `OperationKind`: `INCOME`, `CONSUMPTION`, `TRANSFER`, `BROKER_DEPOSIT`, `BOND_PURCHASE`, `INVESTMENT_PURCHASE`, `REFUND`, `BALANCE_ADJUSTMENT`.
- `OperationStatus`: `PLANNED`, `POSTED`, `CANCELLED`; nie zmieniaj automatycznie na POSTED przy nadejściu daty.
- `Valuation { assetBucket, date, valueMinor, source: MANUAL }`. Wycena `null` znaczy nieznana, nie 0.
- `BalanceSnapshot { bucket, date, valueMinor, reason, confirmed }` dla początkowych sald i rekonsyliacji. Nie sumuj snapshotu drugi raz z historią sprzed snapshotu.
- `RecurringRule { id, name, amountMinor, frequency, anchorDate, nextDueDate?, endDate?, category, active }`.
- `RecurringOccurrence { id, ruleId, dueDate, status, actualOperationId? }`, unikalne `(ruleId, dueDate)`; statusy `EXPECTED`, `PAID`, `SKIPPED`.
- `Goal { id, name, targetMinor, targetDate?, fundingBucket, reservedMinor?, status }`. Rezerwacja jest alokacją, nie nowym zasobem.
- `Scenario { id, kind, effectiveDate, netIncomeMinor?, bondContributionMinor?, investmentContributionMinor?, softContributionMinor?, expensesOverrides?, assumptions }`.

## Kluczowe niezmienniki
1. Tylko `POSTED CONSUMPTION` (oraz odpowiednio powiązane rzeczywiste koszty stałe) liczą się do wydatków konsumpcyjnych.
2. `TRANSFER` i `BROKER_DEPOSIT` nie liczą się jako konsumpcja; źródło i cel mają sens ekonomiczny.
3. `BOND_PURCHASE` i `INVESTMENT_PURCHASE` to zamiana klasy aktywa, nie nowy kapitał/wydatek.
4. Jedno wystąpienie subskrypcji wskazuje maksymalnie jedną rzeczywistą operację. Kwota w harmonogramie to prognoza, nie księgowanie.
5. Historyczne wpisy są trwałe; scenariusze nie zapisują automatycznych `POSTED`.
6. Nie mieszaj PLN i innych walut bez jawnego przeliczenia; MVP może ograniczać się do PLN.

## SQL/migracje
Dodaj ograniczenia unikalności, indeks po `date` i `status`, FK pomiędzy occurrence a operation. Przechowuj `schema_version`. Zalecany test: migracja v1→v2 zachowuje operacje i salda. Konkretny schemat i API repozytoriów do ustalenia w A02.
