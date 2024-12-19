const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = ` ${today.getFullYear()}`;

const last = document.querySelector("#lastModified");
last.innerHTML =  ` ${(document.lastModified)}`;


const products = [
    {
      id: "reason1",
      name: "Interested",      
    },
    {
      id: "",
      name: "",      
    },
    {
      id: "",
      name: "",      
    },
    {
      id: "",
      name: "",      
    },
    {
      id: "",
      name: "",      
    }
];


const productSelect = document.getElementById('pname');


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