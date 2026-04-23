# Plan implementacji strony `/cms`

## Cel

Strona `/cms` umożliwia edycję danych noclegów (`houses` i `rooms`) bez przebudowy strony.
Pobiera dane z `https://na-wzgorzu.pl/api.php` (GET), pozwala je edytować w formularzu
i zapisuje całość z powrotem (POST).

---

## Struktura plików

```
src/app/cms/
  page.tsx              ← server component, tylko renderuje <CmsClient />
  CmsClient.tsx         ← "use client", stan, fetch GET/POST, layout

src/components/cms/
  AccommodationForm.tsx ← formularz pojedynczego Accommodation
  StringListEditor.tsx  ← edytowalalna lista stringów (images, amenities)
```

---

## Typy danych

```ts
type Data = {
  houses: Accommodation[];
  rooms: Accommodation[];
};
```

`Accommodation` – istniejący interfejs z `@/components/Houses/types.ts`, bez zmian.

---

## Stany CmsClient

| Stan | Opis |
|------|------|
| `loading` | trwa GET, spinner |
| `data` | formularz gotowy do edycji |
| `saving` | trwa POST, przycisk Save zablokowany |
| `error` | komunikat błędu przy GET lub POST |

```ts
const [data, setData] = useState<Data | null>(null);
const [loading, setLoading] = useState(true);
const [saving, setSaving] = useState(false);
const [error, setError] = useState<string | null>(null);
```

---

## Layout CmsClient

```
┌─────────────────────────────────────────────┐
│  CMS – Noclegi            [Zapisz zmiany]   │
├──────────────┬──────────────────────────────┤
│  Tabs:       │                              │
│  Domki | Pokoje                             │
├──────────────┴──────────────────────────────┤
│  Lista kart (jedna karta = jeden Accommodation)
│  ┌──────────────────────────────────────┐   │
│  │  Nazwa, Typ, Pojemność, Sypialnie    │   │
│  │  Rozmiar, Zdjęcie główne             │   │
│  │  Opis (textarea)                     │   │
│  │  Galeria (StringListEditor)          │   │
│  │  Wyposażenie (StringListEditor)      │   │
│  │                        [Usuń domek]  │   │
│  └──────────────────────────────────────┘   │
│                                             │
│  [+ Dodaj domek]                            │
└─────────────────────────────────────────────┘
```

---

## AccommodationForm

Formularz edycji in-place jednego `Accommodation`. Wywołuje `onChange(updated)` przy każdej zmianie.

| Pole | Komponent |
|------|-----------|
| `name` | `<Input>` |
| `description` | `<Textarea>` |
| `type` | `<Select>` (domek / pokoj) |
| `capacity` | `<Input>` |
| `bedrooms` | `<Input>` |
| `size` | `<Input type="number">` |
| `image` | `<Input>` (ścieżka do pliku) |
| `images` | `<StringListEditor>` |
| `amenities` | `<StringListEditor>` |

Props:
```ts
type Props = {
  accommodation: Accommodation;
  onChange: (updated: Accommodation) => void;
  onRemove: () => void;
};
```

---

## StringListEditor

Reużywalny komponent do edycji `string[]` z przyciskami dodaj / usuń.

```ts
type Props = {
  label: string;
  items: string[];
  onChange: (updated: string[]) => void;
};
```

Renderuje listę `<Input>` z przyciskiem usuń przy każdym oraz `[+ Dodaj]` na dole.

---

## Operacje na listach

```ts
// Edycja pola w elemencie
const updateItem = (list: "houses" | "rooms", id: string, updated: Accommodation) =>
  setData(prev => ({
    ...prev!,
    [list]: prev![list].map(item => item.id === id ? updated : item),
  }));

// Dodanie nowego elementu
const addItem = (list: "houses" | "rooms") =>
  setData(prev => ({
    ...prev!,
    [list]: [...prev![list], { id: Date.now().toString(), name: "", type: list === "houses" ? "domek" : "pokoj", image: "", images: [], description: "", capacity: "", bedrooms: "", size: 0, amenities: [] }],
  }));

// Usunięcie elementu
const removeItem = (list: "houses" | "rooms", id: string) =>
  setData(prev => ({
    ...prev!,
    [list]: prev![list].filter(item => item.id !== id),
  }));
```

---

## GET – pobieranie danych

```ts
useEffect(() => {
  fetch("https://na-wzgorzu.pl/api.php")
    .then(res => { if (!res.ok) throw new Error(); return res.json() as Promise<Data>; })
    .then(setData)
    .catch(() => setError("Nie udało się pobrać danych"))
    .finally(() => setLoading(false));
}, []);
```

---

## POST – zapis danych

```ts
const handleSave = async () => {
  setSaving(true);
  setError(null);
  try {
    const res = await fetch("https://na-wzgorzu.pl/api.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error();
  } catch {
    setError("Nie udało się zapisać danych");
  } finally {
    setSaving(false);
  }
};
```

---

## Checklist wdrożenia

- [x] **Krok 1** – `src/app/cms/page.tsx` – server component, renderuje `<CmsClient />`
- [x] **Krok 2** – `src/app/cms/CmsClient.tsx` – stany, GET z api.php, wyświetlenie surowych danych (console.log) jako dowód działania
- [x] **Krok 3** – `src/components/cms/StringListEditor.tsx` – edytowalna lista stringów
- [x] **Krok 4** – `src/components/cms/AccommodationForm.tsx` – formularz pojedynczego noclegu z użyciem StringListEditor
- [x] **Krok 5** – Tabs (Domki / Pokoje) w CmsClient z listą kart AccommodationForm + przyciski dodaj/usuń
- [x] **Krok 6** – Przycisk „Zapisz zmiany" z POST do api.php + obsługa stanu saving i błędów