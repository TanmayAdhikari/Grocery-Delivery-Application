const groceryItems = [
  {
    id: 1,
    name: "Organic Bananas",
    image: '/banana.jpg',
    price: 0.99,
    description: "Fresh organic bananas, perfect for a healthy snack.",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Almond Milk",
    image: "/almond-milk.jpg",
    price: 2.99,
    description: "Unsweetened almond milk, dairy-free and delicious.",
    rating: 3.5,
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    image: "/whole-wheat-bread.jpg",
    price: 3.49,
    description: "Soft and healthy whole wheat bread, great for sandwiches.",
    rating: 2.7,
  },
  {
    id: 4,
    name: "Eggs (Dozen)",
    image: "/eggs.jpg",
    price: 2.79,
    description: "Cage-free eggs, rich in protein and essential nutrients.",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Greek Yogurt",
    image: "/green-yogurt.jpg",
    price: 1.99,
    description: "Thick and creamy Greek yogurt, high in protein.",
    rating: 1.6,
  },
  {
    id: 6,
    name: "Chicken Breast",
    image: "/chicken-breasth.jpg",
    price: 5.99,
    description: "Boneless, skinless chicken breast, lean and healthy.",
    rating: 4.7,
  },
  {
    id: 7,
    name: "Broccoli",
    image: "/brocoil.jpg",
    price: 1.69,
    description: "Fresh broccoli florets, perfect for steaming or roasting.",
    rating: 4.8,
  },
  {
    id: 8,
    name: "Cheddar Cheese",
    image: "/cheddar-cheese.jpg",
    price: 4.49,
    description: "Sharp cheddar cheese, great for sandwiches and snacks.",
    rating: 3.2,
  },
  {
    id: 9,
    name: "Peanut Butter",
    image: "/peanut-butter.jpg",
    price: 3.99,
    description: "Creamy peanut butter, perfect for spreading on toast.",
    rating: 2.6,
  },
  {
    id: 10,
    name: "Apples (Fuji)",
    image: "/apples.jpg",
    price: 1.29,
    description: "Crisp and sweet Fuji apples, great for snacking.",
    rating: 4.8,
  },
  {
    id: 11,
    name: "Quinoa",
    image: "/quinoa.jpg",
    price: 4.29,
    description: "Organic quinoa, a healthy alternative to rice.",
    rating: 4.7,
  },
  {
    id: 12,
    name: "Spinach",
    image: "/spincach.jpg",
    price: 2.49,
    description: "Fresh spinach leaves, packed with iron and vitamins.",
    rating: 3.8,
  },
  {
    id: 13,
    name: "Salmon Fillet",
    image: "/salmon-fillet.jpg",
    price: 9.99,
    description: "Wild-caught salmon fillet, rich in omega-3 fatty acids.",
    rating: 4.9,
  },
  {
    id: 14,
    name: "Avocado",
    image: "/avocado.jpg",
    price: 1.49,
    description: "Creamy avocado, perfect for toast and salads.",
    rating: 4.8,
  },
  {
    id: 15,
    name: "Brown Rice",
    image: "/brown-rice.jpg",
    price: 2.79,
    description: "Whole grain brown rice, a healthy side dish option.",
    rating: 2.6,
  },
  {
    id: 16,
    name: "Almonds",
    image: "/almonds.jpg",
    price: 6.99,
    description: "Raw almonds, a great source of healthy fats.",
    rating: 4.7,
  },
  {
    id: 17,
    name: "Carrots",
    image: "/carrots.jpg",
    price: 1.29,
    description: "Fresh carrots, perfect for snacking or cooking.",
    rating: 1.8,
  },
  {
    id: 18,
    name: "Tomato Sauce",
    image: "/tomato-sauce.jpg",
    price: 2.49,
    description: "Rich and flavorful tomato sauce, ideal for pasta dishes.",
    rating: 3.6,
  },
  {
    id: 19,
    name: "Frozen Blueberries",
    image: "/frozen-blueberries.jpg",
    price: 3.99,
    description: "Frozen organic blueberries, perfect for smoothies.",
    rating: 4.8,
  },
  {
    id: 20,
    name: "Oats",
    image: "/oats.jpg",
    price: 2.49,
    description: "Whole rolled oats, great for a healthy breakfast.",
    rating: 4.7,
  },
  {
    id: 21,
    name: "Pasta (Whole Wheat)",
    image: "/pasta.jpg",
    price: 1.99,
    description: "Whole wheat pasta, a healthier alternative to regular pasta.",
    rating: 3.2,
  },
  {
    id: 22,
    name: "Honey",
    image: "/honey.jpg",
    price: 5.49,
    description: "Organic honey, perfect for sweetening tea or yogurt.",
    rating: 4.8,
  },
  {
    id: 23,
    name: "Cucumber",
    image: "/cucumber.jpg",
    price: 0.99,
    description: "Fresh cucumber, crisp and hydrating.",
    rating: 2.7,
  },
  {
    id: 24,
    name: "Mixed Nuts",
    image: "/mixed-nuts.jpg",
    price: 8.99,
    description: "A blend of almonds, cashews, and walnuts.",
    rating: 4.8,
  },
  {
    id: 25,
    name: "Dark Chocolate",
    image: "/dark-chocolate.jpg",
    price: 3.49,
    description: "Rich dark chocolate, perfect for a sweet treat.",
    rating: 4.9,
  },
  {
    id: 26,
    name: "Butter",
    image: "/butter.jpg",
    price: 3.79,
    description: "Unsalted butter, great for baking and cooking.",
    rating: 3.7,
  },
  {
    id: 27,
    name: "Lettuce",
    image: "/lettuce.jpg",
    price: 1.29,
    description: "Crisp lettuce, ideal for salads and sandwiches.",
    rating: 1.6,
  },
  {
    id: 28,
    name: "Strawberries",
    image: "/strawberry.jpg",
    price: 4.99,
    description: "Fresh strawberries, sweet and juicy.",
    rating: 4.8,
  },
  {
    id: 29,
    name: "Olive Oil",
    image: "/olive-oil.jpg",
    price: 6.49,
    description: "Extra virgin olive oil, perfect for cooking and dressing.",
    rating: 4.9,
  },
  {
    id: 30,
    name: "Oranges",
    image: "/oranges.jpg",
    price: 0.89,
    description: "Fresh oranges, rich in vitamin C.",
    rating: 2.8,
  },
  {
    id: 31,
    name: "Sweet Potatoes",
    image: "/sweet-potato.jpg",
    price: 1.49,
    description: "Sweet and nutritious sweet potatoes, great for roasting.",
    rating: 3.7,
  },
  {
    id: 32,
    name: "Chia Seeds",
    image: "/chia-seeds.jpg",
    price: 4.29,
    description: "Superfood chia seeds, perfect for adding to smoothies.",
    rating: 4.8,
  },
  {
    id: 33,
    name: "Chicken Thighs",
    image: "/chicken-thighs.jpg",
    price: 4.99,
    description: "Juicy chicken thighs, perfect for grilling or roasting.",
    rating: 4.7,
  },
  {
    id: 34,
    name: "Zucchini",
    image: "/zucchini.jpg",
    price: 1.29,
    description: "Fresh zucchini, great for grilling or adding to stir-fry.",
    rating: 1.9,
  },
  {
    id: 35,
    name: "Coconut Water",
    image: "/coconut-water.jpg",
    price: 2.99,
    description: "Hydrating coconut water, great for post-workout recovery.",
    rating: 4.7,
  },
  {
    id: 36,
    name: "Brown Rice",
    image: "/brown-rice.jpg",
    price: 2.49,
    description: "Organic brown sugar, perfect for baking.",
    rating: 4.9,
  },
  {
    id: 37,
    name: "Cereal",
    image: "/cereal-oats.jpg",
    price: 3.49,
    description: "Whole grain cereal, a healthy breakfast option.",
    rating: 2.3,
  },
  {
    id: 38,
    name: "Ground Beef",
    image: "/ground-beef.jpg",
    price: 6.99,
    description: "Lean ground beef, great for making burgers or tacos.",
    rating: 4.7,
  },
  {
    id: 39,
    name: "Whole Milk",
    image: "/whole-milk.jpg",
    price: 3.49,
    description: "Fresh blueberries, great for snacking or adding to yogurt.",
    rating: 3.4,
  },
  {
    id: 40,
    name: "Butter",
    image: "/butter.jpg",
    price: 3.79,
    description: "Unsalted butter, great for baking and cooking.",
    rating: 2.9,
  },
  {
    id: 41,
    name: "Rice Cakes",
    image: "/rice-cake.jpg",
    price: 2.29,
    description: "Light and crispy rice cakes, great for snacking.",
    rating: 4.6,
  },
  {
    id: 42,
    name: "Tomatoes (Roma)",
    image: "/tomato-roma.jpg",
    price: 1.49,
    description: "Juicy Roma tomatoes, perfect for salads and sauces.",
    rating: 3.7,
  },
  {
    id: 43,
    name: "Canned Tuna",
    image: "/canned-tuna.jpg",
    price: 2.29,
    description: "Sustainably caught tuna, packed in water.",
    rating: 4.7,
  },
  {
    id: 44,
    name: "Cilantro",
    image: "/cilantro.jpg",
    price: 0.89,
    description: "Fresh cilantro, great for adding flavor to dishes.",
    rating: 1.6,
  },
  {
    id: 45,
    name: "Cereal (Oats)",
    image: "/cereal-oats.jpg",
    price: 3.99,
    description: "Healthy oat cereal, perfect for breakfast.",
    rating: 4.7,
  },
  {
    id: 46,
    name: "Soya Sauce",
    image: "/soya-sauce.jpg",
    price: 2.49,
    description: "Rich soy sauce, great for seasoning and marinades.",
    rating: 4.5,
  },
  {
    id: 47,
    name: "Garlic",
    image: "/garlic.jpg",
    price: 0.99,
    description: "Fresh garlic, essential for cooking flavorful dishes.",
    rating: 1.8,
  },
  {
    id: 48,
    name: "Frozen Pizza",
    image: "/frozen-pizza.jpg",
    price: 5.99,
    description: "Delicious frozen pizza, ready in minutes.",
    rating: 4.6,
  },
  {
    id: 49,
    name: "Chocolate Milk",
    image: "/chocolate-milk.jpg",
    price: 2.69,
    description: "Creamy chocolate milk, a tasty treat.",
    rating: 2.7,
  },
  {
    id: 50,
    name: "Butter Lettuce",
    image: "/butter-lettuce.jpg",
    price: 1.99,
    description: "Tender butter lettuce, great for salads and wraps.",
    rating: 3.6,
  }
];

export default groceryItems;