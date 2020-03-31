# REPO FOR DEPLOY ONLY
Please refer to [Browser Technologies](https://github.com/robert-hoekstra/browser-technologies-1920) for full issues and updates!
# Browser Technologies @cmda-minor-web 1920
//Robuuste, toegankelijke websites ontwerpen en maken …

## Feedback punten
3 punten waar ik graag feedback over zou willen hebben:
* Functionaliteit van de applicatie met alleen html5
* Of req.query in de res.render (index.js -> routes) netjes is
* Hoe deploy je gemakkelijk met heroku als je een folder structuur heb zoals ik?

## Nerdy Shirt Creator!
Een applicatie om super nerdy t-shirts te ontwerpen!

### Inhoudsopgave
- [Browser Technologies @cmda-minor-web 1920](#browser-technologies--cmda-minor-web-1920)
  * [Feedback punten](#feedback-punten)
  * [Nerdy Shirt Creator!](#nerdy-shirt-creator-)
    + [Inhoudsopgave](#inhoudsopgave)
    + [Case](#case)
      - [Core functies](#core-functies)
      - [User Experience](#user-experience)
        * [HTML](#html)
        * [CSS](#css)
          + [Fallbacks](#fallbacks)
        * [JavaScript](#javascript)
      - [Probleemdefinitie](#probleemdefinitie)
      - [Progressive Enhancement](#progressive-enhancement)
      - [Feauture Detection](#feauture-detection)
    + [Nice to haves](#nice-to-haves)
    + [Live on Heroku](#live-on-heroku)
    + [Lokaal op eigen machine](#lokaal-op-eigen-machine)
    + [Node & NPM Installeren](#node---npm-installeren)

### Case
De gebruiker kan via een HTML5 form een t-shirt ontwerpen. Dit shirt kan vervolgens uitgeprint worden of opgeslagen als plaatje.
Wanneer de gebruiker de link kopieert die verschijnt bij de preview pagina. Kan de gebruiker deze link op een later moment in de browser plakken om zo weer het shirt op te halen die hij eerder heeft gemaakt.

Alles gebeurd Server Side met Express.JS er is dus geen JavaScript meer nodig aan die client-side!
JavaScript wordt alleen nog maar gebruikt voor de Progressive Enhancement Client Side

[![Image from Gyazo](https://i.gyazo.com/ab897e9c32013b38c67a9b75f154bb2a.png)](https://gyazo.com/ab897e9c32013b38c67a9b75f154bb2a)

#### Core functies
* Navigeren
* Uitprinten
* Formulier invullen
* Later terug komen naar formulier en beginnen waar gebleven
* Ontwerp delen met anderen
* No JavaScript

#### User Experience
Voor de UX heb ik veel gekeken naar de lagen die ik kan toepassen binnen de opdracht. Het idee is om in 3 lagen te werken:

* De Basis
* De Vormgeving
* De Interactie

Vertaalt naar webdesign kom ik dan uit bij:

* HTML
* CSS
* JavaScript

##### HTML
Met HTML heb ik zoveel mogelijk gebruik gemaakt van [CanIUse?](https://caniuse.com).
Can I Use is een online tool waarmee je snel in een overzicht te zien krijgt of een bepaalde webtechniek support heeft van browsers. Ik ben mij zoveel mogelijk gaan focussen op html elementen die in zoveel mogelijk browsers werken. Waarom? vanwege het native gedrag dat elke browser vertoont. Maar ook het aanspreken van elementen gaat moeizaam als een verouderde browsers de elementen omzet naar simpele div's.

Nog een voordeel van semantisch te werk gaan met HTML is dat je met een paar meta tags, attributes en goed gebruik van html elementen al een grote stap hebt gemaakt voor toegankelijkheid. De applicatie is volledig te gebruiken met een toetsenbord en je kunt er prima doorheen navigeren door tab, shift+tab en enter te gebruiken.

Screenreaders kunnen de website ook oplezen in het Nederlands vanwege de lang attribute.

##### CSS
[![Image from Gyazo](https://i.gyazo.com/91036a8b73fa9bfb0558b019833fbaa5.gif)](https://gyazo.com/91036a8b73fa9bfb0558b019833fbaa5)

Met CSS heb ik geprobeerd om zoveel mogelijk affordance toe te voegen op de website. Elementen die kunnen interacteren moeten dat ook uitstralen. Evenals dat de uitstraling moet voldoen aan bepaalde eisen. Zoals voldoende ruimte tussen knoppen. Maar ook een goed contrast en een groot genoeg font om de leesbaarheid te bevorderen.

Met CSS heb ik nog wat aan deep diving gedaan door transities en animaties toe te voegen. Dit zorgt voor een fijnere ervaring van het product!

###### Fallbacks
Ik heb ervoor gezorgd dat de applicatie niet afhankelijk is van bepaalde CSS properties. Hier en daar heb ik een fallback optie geschreven. Het idee is dat je eerst een css property toewijst aan een element die zo breed mogelijk wordt ondersteund. En dat je daarna steeds specifieker en minder breed kan definieren.

Bijvoorbeeld: eerst roepen we het verdana font aan, een font die praktisch door elk systeem als default wordt ondersteund. Pas daarna roep ik een webfont op welke verdana overschrijft mits het systeem dit ondersteunt!

##### JavaScript
JavaScript functionaliteit heb ik zoveel mogelijk op de server afgevangen zodat de gebruiker niet afhankelijk is van JavaScript. De gebruiker kan gewoon gebruik maken van de applicatie en alle core functionaliteit blijven werken zonder JavaScript. Wel heb ik met JavaScript Progressive Enhancement toegepast. Daarover meer verder in de readme.
[![Image from Gyazo](https://i.gyazo.com/f9c9cdb5320d50423b01d1ee06cd1bbe.gif)](https://gyazo.com/f9c9cdb5320d50423b01d1ee06cd1bbe) 

#### Probleemdefinitie
Het probleem van deze case is dat de core functionaliteit van het product het moeten doen op zoveel mogelijk devices en browsers. Dat lijkt makkelijk. Maar dat is het niet. Sommige devices ondersteunen hele voor de hand liggende onderwerpen niet. Of bieden geen toegang tot andere browsers. Of sterker nog, hebben een eigen browser waarvan je niet eens weet waarom, hoe, en waarvandaan.

#### Progressive Enhancement
Progressive Enhancement is een werkmethode waarbij je kijkt naar de basis van jouw applicatie. In principe betekent dat bij webdesign HTML First, JavaScript Second. Er zijn tal websites te vinden online die JavaScript nodig hebben om te draaien. Probeer de website van [KLM](https://klm.com) maar eens te gebruiken om een vliegticket te boeken, zonder JavaScript. Dat lukt je niet.

Door een applicatie op te bouwen met de progressive enhancement gedachtegang. Zorg je er voor dat de applicatie niet afhankelijk is van JavaScript en dus gebruikt kan worden door iedereen die geen JavaScript gebruikt.

Maar wat doe je dan met JavaScript? Progressive Enhancement!
Voor de gebruikers die wel JavaScript ondersteunen kun je JavaScript gebruiken om de gebruikerservaring naar een hoger niveau te tillen. Je kunt functionaliteit binnen de applicatie nog beter maken door JavaScript toe te voegen.

In deze applicatie is het volgende progressive enhanced:
* Service Worker voor offline gebruik
* Font size groter of kleiner maken
* Offline notificatie als de verbinding wegvalt
* Tekst kopieren naar klembord
* Webpagina uitprinten

[![Image from Gyazo](https://i.gyazo.com/97979c8c7da88356f0d9971e99a4eeec.gif)](https://gyazo.com/97979c8c7da88356f0d9971e99a4eeec)

Zoals je kunt lezen zijn het functies die de UX bevorderen. Maar zodra deze functies wegvallen door 'lack of JavaScript' dan kan de gebruiker alsnog de basis van de applicatie gebruiken!

#### Feauture Detection
Feature Detection is een methodiek om te kijken of een gebruiker een bepaalde feature ondersteund. Als de gebruiker het ondersteund, gebruik dan de feature. 

In JavaScript is dat te doen door het volgende:
```JavaScript
if ('functionaliteit' in navigator) {
    // Gebruik dan deze functionaliteit
}

```

Wat er staat is als de functionaliteit er is, dan voer je het stukje code uit tussen de curly brackets.

Met CSS kunnen wij precies hetzelfde doen.
In CSS werkt het volgende:

```CSS
@supports(display: flex) {
    section {
        display: flex;
    }
}

@supports not(display: flex) {
    section {
        display: table;
    }
}
```

Ook hier geldt : Support je het? gebruik het dan! Support je het niet? Gebruik het dan niet.

### Nice to haves
* Preview terwijl je het form invult
* Selectie van opties in form weergeven met een kleur ipv tekst
* Instrucies linken aan het maken van een shirt. Dus dat je al begeleidend een shirt maakt!


### Live on Heroku
The applicatie staat live op heroku en wordt gedeployed vanuit deze repo: [bt-shirt-creator](https://github.com/robert-hoekstra/bt-shirt-creator)
De applicatie kan gestart worden door op de link te klikken bovenaan de repo!

### Lokaal op eigen machine

Zorg ervoor dat npm en node geinstalleerd is op jouw device!

* clone repo
* cd opdracht 2
* npm install
* npm run
* navigeer naar localhost:3000 in de browser

### Node & NPM Installeren
[node](https://nodejs.org/en/)
[npm](https://docs.npmjs.com/cli/install)


Student kan de core functionaliteit van een use case doorgronden
Toegankelijkheid: De user experience is goed
Readme: In de beschrijving van het project staat een probleemdefinitie, hoe het probleem is opgelost en een uitleg van de code.
Student kan uitleggen wat Progressive enhancement is. 
Student laat zien hoe Progressive Enhancement toe te passen in Web Development
Student kan uitleggen wat Feature detection is.
Student laat zien hoe Feature Detection kan worden toegepast in Web Development
