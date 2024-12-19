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

const Historycontainer = document.querySelector('.history-container');

const information = [
	{
	  cardname: "Tiquipaya Beggining",
	  history: "The first indications of the origins of Tiquipaya date back to the 13th century, when the area was habited by Aymara people who lived in settlemens.",
	  date: "Between the 13th century",
	  picturename: "Graphics from the past",
	  imageUrl:
	  "https://raw.githubusercontent.com/JuanCamFalla1/wdd131/refs/heads/main/project/images/image-1.jpg"
	},
	{
	  cardname: "Stablishment",
	  history: "in 1957 Tiquipaya was officially designated as a land grant under the name San Miguel de Tiquipaya and was given a specific amount of land to work. (1403.60 km2) ",
	  date: "1957, Sep, 23",
	  picturename: "The land to the Future",
	  imageUrl:
	  "https://raw.githubusercontent.com/JuanCamFalla1/wdd131/refs/heads/main/project/images/image-5.jpg"
	},
	{
	  cardname: "What is known For...",
	  history: "Tiquipaya is initially known for being a land that calls for adventure; its tourism and gastronomic tradition have left a mark on the culture of its people they enjoy everything that  comes from mother nature. ",
	  date: "Between the 2000's",
	  picturename: "Chorizo Sandwich",
	  imageUrl:
	  "https://raw.githubusercontent.com/JuanCamFalla1/wdd131/refs/heads/main/project/images/image-3.JPG"
	},
	{
	  cardname: "Main Town",
	  history: "The heart of Tiquipaya is its city hall, a reminder of its beginnings and the saints who guide the city, in addition to the beauty of its slogan plus the weather that toghether form this land full of flowers.",
	  date: "year 2010",
	  picturename: "San Miguel Angel",
	  imageUrl:
	  "https://raw.githubusercontent.com/JuanCamFalla1/wdd131/refs/heads/main/project/images/image-4.jpg"
	},
	{
	  cardname: "Now ",
	  history: "Among the most important activities in Tiquipaya are the celebration of Saint Michael the Archangel , the Trout Fair , and the Flower Fair. all of them yearly expiriencies to enjoy",
	  date: "Dates back to their origins",
	  picturename: "vanilla ice cream",
	  imageUrl:
	  "https://raw.githubusercontent.com/JuanCamFalla1/wdd131/refs/heads/main/project/images/image-2.JPG"
	},
	
	// Add more data objects here...
  ];

  function createDataElement(data) {
	
	const dataElement = document.createElement('div');
	dataElement.classList.add('data');
  
	const dataImage = document.createElement('img');
	dataImage.src = data.imageUrl;
	dataImage.alt = data.dataName;
	dataImage.setAttribute ("loading", "lazy");
  
	const dataDetails = document.createElement('div');
	dataDetails.classList.add('data-details');
  
	const dataName = document.createElement('h3');
	dataName.textContent = data.cardname;
  
	const dataLocation = document.createElement('p');
	   
  
	dataLocation.textContent = ` ${data.history}`;
  
	const dataDedicated = document.createElement('p');
	dataDedicated.textContent = `Date: ${data.date}`;
  
	const dataArea = document.createElement('p');
	dataArea.textContent = `Picture: ${data.picturename}`;
  
	dataDetails.appendChild(dataName);
	dataDetails.appendChild(dataLocation);
	dataDetails.appendChild(dataDedicated);
	dataDetails.appendChild(dataArea);
	dataElement.appendChild(dataDetails);
	dataElement.appendChild(dataImage);
	
  
	return dataElement;
  }
  
  function filterDatas(filterType) {
    Historycontainer.innerHTML = ''; 

    const filteredDatas = information.filter(data => {
        switch (filterType) {
            case 'all':
                return true;
            case 'old':                
                return new Date(data.dedicated) < new Date('1990-01-01'); 
            case 'new':                
                return new Date(data.dedicated) > new Date('2010-01-01'); 
            case 'large':
                return data.area > 90000; 
            case 'small':
                return data.area < 15000; 
            default:
                return true; 
        }
    });

    filteredDatas.forEach(data => {
        const dataElement = createDataElement(data);
        Historycontainer.appendChild(dataElement);
    });
}


filterDatas('all');


