# OpenNews

Webová aplikace, která umožňuje registrovaným uživatelům vytvářet a publikovat vlastní zprávy. Platforma slouží jako jednoduchý komunitní nástroj pro sdílení informací.

---

## Ukázkové přihlašovací údaje

Pro rychlé vyzkoušení aplikace použij jeden z testovacích účtů:

| E-mail | Heslo |
|---|---|
| user@test.com | 1234567890 |
| admin@test.com | 1234567890 |
| moderator@test.com | 1234567890 |

---

## Funkce

- Přihlášení a registrace přes PocketBase Auth
- Vytváření a publikace článků
- Editace a správa vlastních článků
- Administrace obsahu
- Dynamické načítání dat z API (React Query)

---

## Tech Stack

### Frontend

| Technologie | Účel |
|---|---|
| React 18 | UI framework |
| React Query | Globální state management |

### Backend

| Technologie | Účel |
|---|---|
| PocketBase | Backend, databáze, auth |

---

## Instalace a spuštění

### Požadavky

- Node.js 18+
- npm nebo pnpm

### 1. Klon repozitáře

```bash
git clone https://github.com/uzivatel/opennews.git
cd opennews
```

### 2. Instalace závislostí

```bash
npm install
```

### 3. Spuštění PocketBase

Stáhni PocketBase z [pocketbase.io](https://pocketbase.io/docs/) a spusť:

```bash
./pocketbase serve
```

PocketBase Admin UI bude dostupné na `http://127.0.0.1:8090/_/`.

```
user: test@test.com
password: 1234567890
```

### 4. Spuštění vývojového serveru

```bash
npm run dev
```

Aplikace bude dostupná na `http://localhost:5173`.

---

## Dostupné skripty

```bash
npm run dev        # spustí vývojový server
npm run build      # vytvoří produkční build
npm run preview    # náhled produkčního buildu
npm run lint       # ESLint kontrola
```

---

## Licence
