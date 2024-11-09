const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = ` ${today.getFullYear()}`;


const last = document.querySelector("#lastModified");
last.innerHTML =  ` ${(document.lastModified)}`;
