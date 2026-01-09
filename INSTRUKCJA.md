# NotionHub Templates - Kompletna Instrukcja Uruchomienia

## Spis Treści
1. [Wymagania](#wymagania)
2. [Szybki Start (10 minut)](#szybki-start)
3. [Krok po Kroku](#krok-po-kroku)
4. [Konfiguracja Gumroad](#konfiguracja-gumroad)
5. [Aktualizacja Strony](#aktualizacja-strony)
6. [Marketing](#marketing)
7. [FAQ](#faq)

---

## Wymagania

Zanim zaczniesz, upewnij się że masz:

- [ ] Konto GitHub (darmowe) - https://github.com
- [ ] Konto Vercel (darmowe) - https://vercel.com
- [ ] Konto Gumroad (darmowe) - https://gumroad.com
- [ ] Konto Notion (darmowe) - https://notion.so
- [ ] Node.js zainstalowany (opcjonalne, tylko do testowania lokalnego)

**Łączny czas konfiguracji: ~30-45 minut jednorazowo**

---

## Szybki Start

### Opcja A: Deploy przez Vercel (ZALECANE - najłatwiejsze)

1. **Wgraj projekt na GitHub:**
   - Stwórz nowe repozytorium na GitHub
   - Wgraj folder `notionhub-templates` do repozytorium

2. **Deploy na Vercel:**
   - Wejdź na https://vercel.com
   - Kliknij "New Project"
   - Wybierz swoje repozytorium GitHub
   - Kliknij "Deploy"
   - Gotowe! Twoja strona jest online.

3. **Dodaj domenę (opcjonalne):**
   - W Vercel → Settings → Domains
   - Dodaj swoją domenę lub użyj darmowej .vercel.app

### Opcja B: Deploy przez skrypt

Uruchom plik `deploy.bat` (Windows) lub `deploy.sh` (Mac/Linux).

---

## Krok po Kroku

### Krok 1: Utwórz konto Gumroad

1. Wejdź na https://gumroad.com
2. Kliknij "Start selling"
3. Zarejestruj się (email + hasło)
4. Uzupełnij profil:
   - Nazwa: NotionHub Templates
   - Bio: Premium Notion templates for productivity
   - Avatar: wgraj logo (możesz użyć Canva do stworzenia)

### Krok 2: Stwórz szablony Notion

1. Wejdź na https://notion.so i zaloguj się
2. Dla każdego szablonu z folderu `notion-templates/`:
   - Stwórz nową stronę
   - Zbuduj szablon według opisu
   - Kliknij "Share" → "Share to web" → włącz
   - Kliknij "Allow duplicate as template"
   - Skopiuj link

**TIP:** Możesz też użyć gotowych szablonów z Notion Template Gallery jako bazy i je dostosować.

### Krok 3: Dodaj produkty do Gumroad

Dla każdego szablonu:

1. W Gumroad → Dashboard → "New product"
2. Wybierz "Digital product"
3. Uzupełnij:
   - **Name:** np. "Ultimate Life OS - Notion Template"
   - **Price:** zgodnie z cennikiem (patrz `notion-templates/README.md`)
   - **Description:** skopiuj z `notion-templates/product-descriptions.md`
   - **Content:** wklej link do szablonu Notion
4. Kliknij "Publish"
5. Skopiuj link do produktu

### Krok 4: Zaktualizuj stronę

1. Otwórz plik `src/data/templates.ts`
2. Dla każdego szablonu zmień `gumroadUrl` na prawdziwy link z Gumroad
3. Opcjonalnie zmień `notionPreviewUrl` na link do preview szablonu
4. Zapisz plik

### Krok 5: Deploy strony

**Przez GitHub + Vercel:**

1. Wgraj zmiany na GitHub
2. Vercel automatycznie zrobi redeploy

**Lub lokalnie:**

```bash
cd notionhub-templates
npm install
npm run build
```

### Krok 6: Kup domenę (opcjonalne)

Zalecane rejestratory:
- Namecheap (~$10/rok dla .com)
- Cloudflare (~$9/rok)
- Google Domains (~$12/rok)

Sugestie nazw:
- notionhub-templates.com
- notionproductivity.com
- templatesfornotion.com

---

## Konfiguracja Gumroad

### Ustawienia profilu

1. Wejdź w Settings → Profile
2. Uzupełnij:
   - Display name: NotionHub Templates
   - Bio: Premium Notion templates to boost your productivity
   - Social links (Twitter, etc.)

### Ustawienia płatności

1. Settings → Payments
2. Połącz konto bankowe lub PayPal
3. Ustaw metodę wypłat

### Discover (marketplace)

1. Dla każdego produktu → Edit → Discover
2. Włącz "List on Gumroad Discover"
3. Dodaj odpowiednie tagi:
   - notion
   - template
   - productivity
   - planner
   - (kategoria produktu)

### Ceny i promocje

Sugerowana strategia cenowa:
- Produkty podstawowe: $5-9
- Produkty średnie: $11-15
- Produkty premium: $19-29
- Mega-bundle wszystkich szablonów: $49-79

---

## Marketing

### Dzień 1-7: Podstawy

1. **Product Hunt:**
   - Zgłoś swój sklep na producthunt.com
   - Najlepszy dzień: wtorek lub środa, godz. 00:01 PST

2. **Reddit:**
   - r/Notion
   - r/productivity
   - r/NotionTemplates
   - Nie spamuj! Dodawaj wartość, czasem wspominaj o szablonach

3. **Twitter/X:**
   - Stwórz konto dla marki
   - Postuj tipy o produktywności
   - Pokazuj screenshoty szablonów

### Tygodnie 2-4: Budowanie

4. **Pinterest:**
   - Świetne dla produktywności i organizacji
   - Twórz piny ze screenshotami szablonów

5. **Gumroad Discover:**
   - Optymalizuj tagi
   - Zbieraj recenzje

6. **Newsletter:**
   - Zbieraj emaile przez landing page
   - Wysyłaj porady produktywności + promocje

### Długoterminowo

7. **SEO:**
   - Blog z poradami o Notion
   - Targetuj frazy: "notion template for X"

8. **Affiliate program:**
   - Włącz w Gumroad
   - Zaproś influencerów

---

## Utrzymanie (1h/tydzień)

- [ ] Sprawdź sprzedaż w Gumroad Dashboard
- [ ] Odpowiedz na ewentualne emaile
- [ ] Sprawdź recenzje
- [ ] (opcjonalnie) Dodaj post na social media

---

## FAQ

**P: Ile mogę zarobić?**
O: Realistycznie, po 3-6 miesiącach:
- Minimum: $200-500/mies.
- Średnio: $500-1500/mies.
- Dobrze: $1000-3000/mies.

**P: Czy muszę umieć kodować?**
O: Nie! Wszystko jest gotowe. Tylko wgrywasz pliki i konfigurujesz Gumroad.

**P: Czy to legalne?**
O: Tak, sprzedaż szablonów cyfrowych jest w pełni legalna.

**P: Co jeśli ktoś poprosi o zwrot?**
O: Gumroad obsługuje zwroty automatycznie. Standardowo oferujemy 30-dniową gwarancję.

**P: Jak często muszę aktualizować szablony?**
O: Nie musisz, ale warto raz na kwartał sprawdzić czy wszystko działa.

**P: Czy mogę dodać własne szablony?**
O: Tak! Dodaj nowy obiekt w `src/data/templates.ts` i stwórz produkt w Gumroad.

---

## Wsparcie

Jeśli masz problemy:
1. Sprawdź dokumentację Vercel: https://vercel.com/docs
2. Sprawdź dokumentację Gumroad: https://help.gumroad.com
3. Stack Overflow dla problemów technicznych

---

**Powodzenia z Twoim biznesem!** 🚀
