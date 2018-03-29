# Browser Technologies
//Robuuste, toegankelijke websites leren bouwen …

https://3.mohammedmulazada.nl/

## Progressive Enhancement

Het doel van progressive enhancement is om vanuit een solide basis steeds meer 'nice' stuff toe te voegen.

Het is dus belangrijk dat een website altijd kan werken zonder de fancy stuff.

## Kleur

Voor dit project heb ik super lelijke kleuren gebruikt, alhoewel ik dat jammer vind is het toch wel fijn dat dit nu voor de meeste mensen goed zichtbaar is.

De tool heb ik gedownload sinds ik het in een presentatie van Ischa Gast zag.

![Color Accesibility](https://i.imgur.com/bTOSjzY.png)

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

Het is geen geheim dat dit [enorm slecht ondersteund](https://developer.mozilla.org/en-US/docs/Web/API/notification) is momenteel. Maar dat maakt het niet minder gaaf. 

![Notification support on IE 11](https://i.imgur.com/MFvvV9k.jpg)