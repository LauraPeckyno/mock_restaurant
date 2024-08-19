// specials
// include the days of the week with the times and specials for each
const specials = [
    {
        day: "Monday",
        description: "Half price lattes",
        discount: {
            type: "percentage",
            value: 50,
            appliesTo: "Lattes"
        }
    },
    {
        day: "Tuesday",
        description: "BOGO muffins",
        discount: {
            type: "buyOneGetOneFree",
            appliesTo: "Muffins"
        }
    },
    {
        day: "Wednesday",
        description: "Half price Tea",
        discount: {
            type: "percentage",
            value: 50,
            appliesTo: "Tea"
        }
    },
    {
        day: "Thursday",
        description: "Free large drip with purchase",
        discount: {
            type: "freeItem",
            item: "Large Drip Coffee",
            condition: "with purchase"
        }
    },
    {
        day: "Friday",
        description: "Half price croissant",
        discount: {
            type: "percentage",
            value: 50,
            appliesTo: "Croissant"
        }
    },
    {
        day: "Saturday",
        description: "Half price scone with any cappuccino",
        discount: {
            type: "percentage",
            value: 50,
            appliesTo: "Scone",
            condition: "with Cappuccino purchase"
        }
    },
    {
        day: "Sunday",
        description: "$0.50 off cake",
        discount: {
            type: "fixedAmount",
            value: 0.50,
            appliesTo: "Cake"
        }
    }
];

export { specials }
