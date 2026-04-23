# Plan integracji CMS – strona `/domki`

## Typ danych

```ts
type Data = {
  houses: Accommodation[];
  rooms: Accommodation[];
};
```

> **Uwaga:** Oba pola to tablice (`Accommodation[]`), nie pojedyncze obiekty.
> `houses` i `rooms` trzymamy razem w jednym pliku db.json – jeden wywołanie GET, jeden POST.
> Strona `/domki` używa tylko `houses`, ale CMS może zarządzać oboma w jednym widoku.

Typ `Accommodation` (istniejący, nie zmieniamy):

```ts
interface Accommodation {
  id: string;
  name: string;
  type: "domek" | "pokoj";
  image: string;       // zdjęcie główne (thumbnail)
  images: string[];    // galeria – wszystkie zdjęcia
  description: string;
  capacity: string;
  bedrooms: number | string;
  size: number;
  amenities: string[];
  features?: string[];
}
```

---

## Endpoint

Tak samo jak dla strony `/hello`:

```
https://na-wzgorzu.pl/api.php
```

---

## Pobieranie danych (GET) – strona `/domki`

Strona `/domki` ([src/app/domki/page.tsx](../src/app/domki/page.tsx)) jest teraz **serwerowym komponentem** i importuje dane statycznie z `houses.ts`. Po integracji z API powinna pobierać dane przez `fetch` (server-side, np. w `async` komponencie lub `generateStaticParams`).

### Wzorzec pobierania (server component)

```ts
async function getAccommodations(): Promise<Data> {
  const res = await fetch("https://na-wzgorzu.pl/api.php", {
    next: { revalidate: 60 }, // ISR – odświeżaj co 60 s
  });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}
```

Strona używa tylko `data.houses`, pokoje (`data.rooms`) byłyby używane na hipotetycznej stronie `/pokoje`.

---

## Zapis danych (POST) – strona `/cms`

Analogicznie do istniejącej strony `/cms` ([src/app/cms/page.tsx](../src/app/cms/page.tsx)).

### Wzorzec zapisu

```ts
const handleSave = async () => {
  setSaving(true);
  try {
    await fetch("https://na-wzgorzu.pl/api.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data), // cały obiekt Data
    });
  } catch (err) {
    console.error(err);
  } finally {
    setSaving(false);
  }
};
```

Serwer PHP zapisuje cały obiekt `Data` (z `houses` i `rooms`) do db.json.

---

## Struktura db.json

Lokalny plik `public/db.json` rozszerzyć o klucze `houses` i `rooms`. Serwer produkcyjny utrzymuje własną kopię.

### Struktura

```json
{
  "houses": [
    {
      "id": "1",
      "name": "Domki piętrowe 5-7 osobowe",
      "type": "domek",
      "image": "/5-house/domki_nad_jeziorem1.jpg",
      "images": ["..."],
      "description": "...",
      "capacity": "5 (max 7)",
      "bedrooms": "2 sypialnie + salon",
      "size": 60,
      "amenities": ["..."]
    }
  ],
  "rooms": [
    {
      "id": "1",
      "name": "Pokoje 3 osobowe z tarasem",
      "type": "pokoj",
      "image": "/3-room-t/pok_13.jpg",
      "images": ["..."],
      "description": "...",
      "capacity": "3",
      "bedrooms": 1,
      "size": 20,
      "amenities": ["..."]
    }
  ]
}
```

---

## Logika formularza CMS

Dane są bardziej złożone niż w `/cms` – każdy `Accommodation` ma pola tablicowe (`images`, `amenities`).

### Renderowanie pól

| Pole | Komponent |
|------|-----------|
| `name`, `description`, `capacity`, `size`, `image` | `<input type="text">` lub `<textarea>` |
| `bedrooms` | `<input type="text">` (może być liczba lub opis) |
| `type` | `<select>` z opcjami `domek` / `pokoj` |
| `images` | Lista edytowalnych `<input>` z przyciskami dodaj / usuń |
| `amenities` | Lista edytowalnych `<input>` z przyciskami dodaj / usuń |

### Operacje na listach (houses / rooms)

- **Edycja** istniejącego elementu – edycja in-place po `id`
- **Dodanie** nowego – `[...prev, newItem]` z wygenerowanym `id`
- **Usunięcie** – `filter(item => item.id !== id)`

Zapis zawsze wysyła **cały** obiekt `Data` (nie delta).

---

## Stany CMS

Tak samo jak `/cms`:

- **loading** – pobieranie danych z API
- **saving** – trwa POST, przycisk Save zablokowany (`disabled`)
- **error** – komunikat błędu
- **data** – formularz gotowy do edycji

---

## Podsumowanie przepływu danych

```
Serwer (api.php / db.json)
        │
        ▼  GET
  /domki page  ──→  wyświetla houses (AccommodationList)

        ▼  GET
  /cms page    ──→  formularz edycji houses + rooms
        │
        ▼  POST (JSON: { houses: [...], rooms: [...] })
  Serwer (api.php)  ──→  zapisuje zmiany do db.json
        │
        ▼
  /domki page  ──→  pokazuje zaktualizowane domki
```
