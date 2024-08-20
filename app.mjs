// will be splitting this out into modules
// maybe use each nav item as a diff module
// also pull out the functions?

// menus
// about / location
// catering
// specials

import { drinks, bakedGoods } from "./menu.mjs";
import { cafeOwners, location, phone } from ",/about.mjs";
import { cafeImages } from "./images.mjs";
import { cateringPackages, bulkBakedGoods, cateringBeverages } from "./catering.mjs";
import { specials } from "./specials.mjs";

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
  const specialsContainer = document.querySelector('.contentSwapContainer');  // I probably don't eed to do this, but creating a container for specials specifically
  specialsContainer.innerHTML = ""; // Clear existing content

  if (specials.length === 0) {
    console.error("Check back soon for a new SPECIALS MENU!");  // error check in case there are none
    return;
  }

  specials.forEach(special => {
    const specialDiv = document.createElement('div');
    specialDiv.classList.add('special');

    // create Day headings
    const dayElement = document.createElement('h3');
    dayElement.textContent = special.day;

    // create special description paragraphs
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = special.description;

    // Append elements to the specialDiv
    specialDiv.appendChild(dayElement);
    specialDiv.appendChild(descriptionElement);

    // Append specialDiv to the container
    specialContainer.appendChild(specialDiv);
  });

  console.log("Specials OK");
}

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