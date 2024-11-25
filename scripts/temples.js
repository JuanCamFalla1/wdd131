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