### A-Catalog
This is a website with the purpose of helping it's users display what clothing items they have and make it easier to pick out an outfit. 
The code is modular and easy to understand and expand upon further, with more features and filters.

### Link to page:
https://a-catalog.vercel.app

Not sure if that is the correct one so here are the other two given by Vercel:

https://a-catalog-ebjorms-projects.vercel.app

https://a-catalog-git-main-ebjorms-projects.vercel.app

### Time spent on things:
Idea + moodboard/plan: 3h + 2h

Set up: 2h

Grid view: 5h

Outfit view: 6h

Filters: 7h

Responsiveness: Not implemented (due to lack of time, the current implementation does still work just not always the most smoothly on 
very small screens)

Styling: 3h

Publishing: 2h

Misc.: 7h

### File and Directory Explanations

#### `public/`
You can find the icons and images used on the website in their respective folders icons and images.


#### `src/`
In folder:

 Components:

- CategoryGrid.js and .css: component that displays one category at a time on the grid page.
- Outfit.js and .css: component that displays one category at a time in the outfit view.

Pages:

- GridPages.js: page component for the grid view.
- OutfitPage.js: page component for the outfit view.

Files:

- App.js: Main React component that sets up routing, state management, and rendering of different views.
- App.css: Styling for the webpage.
- index.js: Entry point for the React application. It wraps the application with `BrowserRouter` for routing.
- items.json: JSON file containing the data for the clothing items, including their images, colors and alt text.

### Commants
The seven commits before this are all trying to fix an issue with getting the project published. This is because I had created the project in a wrong way and there was an "extra" layer of folders that I had to remove to get the site to publish correctly. 

I decided not to implement the responsiveness aspect to the project due to time constraints. I am also not 100% sure if the projects interactivness is "complicated" enough for the requirements, but doing this project alone and not having the same time as others have had coming up with an idea for the project etc. made it harder to come up with an idea and have time to create something "complicated" enough. So, I hope there can be a little oversight with this. Other than that all requirements for the project should be fulfilled.

One last comment I want to express is that the arrow to open the filters also closes the filter pop up and you have to be located at a quite specific spot on the arrow to get it to open.

Toivottavasti myös ok että olen kirjoittanut kaikken textin Englaniksi, ajattelin että se ehkä on helpomi teille ymmärtää, minulle kirjoittaa ja auttaa jos haluan käyttää tätä projektia työhakemuksissa tulevaisuudessa myös. 

### Saateteksti
Kuka on käyttäjä? Mitä hän tulee sivustolla tekemään. Mistä tietää, että ollaan onnistuttu? Onko käyttäjäryhmiä useita?
Användaren för projektet är främst av allt jag, men ifall man skulle utvidga mängden av kläder som finns på sidan så skulle jag kunna se att olika människor som är mode intreserade skulle kunna hitta intresse i sidan. Projektet har inte en sådan funktion så att vem som helst skulle kunna göra den till sin egen men ifall en sådan funktion skulle läggas till så skulle sidan kuna vara användbar för en mycket större målgrupp.

Miettikää, missä järjestyksessä ladotte informaation sivustolle. Ensin haluatte ehkä herättää käyttäjän mielenkiinnon vaikuttavalla grafiikalla. Scrollaako käyttäjä alaspäin, vai klikkaako hän eteenpäin?
Sidan är ganska lätt att förstå direkt man ser på den och lockar genast användaren in till att pröva och se vad som händer när man trycker på de olika knapparna. Jag tror även att målet och funktionen av sidan kan förstås väldigt snabbt och däremed ges informationen som behövs ganska snabbt och direkt till användaren.

Millaisia Call To Actioneita <https://en.wikipedia.org/wiki/Call_to_action_(marketing)> käyttäjällä on? Liittyykö hän sähköpostilistalle? Jakaako hän sivuston someen? Missä kohdassa nämä esitellään käyttäjälle?
Sidan är gjord mera för en personlig användning och behövs därför inte skrivas in på. Sidan skulle mäst kunna spridas genom att man berättar om den till kompisar och de sedan tar den ibruk om de har lite programerings kunskaper och kan modifiera om filen med kläderna.

Millainen visuaalinen muotokieli sivustolla on? Onko sivusto minimalistinen, vai onko siellä paljon grafiikkaa? Miten värit tukevat sivuston viestiä? Mitä fontteja käytätte ja miksi?
Sidan är väldigt minimalistisk och målet är att ge den lite av en gammeldags, scrapbook kännsla. Fonten som används på sidan liknar något som en gammal skrivmaskin skulle ha kunnat skapa för att ge den gammeldagsiga kännslan. Färgerna som används ger sidan en varm och hemma gjord kännsla. Bakgrundsfärgen på hela sidan påminner även lite om färgen på ett papper, vilket ger mera av den scrapbookiga kännslan. Icoerna är även handritade av mig vilket adderar tilldetta.

Miten navigaatio on rakennettu? Onko se ylä- vai alapalkissa? Onko se kiinteä, vai skrollaako se mukana?
Navigeringen mellan de två olika sidorna är uppe i högra hörnet för det känns som det mäst logiska och naturliga stället att lägga till dem. Navigeringen är även väldigt tydlig och lätt att förstå. All funktionalitet/navigering på sidan är ganska läätt att hitta på grund av ikonerna som andvänts.