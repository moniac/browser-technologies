# Browser Technologies
//Robuuste, toegankelijke websites leren bouwen …

Accordeon
https://moniac.github.io/browser-technologies/opdracht2/accordeon/index.html

Image Picker
https://moniac.github.io/browser-technologies/opdracht2/imagepicker/index.html

## Opdracht 2 - 1, 2, 3 Feature Detectie
//Wat laat je zien als een browser of gebruiker 'enhancement' niet kan tonen of zien? Hoe doe je Feature Detection en wat doe je als een techniek niet werkt?

Werk 2 componenten uit in een demo. Je onderzoekt hoe je verschillende features door verschillende browsers worden ondersteund en hoe je voor goede fallback kan zorgen. Gebruik [html5test.com](https://html5test.com), [css3test.com](http://css3test.com) en [kangax.github.io/compat-table/es6/](https://kangax.github.io/compat-table/es6/)

- Per feature: Zoek uit hoe je deze kunt testen. Verzamel uitleg en artikelen. Bouw een (kleine) progressive enhanced demo (zonder extra tools, gewoon in 1 HTML file, zo simpel mogelijk). Test de feature (en fallback) op verschillende browsers en het Device Lab. Let op: Gebruik van polyfills is niet toegestaan.
- Post je 2 demo’s op GitHub met uitleg in een README file. Wat is de feature? Welke browsers/devices ondersteunen deze wel/niet? Hoe zorg je dat de fallback nuttig is?

Beoordelingscriteria
- 2 componenten zijn onderzocht en er is een demo gemaakt.
- De code staat in een repository op GitHub.
- Een Readme is toegevoegd met, per feature:
  -	Een beschrijving van de feature.
  - Bronnen van uitleg en gebruikte artikelen.
  -	Welke browsers/devices ondersteunen deze wel/niet.
  -	Een beschrijving hoe de fallback werkt.

## Accordeon

Voor dit element heb ik gebruik gemaakt van het ```details``` en ```summary``` element.

Dit is een relatief nieuwe feature die een accordeon nabootst. Het heeft een fijne [fallback](https://css-tricks.com/quick-reminder-that-details-summary-is-the-easiest-way-ever-to-make-an-accordion/) in de zin van dat als je geen ondersteuning ervoor hebt het element standaard al uitgeklapt is.

Het bespaart veel werk omdat je niet met javascript een menu hoeft uit te laten klappen.

## Browser support


Chrome | Internet Explorer | Firefox | Safari | Opera
---------|----------|--------- | ------- | -----
 ✅ |  🚫  |  ✅ |  ✅  | 🚫

## Image Picker

Hiermee kan iemand een afbeelding uploaden en krijgen ze de afbeelding als preview te zien.

## Browser support


Chrome | Internet Explorer | Firefox | Safari | Opera
---------|----------|--------- | ------- | -----
 ✅ |  🚫  |  ✅ |  ✅  | 🚫