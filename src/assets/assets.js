import logo1 from "./logo1.png";
import food from "./food.png";
import sample from "./sample.png";
import white from "./white.png";
import stageCafe from "./stageCafe.jpg";
import Savouries from "./Savouries1.png";
import bread from "./bread.jpeg"
import Catering1 from "./Catering1.jpg"
import Catering2 from "./Catering2.jpg"
import Birthday from "./Birthday.png"
import CupCake from "./CupCake.png"
import WeddingCake from "./WeddingCake.png"

export const assets = {
  logo1,
  food,
  sample,
  white,
  stageCafe,
  Savouries,
  bread,
  Catering1,
  Catering2,
  WeddingCake,
  CupCake,
  Birthday

};

export const menu = [
  {
    category: "Cakes & Sweet Treats",
    subcategories: [
      {
        name: "All Cakes",
        products: [] // will auto-fill below
      },
      {
        name: "Chocolate Cakes",
        products: [
          {
            id: 1,
            name: "Chocolate Cake",
            price: "3,000.00",
            image: sample,
          },
          {
            id: 4,
            name: "Black Forest Cake",
            price: "2,500.00",
            image: sample,
          }
        ],
      },
      {
        name: "Red Velvet",
        products: [
          {
            id: 2,
            name: "Red Velvet Cake",
            price: "2,800.00",
            image: sample,
          }
        ],
      },
      {
        name: "Cheesecake",
        products: [
          {
            id: 3,
            name: "Cheesecake",
            price: "3,200.00",
            image: sample,
          }
        ],
      },
      {
        name: "Fruity Cakes",
        products: [
          {
            id: 5,
            name: "Fruit Cake",
            price: "2,700.00",
            image: sample,
          }
        ],
      },
      // You can add other subcategories similarly
    ],
  },
  {
    category: "Savouries",
    subcategories: [
      {
        name: "All Savouries",
        products: [], // Add savouries products here later
      },
      {
        name: "Bread",
        products: [
          {
            id: 5,
            name: "Bread",
            price: "220.00",
            image: bread,
          }
        ],
      },
      {
        name: "Patties",
        products: [],
      }
    ],
  },
  {
    category: "Lunch",
    subcategories: [
      {
        name: "All Lunch Items",
        products: [],
      },
      {
        name: "Rice",
        products: [
          {
            id: 5,
            name: "Egg Rice",
            price: "900.00",
            image: food,
          }
        ],
      },
      {
        name: "Sawan",
        products: [],
      },
    ],
  },
  {
    category: "Drinks",
    subcategories: [
      {
        name: "All Drinks",
        products: [],
      },
      {
        name: "Chilled Drinks",
        products: [],
      },
    ],
  },
  {
    category: "Bread",
    subcategories: [],
  },
  {
    category: "Seasonal Special",
    subcategories: [],
  },
];
