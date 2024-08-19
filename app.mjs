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

// menu function to take all the items form the module and add them to the div

  // Specials Menu
const specialsMenuHtml = specials.map(special => {
    return `
      <h3>${special.day}</h3>
      <p>${special.description}</p>
    `;
  }).join('');
  
  // Append specials to contentSwapContainer
  contentSwapContainer.innerHTML += `
    <h2>Specials Menu</h2>
    ${specialsMenuHtml}
  `;

