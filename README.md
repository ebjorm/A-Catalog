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
Responsiveness: Not implemented (due to lack of time, the current implementation does still work just not always the most smoothly on very small screens)
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

### Saateteksti
The seven commits before this are all trying to fix an issue with getting the project published. This is because I had created the project in a wrong way and there was an "extra" layer of folders that I had to remove to get the site to publish correctly. 
I decided not to implement the responsiveness aspect to the project due to time constraints. I am also not 100% sure if the projects interactivness is "complicated" enough for the requirements, but doing this project alone and not having the same time as others have had coming up with an idea for the project etc. made it harder to come up with an idea and have time to create something "complicated" enough. So, I hope there can be a little oversight with this. Other than that all requirements for the project should be fulfilled.

Toivottavasti myös ok että olen kirjoittanut kaikken textin Englaniksi, ajattelin että se ehkä on helpomi teille ymmärtää, minulle kirjoittaa ja auttaa jos haluan käyttää tätä projektia työhakemuksissa tulevaisuudessa myös. 
