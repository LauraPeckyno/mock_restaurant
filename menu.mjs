// menu 
// include drinks and baked goods

const drinks = [
    {
        name: "Cappuccino",
        description: "A rich espresso shot topped with a layer of velvety steamed milk and a sprinkle of foam.",
        prices: [
            { size: "Small", ounces: 12, price: 4.50 },
            { size: "Medium", ounces: 16, price: 5.00 },
            { size: "Large", ounces: 20, price: 5.50 }
        ],
        category: "Espresso-Based Drinks"
    },
    {
        name: "Latte",
        description: "A smooth espresso shot blended with steamed milk and topped with a sprinkle of foam.",
        prices: [
            { size: "Small", ounces: 12, price: 4.25 },
            { size: "Medium", ounces: 16, price: 4.75 },
            { size: "Large", ounces: 20, price: 5.25 }
        ],
        category: "Espresso-Based Drinks"
    },
    {
        name: "Mocha",
        description: "A decadent espresso shot blended with steamed milk and rich chocolate syrup, topped with whipped cream and chocolate shavings.",
        prices: [
            { size: "Small", ounces: 12, price: 5.00 },
            { size: "Medium", ounces: 16, price: 5.50 },
            { size: "Large", ounces: 20, price: 6.00 }
        ],
        category: "Espresso-Based Drinks"
    },
    {
        name: "House Blend Coffee",
        description: "Our signature blend of Arabica beans, roasted to perfection.",
        prices: [
            { size: "Small", ounces: 12, price: 2.00 },
            { size: "Medium", ounces: 16, price: 2.50 },
            { size: "Large", ounces: 20, price: 3.00 }
        ],
        category: "Drip Coffee and Tea"
    },
    {
        name: "Artisan Tea",
        description: "A selection of loose-leaf teas, steeped to order.",
        prices: [
            { size: "Small", ounces: 12, price: 2.50 },
            { size: "Medium", ounces: 16, price: 3.00 },
            { size: "Large", ounces: 20, price: 3.50 }
        ],
        category: "Drip Coffee and Tea"
    },
    {
        name: "Caramel Macchiato",
        description: "A shot of espresso 'marked' with a drizzle of caramel syrup and steamed milk.",
        prices: [
            { size: "Small", ounces: 12, price: 4.75 },
            { size: "Medium", ounces: 16, price: 5.25 },
            { size: "Large", ounces: 20, price: 5.75 }
        ],
        category: "Specialty Drinks"
    },
    {
        name: "Chai Latte",
        description: "A spiced black tea blend steamed with milk and topped with a sprinkle of cinnamon.",
        prices: [
            { size: "Small", ounces: 12, price: 4.25 },
            { size: "Medium", ounces: 16, price: 4.75 },
            { size: "Large", ounces: 20, price: 5.25 }
        ],
        category: "Specialty Drinks"
    }
];

const bakedGoods = [
    {
        name: "Blueberry Muffin",
        description: "Fresh blueberries and a hint of sugar in a moist and fluffy muffin.",
        price: 2.75,
        category: "Muffins and Scones"
    },
    {
        name: "Cranberry Orange Scone",
        description: "Dried cranberries and orange zest add a burst of flavor to this buttery scone.",
        price: 3.25,
        category: "Muffins and Scones"
    },
    {
        name: "Vanilla Bean Cake",
        description: "A classic vanilla cake infused with the sweetness of vanilla beans.",
        prices: [
            { type: "Slice", price: 3.50 },
            { type: "Whole Cake", price: 25.00 }
        ],
        category: "Cakes and Cupcakes"
    },
    {
        name: "Chocolate Cupcake",
        description: "Rich, mocha-flavored cake topped with a swirl of creamy chocolate frosting.",
        price: 3.25,
        category: "Cakes and Cupcakes"
    },
    {
        name: "Almond Croissant",
        description: "Flaky, buttery croissant filled with a sweet almond cream.",
        price: 3.00,
        category: "Pastries and Cookies"
    },
    {
        name: "Chocolate Chip Cookie",
        description: "Soft-baked cookie filled with dark chocolate chips.",
        price: 2.50,
        category: "Pastries and Cookies"
    }
];

function createMenu() {
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
  }
  createMenu();


export { drinks, bakedGoods }