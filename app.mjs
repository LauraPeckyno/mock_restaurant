// will be splitting this out into modules
// maybe use each nav item as a diff module
// also pull out the functions?

// menus
// about / location
// catering
// specials

import {specials} from './specials.mjs';

// Buttons
const menuBtn = document.querySelector(".menu"); // menus
const aboutBtn = document.querySelector(".about"); // about
const cateringBtn = document.querySelector(".catering"); // catering
const specialsBtn = document.querySelector(".specials"); // specials

// Button event listeners
menuBtn.addEventListener("click", loadMenu); // menus
aboutBtn.addEventListener("click", loadAbout); // about
cateringBtn.addEventListener("click", loadCatering); // catering
specialsBtn.addEventListener("click", loadSpecials); // specials

// Menu function to take all the specials from the module and add them to the div
function loadSpecials() {
  const specialsContainer = document.querySelector('.contentSwapContainer');  
  specialsContainer.innerHTML = ""; // Clear existing content

  specials.forEach(special => {  
    const specialDiv = document.createElement('div');
    specialDiv.classList.add('special');
    
    // Create Day headings
    const dayElement = document.createElement('h3');
    dayElement.textContent = special.day;

    // Create special description paragraphs
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = special.description;

    // Append elements to the specialDiv
    specialDiv.appendChild(dayElement);
    specialDiv.appendChild(descriptionElement);

    // Append specialDiv to the container
    specialsContainer.appendChild(specialDiv); 
  });
};
// TO DO!
function loadMenu() {
  // TO DO: implement menu 
}

function loadAbout() {
  // TO DO: implement about
}

function loadCatering() {
  // TO DO: implement catering
}