// will be splitting this out into modules
// maybe use each nav item as a diff module
// also pull out the functions?

// menus
// about / location
// catering
// specials
import { drinks, bakedGoods } from './menu.mjs';
import { specials } from './specials.mjs';
import { cateringPackages, bulkBakedGoods, cateringBeverages } from './catering.mjs';
import { cafeOwners, location, phone } from './about.mjs';

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
  const contentSwapContainer = document.querySelector('.contentSwapContainer');
  contentSwapContainer.innerHTML = '';

  // Drinks Menu
  const drinksMenuHtml = drinks.map(drink => {
    return `
      <h3>${drink.name}</h3>
      <p>${drink.description}</p>
      <ul>
        ${drink.prices.map(price => {
      return `<li>${price.size} (${price.ounces}oz): $${price.price}</li>`;
    }).join('')}
      </ul>
    `;
  }).join('');

  // Baked Goods Menu
  const bakedGoodsMenuHtml = bakedGoods.map(item => {
    if (item.prices) {
      return `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <ul>
          ${item.prices.map(price => {
        return `<li>${price.type}: $${price.price}</li>`;
      }).join('')}
        </ul>
      `;
    } else {
      return `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p>$${item.price}</p>
      `;
    }
  }).join('');

  // Append menus to the contentSwapContainer
  contentSwapContainer.innerHTML += `
    <h2>Drinks Menu</h2>
    ${drinksMenuHtml}
    <h2>Baked Goods Menu</h2>
    ${bakedGoodsMenuHtml}
  `;
};

function loadCatering() {
  const contentSwapContainer = document.querySelector('.contentSwapContainer');
  contentSwapContainer.innerHTML = '';

  // Drinks Menu
  const cateringdrinks = cateringBeverages.map(cateringBeverages => {
    return `
        <h3>${cateringBeverages.name}</h3>
        <p>${cateringBeverages.description}</p>
        <p>Price: ${cateringBeverages.price}</p>
        <p>Serves: ${cateringBeverages.serves}</p>
      `;
  }).join('');

  // Baked Goods Menu
  const bulkbakedGoodsMenu = bulkBakedGoods.map(item => {
    return `
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p>Price: ${item.price}</p>
          <p>Serves: ${item.serves}</p>
      `;
  }).join('');

  // Catering Packages Menu
  const cateringPackagesMenu = cateringPackages.map(item => {
    return `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Price: ${item.price}</p>
            <p>Serves: ${item.serves}</p>
        `;
  }).join('');

  // Append menus to the contentSwapContainer
  contentSwapContainer.innerHTML += `
      <h2>Catering Drinks Menu</h2>
      ${cateringdrinks}
      <h2>Catering Baked Goods Menu</h2>
      ${bulkbakedGoodsMenu}
      <h2>Catering Packages Menu</h2>
      ${cateringPackagesMenu}
    `
};

// About "page"
function loadAbout() {
  const aboutContainer = document.querySelector('.contentSwapContainer');
  aboutContainer.innerHTML = ""; // Clear existing content
  // Append menus to the contentSwapContainer
  aboutContainer.innerHTML += `
<h2>Owned and operated by:</h2>
${cafeOwners}
<h2>Visit Us:</h2>
${location}
<h2>Have questions? Call us:</h2>
${phone}
<p>We can't wait to meet you!</p>
`
};