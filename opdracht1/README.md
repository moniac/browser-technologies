# Browser Technologies
//Robuuste, toegankelijke websites leren bouwen … 

## Opdracht 1 - Progressive Enhancement

### Opdracht 1.1 - Breek het Web
Het Web laten 'breken' door features van het platform bewust uit te zetten. Images, custom fonts, JavaScript, kleur, breedband internet, etc. Allemaal met als doel je te laten beseffen hoeveel je nog niet weet van het Web, erachter komen dat je misschien aannames hebt die niet kloppen, en om je je in te laten leven in de eindgebruiker.

Onderzoek minimaal twee features. Dat betekent uitvogelen wat het voor impact heeft op de sites die je kent en normaal gebruikt. Kies sites in je directe omgeving: van je werkgever, lokale vereniging, de cafetaria om de hoek, en/of eerdere projecten die je zelf gedaan hebt.

Kies 2 features van de 8
- Zoek uit welke problemen ze kunnen veroorzaken (verzamel cijfers, meningen, ervaringen)
- Zoek uit hoe je dit kunt testen (hoe kun je een feature ‘uitzetten’)
- Vind een aantal sites waar dit ook problemen oplevert (uit je directe omgeving)
- Beschrijf hoe je dit kan fiksen
- Maak hierover een presentatie en neem die woensdag mee, dan gaan we de resultaten bespreken
Lezen: [Everyone has JavaScript, right?](https://kryogenix.org/code/browser/everyonehasjs.html) en [I Turned Off JavaScript and it was Glorious](https://www.wired.com/2015/11/i-turned-off-javascript-for-a-whole-week-and-it-was-glorious/)


### Opdracht 1.2 - Fork je OBA
Hoe zit het eigenlijk met Progressive Enhancement van je OBA opdracht? Waarschijnlijk kan daar wel het één en ander aan verbeterd worden, dat ding is immers in een week in elkaar gehackt! 

Voor deze opdracht ga je toepassen wat je van opdracht 1.1 hebt geleerd.
- Pas Progressive enhancement toe op je OBA Web App. 
- Check je OBA Web App op de 8 features uit opdracht 1.1 en verbeter de code waar mogelijk.
- Test  je OBA Web App in het device lab.
- Laat je OBA Web App voorlezen door een screenreader. 
- Gebruik onderstaande artikelen om je code te optimaliseren.
[The accessibility mindset](https://24ways.org/2015/the-accessibility-mindset/) en [Accessibility Originates With UX: A BBC iPlayer Case Study](https://www.smashingmagazine.com/2015/02/bbc-iplayer-accessibility-case-study/)

Criteria
- Zet je code op Github
- Schrijf een Readme met een beschrijving van de problemen die je hebt gevonden, hoe je die hebt opgelost, of hoe je dit zou oplossen (met todo’s) als je genoeg tijd en budget zou hebben 

 ### Opdracht 1.2 - Fork je OBA
 
 ### Verbeteringen
 
 ## Afbeeldingen
 
 * Afbeeldingen worden dynamisch ingeladen, dus hier heb ik niet iets op kunnen besparen.
 
 ## Custom fonts
 
 * Fonts worden met font-display: swap; omgewisseld, zodat er altijd tekst zichtbaar is.
 * Ik speel nog met de FontFaceObserver, wat werkt maar bij mij eigenlijk meer tijd toevoegd ipv bespaart.
 
 ## Javascript
 
 * Alles wordt nu met webpack gebundled, dus vanzelf wordt alle javascript geminified.
 
 ## Kleur
 
 ## Breedband internet
 
 ## Cookies
 
 ## Local Storage
 
 ## Muis/Trackpad
 
 * Ik heb nu ervoor gezorgd dat de afbeeldingen die ingeladen worden een alt tag krijgen met de naam van de juiste Pokémon.
 * Er is een fallback font
 * Er wordt nu een standaard font gebruikt en als de google font klaar is met downloaden wordt de font geswapped
