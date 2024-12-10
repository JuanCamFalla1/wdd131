const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = ` ${today.getFullYear()}`;

const last = document.querySelector("#lastModified");
last.innerHTML =  ` ${(document.lastModified)}`;


const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];


  const productSelect = document.getElementById('pname');

// Loop through products and add options to the select element
products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id;
  option.text = product.name;
  productSelect.appendChild(option);
});



let reviewCount = localStorage.getItem('reviewCount');

// If no count exists, initialize it to 0
if (!reviewCount) {
  reviewCount = 0;
} else {
  // Parse the stored count as an integer
  reviewCount = parseInt(reviewCount);
}