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







//footer 

const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = ` ${today.getFullYear()}`;


const last = document.querySelector("#lastModified");
last.innerHTML =  ` ${(document.lastModified)}`;
