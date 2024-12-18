const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = ` ${today.getFullYear()}`;

const last = document.querySelector("#lastModified");
last.innerHTML =  ` ${(document.lastModified)}`;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});


document.addEventListener("DOMContentLoaded", function () {
    const temperature = 31; // in °C
  const windSpeed = 7; // in km/h

  function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
  }

  function isWindChillApplicable(temp, wind) {
    return temp <= 10 && wind > 4.8;
  }

  const windChillCell = document.createElement("td");
  

  if (isWindChillApplicable(temperature, windSpeed)) {
    const windChill = calculateWindChill(temperature, windSpeed).toFixed(2);
    windChillCell.textContent = `${windChill} °C`;
  } else {
    windChillCell.textContent = "N/A";
  }

  const existingWindChillCell = document.querySelector("#wind");
  existingWindChillCell.appendChild(windChillCell);
});


//

const templesContainer = document.querySelector('.history-container');

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://lh3.googleusercontent.com/pMfCzUvnWGL_goMyjh0gS0gg0ux_7DI0aid8ddds3vfShYRA7hHwLE-Aq7CQUrUkTWaWdhLfUDfJveFt3Tsrhaw=w16383"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	
	// Add more temple objects here...
  ];

  function createTempleElement(temple) {
	
	const templeElement = document.createElement('div');
	templeElement.classList.add('temple');
  
	const templeImage = document.createElement('img');
	templeImage.src = temple.imageUrl;
	templeImage.alt = temple.templeName;
	templeImage.setAttribute ("loading", "lazy");
  
	const templeDetails = document.createElement('div');
	templeDetails.classList.add('temple-details');
  
	const templeName = document.createElement('h3');
	templeName.textContent = temple.templeName;
  
	const templeLocation = document.createElement('p');
	   
  
	templeLocation.textContent = `Location: ${temple.location}`;
  
	const templeDedicated = document.createElement('p');
	templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
  
	const templeArea = document.createElement('p');
	templeArea.textContent = `Area: ${temple.area} sq ft`;
  
	templeDetails.appendChild(templeName);
	templeDetails.appendChild(templeLocation);
	templeDetails.appendChild(templeDedicated);
	templeDetails.appendChild(templeArea);
	templeElement.appendChild(templeDetails);
	templeElement.appendChild(templeImage);
	
  
	return templeElement;
  }
  
  function filterTemples(filterType) {
    templesContainer.innerHTML = ''; 

    const filteredTemples = temples.filter(temple => {
        switch (filterType) {
            case 'all':
                return true;
            case 'old':                
                return new Date(temple.dedicated) < new Date('1990-01-01'); 
            case 'new':                
                return new Date(temple.dedicated) > new Date('2010-01-01'); 
            case 'large':
                return temple.area > 90000; 
            case 'small':
                return temple.area < 15000; 
            default:
                return true; 
        }
    });

    filteredTemples.forEach(temple => {
        const templeElement = createTempleElement(temple);
        templesContainer.appendChild(templeElement);
    });
}


filterTemples('all');


const navigationLinks = document.querySelectorAll('.navigation a');
navigationLinks.forEach(link => {
    link.addEventListener('click',   
 () => {
        const filterType = link.id.split('-')[0];
        filterTemples(filterType);
    });
});


