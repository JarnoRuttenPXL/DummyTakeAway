QuickBite

Korte projectbeschrijving

QuickBite is een webapplicatie waarmee klanten gerechten kunnen bekijken en bestellen bij een restaurant.

De app toont een dynamisch menu (pizza, pasta, salades, desserts en drankjes), biedt filters en sortering, heeft een winkelmandje met promocodes en een eenvoudige admin-login om het "Gerecht van de dag" te beheren. Alle logica draait in de browser; er is geen backend.

Hoe het project starten

1. Project downloaden / openen
    - Zorg dat de bestanden "index.html", "style.css" en "script.js" in dezelfde map staan.

2. Starten in de browser
    - Open "index.html" rechtstreeks in een moderne browser (Chrome, Firefox, Edge, …).

3. Data resetten
    - De app gebruikt "localStorage" voor:
        - Het winkelmandje ("restaurantCart").
        - Het gerecht van de dag ("dishOfTheDay").

Gebruikte data / JSON

Alle data staat als JavaScript-objecten in "script.js" (er zijn geen losse ".json"-bestanden).

Menu (array van gerechten)

Elk gerecht in het menu is een object met o.a.:

- "id": uniek nummer.
- "name": naam van het gerecht.
- "category": categorie (bv. "Pizza", "Pasta", "Salad", "Dessert", "Drinks").
- "price": basisprijs "nummer".
- "veggie": "true/false" voor vegetarisch.
- "ingredients": array van strings, lijst met ingrediënten.
- "options": array van opties per gerecht, met per optie:
    - "key": interne sleutel.
    - "label": tekst die de gebruiker ziet.
    - "type": "extra" (meerprijs) of "omit" (ingrediënt weglaten).
    - "price": prijs van de extra.
- "maxPerOrder": maximum aantal dat per bestelling toegestaan is.
- "available": boolean, nog niet volledig gebruikt.
- "tags": array met tags (bijv. "spicy", "vegetarian"), nu nog puur data.

PromoCodes

Array met beschikbare promotiecodes:

- Object met:
    - "code": string, bv. `"WELCOME10"`.
    - "discount": korting in procenten.
    - "oneTimeUse": boolean, of de code eenmalig gebruikt mag worden (per sessie).

Standaard codes:

- "WELCOME10" – 10% korting.
- "FIRST20" – 20% korting, eenmalig.
- "SUMMER15" – 15% korting.

DishOfTheDay

Object met:

- "id": id van het gerecht.
- "name": naam die getoond wordt.
- "price": prijs als getoond in het blok "Gerecht van de dag".
- "description": korte omschrijving.

Dit object wordt in "localStorage" opgeslagen onder de sleutel "dishOfTheDay" wanneer de admin iets opslaat.

Winkelmand-data ("cart")

- "cart" is een array van items met o.a.:
    - "id", "name", "price", "maxPerOrder".
    - "quantity": gekozen aantal.
    - "options": lijst van gekozen opties.
    - "totalPrice": prijs per stuk inclusief geselecteerde opties.

De volledige "cart" wordt bewaard in "localStorage" onder "restaurantCart".

Functionaliteiten

Navigatie & lay-out

- "Menu".
- "Winkelmandje".
- "Admin inloggen".
- Navigatiebalk bovenaan.
- Responsief design: menu-kaarten en winkelmand schalen mee voor kleinere schermen.
- UI met badges (veggie, admin), sticky header en modals.

Menu & filters

- Dynamische opbouw van het menu vanuit de "menu"-array.
- Groepering per categorie (Pizza, Pasta, Salad, Dessert, Drinks).
- Per gerecht:
    - Naam, ingrediënten, prijs, maximaal per bestelling.
    - Veggie-gerechten worden visueel gemarkeerd met een “VEGGIE”-badge.
- Filteropties:
    - Alles / Vegetarisch / Niet-vegetarisch.
- Sorteeropties:
    - Geen sortering.
    - Prijs van laag naar hoog.
    - Prijs van hoog naar laag.

Gerecht van de dag

- “Gerecht van de dag” bovenaan de menu-pagina.
- Toont naam, beschrijving en prijs van het huidige gerecht van de dag.
- Standaard staat dit op "Penne Arrabbiata", maar:
    - Admin kan via het admin-scherm:
        - Een bestaand gerecht kiezen als basis.
        - Naam, prijs en beschrijving zelf instellen.
    - Wijzigingen worden opgeslagen in `localStorage`, zodat het na een refresh blijft staan.

Gerechten toevoegen met opties

- "Snelle toevoeging":
    - Knop "Toevoegen aan winkelmandje" voegt een gerecht met standaardinstellingen toe.
- "Toevoegen met opties":
    - Knop "Bekijk opties & toevoegen" opent een modal.
    - In de modal:
        - Overzicht van ingrediënten.
        - Basisprijs van het gerecht.
        - Lijst met opties:
            - Extra’s.
            - Weglaat opties.
        - Dynamische berekening van de totale prijs (basis + geselecteerde extra’s).
        - Knop om het gerecht met de gekozen opties aan het winkelmandje toe te voegen.

Winkelmandje & promocodes

- Overzicht van alle items in het winkelmandje:
    - Naam van het gerecht.
    - Prijs per stuk.
    - Eventuele gekozen opties.
    - Aantal (met +/– knoppen).
    - Totaalprijs per regel.
- "Validatie op maximum per gerecht":
    - Bij het verhogen van de hoeveelheid wordt "maxPerOrder" gebruikt.
    - Bij overschrijden verschijnt een foutmelding.
- "Promocodes":
    - Invoer van een promocode.
    - Geldige code:
        - Past de juiste procentuele korting toe.
        - Toont een succesbericht.
    - Ongeldige code:
        - Toont een foutmelding.
- "Totaalberekening":
    - Subtotaal (zonder korting).
    - Korting.
    - Eindtotaal.
- "Bestelling plaatsen":
    - Controle dat het winkelmandje niet leeg is.
    - Bij succes:
        - Foutmeldingen worden niet getoond.
        - Winkelmandje wordt geleegd.
        - Promocode en korting worden gereset.
        - De gebruiker krijgt een bevestigingsmelding en wordt terug naar het menu gestuurd.

Admin login

- Eenvoudig login-scherm met gebruikersnaam en wachtwoord:
    - Demo-gegevens: "admin" / "admin123".
- Bij succesvolle login:
    - "Admin"-badge zichtbaar in de header.
    - Knop "Admin inloggen" wordt verborgen.
    - Knop "Bewerken" op het Gerecht van de dag wordt zichtbaar.
- Bij foute inloggegevens:
    - Meldingen via de notificatie-balk bovenaan.

Opslag in "localStorage"

- Het winkelmandje ("cart") wordt automatisch bewaard in "localStorage" onder de key "restaurantCart".
- Het gerecht van de dag ("dishOfTheDay") wordt ook bewaard in "localStorage".

Bekende beperkingen / dingen die niet gelukt zijn

- Geen echte backend / bestelling  
  Er wordt geen echte bestelling verstuurd. Alles draait in de browser; er is geen server, geen database en geen e-mailbevestiging.

- Admin-beveiliging is puur front-end
    - De inloggegevens ("admin" / "admin123") staan in de JavaScript-code.
    - Er is geen echte beveiliging.
    - Na een refresh ben je de admin-status kwijt en moet je opnieuw inloggen.

- Beschikbaarheid van gerechten nog niet uitgewerkt
    - In de data heeft elk gerecht een veld "available", en in de CSS zijn stijlen voorzien voor onbeschikbare gerechten.
    - In de huidige versie wordt "available" nog niet gebruikt om gerechten te blokkeren of als “uitverkocht” te tonen.

- Tags worden niet getoond of gefilterd
    - Elk gerecht heeft een "tags"-array (bijv. "spicy", "vegetarian").
    - Er is nog geen UI om op tags te filteren of ze zichtbaar te maken bij de gerechten.

- Beperkte validatie in het admin-bewerkingsformulier
    - Er wordt alleen gecontroleerd of naam, prijs en beschrijving niet leeg zijn.
    - Er is geen extra validatie op bv. negatieve prijzen of extreem hoge waarden.

- Promocodes zijn niet echt “eenmalig”
    - Eenmalige codes worden alleen tijdens de huidige sessie uit de "promoCodes"-lijst verwijderd.
    - Na een browser-refresh staat de standaardlijst weer klaar, waardoor een eenmalige code opnieuw gebruikt zou kunnen worden.

- Toegankelijkheid kan verbeterd worden
    - De modal is klikbaar te sluiten (overlay of kruisje), maar er is bijvoorbeeld geen Escape-toets-shortcut.
