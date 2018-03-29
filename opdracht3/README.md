# Browser Technologies
//Robuuste, toegankelijke websites leren bouwen …

https://3.mohammedmulazada.nl/

## Opdracht 3 - Progressive Enhanced Browser Technologies
//Browser Technologies onderzoeken en implementeren als enhancement. Basic functionaliteit van een use case doorgronden.

Maak een demo op basis van een use case. Zorg dat alle gebruikers, met alle browsers, in iedere context minimaal de core functionaliteit te zien/horen/voelen krijgen. Bouw je demo in 3 lagen, volgens het principe van Progressive Enhancement. Gebruik als enhanced feature een (hippe, innovatieve, vooruitstrevende) Browser Technologie die je gaat onderzoeken op functionaliteit, toegankelijkheid en (browser) ondersteuning.

Beoordelingscriteria
- De code staat in een repository op GitHub
- Er is een Readme toegevoegd met daarin beschreven:
  - een beschrijving van de core functionality
  - een beschrijving van de feature(s)/Browser Technologies
  - welke browser de feature(s) wel/niet ondersteunen
  - een beschrijving van de accessibility issues die zijn onderzocht
- De demo is opgebouwd in 3 lagen, volgens het principe van Progressive Enhancement
- De user experience van de demo is goed
  - de leesbaarheidsregels zijn toegepast, contrast en kleuren kloppen
  - het heeft een gebruiksvriendelijke interface, met gebruikmaking van affordance en feedback op de interactieve elementen
- Student kan uitleggen wat Progressive Enhancement en Feature Detectie is en hoe dit toe te passen in Web Development

## Core functionality

* Het kunnen weergeven van de uitslag van een wedstrijd. De gebruiker wilt iets van een notificatie kunnen ontvangen wanneer een team wint.

* De meeste interessante gebruikte technologie hier zijn de push notificaties.

## Ondersteuning

![Support for notification api](http://i.imgur.com/CeD0zut.jpg)

Zoals je kunt zien valt de ondersteuning voor de notification API nog best tegen. Niet alle browsers ondersteunen het momenteel maar zijn er wel mee bezig.

Het is dus belangrijk dat de Notificatie vrijblijvend is en niet de core functionality van je website.

## Lagen

### De baseline

Mocht je geen Javascript hebben, dan zie je de score op de website staan.

Mocht je een oudere browser hebben die nog wel Javascript ondersteunt, dan krijg je een alert die de score weergeeft.

### Acceptable

Zodra je browser iets moderner wordt, kan er met CSS en Javascript een modal in beeld komen. De model ziet er wat netter uit dan een alert box.

### Pleasurable

Notifications!

![Notification support on IE 11](https://i.imgur.com/MFvvV9k.jpg)