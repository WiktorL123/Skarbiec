# Testy — A01.2

## Testy Jest

Projekt używa Jest z presetem `jest-expo` oraz React Native Testing Library.

```powershell
npm test
npm run test:watch
npm run test:coverage
```

Coverage jest raportowane informacyjnie w katalogu `coverage/` i nie ma
ustalonego progu blokującego. Testy przykładowe znajdują się w `test/`:

- `hello-world.test.tsx` sprawdza treść i rolę dostępności ekranu;
- `unit-example.test.ts` zawiera prosty test czystej funkcji testowej, bez
  wprowadzania logiki finansowej do produkcji.

Mocki `expo-blur`, `expo-linear-gradient` i runtime NativeWind są ograniczone
do środowiska testowego.

## E2E Maestro

Scenariusz znajduje się w `.maestro/hello-world.yaml` i sprawdza uruchomienie
aplikacji oraz widoczność `Hello World`.

```powershell
npm run test:e2e
```

Polecenie wymaga osobno zainstalowanego Maestro oraz uruchomionej aplikacji
z identyfikatorem `com.skarbiec.app` na symulatorze lub urządzeniu. W tej
iteracji Maestro nie było dostępne w środowisku agenta, dlatego scenariusz
został skonfigurowany, ale nie wykonany.

## Zakres i ograniczenia

Nie skonfigurowano jeszcze CI/CD ani testów domeny finansowej. Testy E2E nie
zastępują ręcznej weryfikacji na fizycznym iPhonie.
