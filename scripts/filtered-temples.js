const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = ` ${today.getFullYear()}`;

const last = document.querySelector("#lastModified");
last.innerHTML =  ` ${(document.lastModified)}`;


//Dynamic Nav

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const templesContainer = document.querySelector('.temple-container');

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
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
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Cochabamba Bolivia Temple",
		location: "Cochabamba, Bolivia",
		dedicated: "30 April 2000",
		area: 35500,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/cochabamba-bolivia-temple/cochabamba-bolivia-temple-13702-thumb.jpg"
	  },
	  {
		templeName: "Barranquilla Colombia Temple",
		location: "Barranquilla, Colombia",
		dedicated: "9 December 2018",
		area: 25349,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-1846-thumb.jpg"
	  },
	  {
		templeName: "São Paulo Brazil Temple",
		location: "São Paulo, SP",
		dedicated: "22 February 2004",
		area: 59246,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-46814-thumb.jpg"
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