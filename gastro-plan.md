# Iteracyjne Wdrożenie Treści Gastro Do CMS

## Summary

- Wdrożenie podzielić na małe kroki, żeby najpierw uporządkować treści w JSON, potem przenieść je do produkcyjnego `db.json`, następnie pobierać je z endpointu, a dopiero na końcu dodać edycję w CMS.
- Nie dodawać domyślnych danych w kodzie. Źródłem prawdy ma być JSON z prawidłowymi treściami.
- Nie zmieniać `api.php`, bo obecny endpoint już obsługuje odczyt i zapis całego `db.json`.

## Step 1: Lokalny JSON Dla Gastro

- Utworzyć lokalny plik JSON z treściami gastronomii, np. `src/data/gastro.json` albo `public/gastro.json`.
- Przenieść do niego wszystkie teksty z `src/components/Gastro.tsx`:
  - hero: tytuł i podtytuł
  - sekcja „Nasza Kuchnia”: tytuł i opis
  - godziny posiłków: nazwa i godzina
  - notatka pod godzinami posiłków
  - opcje wyżywienia: tytuł, opis i lista opcji
  - szczegóły posiłków: tytuł sekcji oraz lista tytuł + opis
  - CTA do cennika: tekst i link
  - tytuł galerii
  - diety specjalne: tytuł, opis, wyróżniony fragment i lista diet
- W `Gastro.tsx` zaimportować lokalny JSON i renderować teksty z tego pliku.
- Ikony, klasy CSS, animacje i układ zostają w komponencie.

## Step 2: Przeniesienie Danych Do `db.json`

- Dodać dane gastronomii jako nowe pole `gastro` w istniejącym `public/db.json`.
- Zachować istniejące pola `houses`, `rooms` i `reservationNotice`.
- Docelowy kształt danych `gastro` ma być taki sam jak w lokalnym pliku JSON, żeby migracja była prosta i bez mapowania.
- Po tym kroku lokalny JSON nadal może służyć tymczasowo jako referencja, ale docelowo przestanie być źródłem danych.

## Step 3: Pobieranie Gastro Z Endpointu

- Rozszerzyć typ `CmsData` o wymagane pole `gastro`.
- Zmienić `Gastro.tsx`, żeby pobierał dane z istniejącego `API_URL`.
- Z odpowiedzi endpointu używać `data.gastro` do renderowania strony.
- Na tym etapie usunąć import lokalnego JSON z `Gastro.tsx`, jeśli dane są już dostępne w `db.json`.
- Nie dodawać fallbacków z domyślną treścią. Brak `gastro` w JSON powinien być traktowany jako błąd danych do poprawienia.

## Step 4: Wyświetlanie Treści Z `db.json`

- Upewnić się, że wszystkie miejsca w `Gastro.tsx`, które wcześniej miały tekst na sztywno, korzystają z danych z `gastro`.
- Zachować obecne statyczne elementy nietekstowe:
  - listę zdjęć galerii
  - mapowanie ikon dla posiłków
  - komponent `GallerySection`
  - linkowanie przez `next/link`
- Strona `/gastronomia` ma wyglądać tak samo jak przed zmianą, ale treści mają pochodzić z `db.json`.

## Step 5: Edycja Gastro W CMS

- Dodać zakładkę `Gastronomia` w `src/app/cms/CmsClient.tsx`.
- Dodać formularz edycji danych `gastro`:
  - inputy dla krótkich tekstów
  - textarea dla dłuższych opisów
  - edytory list dla opcji wyżywienia i diet
  - edytor par `nazwa + godzina` dla godzin posiłków
  - edytor par `tytuł + opis` dla szczegółów posiłków
- Zapis zostaje taki sam jak obecnie: CMS wysyła cały obiekt JSON przez `POST` do `API_URL`.
- Nie dodawać osobnego endpointu ani osobnego pliku produkcyjnego dla gastronomii.

## Assumptions

- Pierwszym źródłem prawdy będzie lokalny JSON tylko na czas porządkowania treści.
- Docelowym źródłem prawdy będzie istniejący produkcyjny `db.json`.
- W tym etapie nie dodajemy edycji zdjęć galerii.
- Struktura sekcji strony gastronomii pozostaje stała; CMS zarządza treścią, nie layoutem.
