# Uruchamianie lokalne — A01.1

## Środowisko

- Node.js 24 i npm 11 (środowisko implementacji: Node 24.19.0, npm 11.17.0).
- Expo SDK 58, Expo Router, TypeScript, NativeWind 4 i Tailwind 3.
- iPhone z Expo Go obsługującym SDK 58; urządzenie użytkownika: iOS 27.2.1.
- Windows uruchamia Metro; symulator iOS wymaga macOS i Xcode.

## Instalacja i start

W katalogu głównym repozytorium:

```powershell
npm ci
npm start
```

Na Windows z polityką blokującą skrypty PowerShell użyj `npm.cmd` zamiast `npm`.
Komputer i iPhone powinny być w tej samej sieci lokalnej. Zeskanuj kod QR
aparatem iPhone i otwórz aplikację w Expo Go. Zezwól Expo Go na dostęp do
sieci lokalnej; jeżeli Windows pyta o zaporę, udostępnij Metro tylko w zaufanej
sieci prywatnej. Nie zmieniaj globalnie polityki wykonywania skryptów.

Po zmianie Babel, Metro lub Tailwind uruchom `npm start -- --clear`.

Oczekiwany ekran: ciemne tło, jedna szklana karta i tekst `Hello World`.
Nie ma danych finansowych, logowania ani dodatkowych ekranów.

## Kontrole techniczne

```powershell
npm run typecheck
npm run lint
npx expo install --check
npx expo-doctor
npx expo export --platform ios
```

Eksport tworzy ignorowany katalog `dist/`. Wygenerowanie bundla potwierdza
kompilację JavaScript, ale nie zastępuje uruchomienia na iPhonie.
Framework testowy i testy komponentowe należą do A01.2.

## Ręczna weryfikacja iPhone

- Otwórz ekran i sprawdź jedną kartę oraz dosłowny tekst `Hello World`.
- Sprawdź pion i poziom: tekst oraz karta pozostają w safe area.
- Włącz większy tekst w ustawieniach dostępności. Tekst może zawijać się,
  karta rośnie, a ekran pozwala przewinąć zawartość.
- Włącz VoiceOver: odczytywany jest nagłówek; dekoracje nie są elementami nawigacji.
- Przełącz „Ogranicz przezroczystość” (Reduce Transparency): karta otrzymuje
  jednolite ciemne tło. Wyłącz opcję i wróć do aplikacji, aby sprawdzić blur.
- Włącz Reduce Motion: ekran jest statyczny, bez animacji zależnych od tej opcji.
- Przy jasnym wyglądzie systemu ekran nadal jest ciemny — to uzgodniony zakres A01.1.

Expo Go korzysta z Metro do pracy developerskiej. To nie jest build Release
do codziennego działania bez komputera; taki build należy do E02.1.

## Struktura

- `src/app/_layout.tsx`: wejście routingu i konfiguracja paska statusu.
- `src/app/index.tsx`: jedyny ekran.
- `src/ui/tokens.ts`: paleta Stitch, geometria i typografia; jedno źródło dla RN i Tailwind.
- `src/ui/HelloGlassCard.tsx`: karta tego ekranu, bez rozbudowanego API design systemu.
- `src/ui/useReducedTransparency.ts`: odczyt i obserwowanie preferencji dostępności.

Paleta ciemna jest wydzielona, by umożliwić późniejszy jasny motyw i tryb
systemowy. A01.1 nie zawiera przełącznika ani pozornej obsługi jasnego motywu.

## Wynik weryfikacji

Wyniki kontroli technicznych zostaną uzupełnione po ich wykonaniu.
Uruchomienie i ocena wizualna na fizycznym iPhonie: oczekuje na weryfikację użytkownika.
