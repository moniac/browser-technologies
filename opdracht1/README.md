URL: https://goo.gl/LrVa6n

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
 
 * Wel heb ik de alt tag dynamisch kunnen invullen met de naam van de Pokémon
  ![alt text](https://i.imgur.com/YtxrPWl.jpg "Logo Title Text 1")
 
 ## Custom fonts
 
 * Fonts worden met font-display: swap; omgewisseld, zodat er altijd tekst zichtbaar is.
 * Ik speel nog met de FontFaceObserver, wat werkt maar bij mij eigenlijk meer tijd toevoegd ipv bespaart.
 
 ## Javascript
 
 * Ik had eerst met script type module gewerkt, maar niet alle browsers supporten dat, dus nu ben ik met Webpack bezig
 * Alles wordt nu met webpack gebundled, dus vanzelf wordt alle javascript geminified.
 
 * Op veel oudere devices werkte mijn website niet, dit komt omdat ik de Promises en de Fetch api niet gepolyfilled heb. Dit heb ik nu wel gedaan.
 
 * IE 11 vind het niet leuk als je een forEach() gebruikt op HTML elementen, dus ik heb Array.from() gebruikt, maar dit bestaat niet in IE! Dus ik heb dat ook moeten polyfillen. Nu werkt het!
 
 ## Kleur
 ![alt text](http://i.imgur.com/aMmDATw.jpg "Logo Title Text 1")
 
 ## Breedband internet
 
 * Ik zou kunnen kijken of je bij een lagere internet snelheid niet alle pokemon download maar bijvoorbeeld slechts de eerste 20.
 
 ```
 try {
			const response = await fetch(api)
			const data = await response.json()

			if (data) {
				return data
			}
			throw new Error()

		} catch (error) {
			throw new Error(`Unable to get data back from ${api}`)
		}
 ```
 ^ Een betere error afhandeling dat aangeeft waar iets mis is gegaan.
 
 ## Cookies
 
 ## Local Storage
 
 * Ik ben bezig geweest met het opslaan van de API data in de localstorage, maar het is mij nog niet gelukt om te kunnen checken of de data al opgeslagen is om dan een API call te vermijden. Dit moet ik verder onderzoeken.
 
 ## Muis/Trackpad
 
 * Alle links zijn door te tabben. Dit was vanaf het begin al ok.
