// catering
// include the menu items and prices

const cateringBeverages = [
    {
        name: "Coffee",
        description: "Our House Blend Coffee, served in a large thermos.",
        serves: "8-10",
        price: 15.00,
        category: "Bulk Drink Orders"
    },
    {
        name: "Tea",
        description: "A selection of our Artisan Teas, served in a large thermos.",
        serves: "8-10",
        price: 20.00,
        category: "Bulk Drink Orders"
    },
    {
        name: "Espresso",
        description: "A shot of our rich espresso, served in a large carafe.",
        serves: "8-10",
        price: 30.00,
        category: "Bulk Drink Orders"
    }
];

const bulkBakedGoods = [
    {
        name: "Muffin Platter",
        description: "A selection of our freshly baked muffins, perfect for a meeting or event.",
        quantity: "dozen",
        price: 40.00,
        category: "Bulk Baked Goods"
    },
    {
        name: "Cake",
        description: "Our Vanilla Bean Cake or Chocolate Cupcake, available in bulk for special occasions.",
        quantity: "dozen",
        price: 60.00,
        category: "Bulk Baked Goods"
    },
    {
        name: "Pastry Platter",
        description: "A selection of our flaky pastries and cookies, perfect for a breakfast or snack.",
        quantity: "dozen",
        price: 50.00,
        category: "Bulk Baked Goods"
    }
];

const cateringPackages = [
    {
        name: "Breakfast Package",
        description: "A selection of our baked goods, coffee, and tea, perfect for a morning meeting or event.",
        serves: "8-10",
        price: 100.00,
        category: "Catering Packages"
    },
    {
        name: "Afternoon Package",
        description: "A selection of our baked goods, coffee, and tea, perfect for an afternoon meeting or event.",
        serves: "8-10",
        price: 120.00,
        category: "Catering Packages"
    }
];

export { cateringPackages, bulkBakedGoods, cateringBeverages }

