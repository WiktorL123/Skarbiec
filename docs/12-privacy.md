# Prywatność i niezawodność — MVP

- Offline-first, bez serwera, bez obowiązkowego konta, bez analityki przesyłającej finanse do sieci.
- SQLite trzyma poufne kwoty lokalnie. Zadbaj o ochronę urządzenia i jawne ostrzeżenie, że utrata telefonu bez kopii oznacza utratę danych aplikacji.
- Eksport/backup jako cel MVP: bezpieczne udostępnianie pliku, jednoznaczna data kopii, import z walidacją formatu i migracji, ręczne potwierdzenie nadpisania.
- W testach i screenshotach korzystaj z jawnie oznaczonych fixture'ów; nie publikuj rzeczywistych danych kont ani IBAN-ów.
- Natywne logi nie powinny wypisywać pełnej historii i sald. Wyłącz debugowanie danych w buildzie Release.
- Przy przyszłym AIS: osobny ADR, backend przechowuje RSA, urządzenie musi być autoryzowane, nie wystawiaj publicznego endpointu do czytania historii; nie dodawaj API do MVP.
