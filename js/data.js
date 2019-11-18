const trucks = [
    {
        name: "Burito Republic",
        tel: "+37068734341",
        email: "foodtruck1@gmail.com",
    },

    {
        name: "John's burgers",
        tel: "+37068734342",
        email: "foodtruck2@gmail.com",
    },

    {
        name: "Yoko sushi",
        tel: "+37068734343",
        email: "foodtruck3@gmail.com",
    },
];

const menu = {


    sushies: [
        {
            image: '../img/sushi/sushi1masago.png',
            title: 'Masago',
            description: 'Masago caviar, crab sticks, cucumber, sesame'
        },
        {
            image: '../img/sushi/sushi2California.png',
            title: 'California',
            description: 'Masago caviar, crab sticks, avocado, creme'
        },
        {
            image: '../img/sushi/sushi3philadelphia.png',
            title: 'Philadelphia',
            description: 'Salmon, crab sticks, cucumber, creme'
        },
        {
            image: '../img/sushi/sushi4ebi-masago.png',
            title: 'Ebi-Masago',
            description: 'Tiger shrimp, avocado, cucumber, masago caviar, creme'
        },
        {
            image: '../img/sushi/sushi5canada.png',
            title: 'Canada',
            description: 'Eel, cucumber, salmon, creme, sesame'
        },
        {
            image: '../img/sushi/sushi6kioto.png',
            title: 'Kioto',
            description: 'Eel, crab sticks, masago caviar, tempura, mayo, sesame'
        }
    ],


    soups: [
        {
            image: '../img/sushi/sriubos/sriuba1miso.png',
            title: 'Miso',
            description: 'Miso, wakame seaweed, tofu cheese, shiitake mushroom'
        },
        {
            image: '../img/sushi/sriubos/sriuba2lasisos.png',
            title: 'Salmon',
            description: 'Boiled salmon, rice pasta, wakame seaweed, zucchini, paprika'
        },
        {
            image: '../img/sushi/sriubos/sriuba3darzoviu.png',
            title: 'Vegetable',
            description: 'Salmon broth, pasta, paprika, zucchini, chilli mix, shrimp'
        },
        {
            image: '../img/sushi/sriubos/sriuba4juros.png',
            title: 'Seafood',
            description: 'Miso broth, wakame seaweed, rice, seafood'
        },
        {
            image: '../img/sushi/sriubos/sriuba5vistienos.png',
            title: 'Chicken',
            description: 'Vištienos filė, ryžių makaronai, cukinija, svogūnų laiškai, čili, kokosų pienas'
        }
    ],

    tacos: [
        {
            image: '../img/tacos/taco1.png',
            title: 'Burito',
            description: 'Corn, chicken, avocado, beans, rice'
        },
        {
            image: '../img/tacos/taco2.png',
            title: 'Fahita',
            description: 'Corn, cheese, avocado, beans, rice'
        },
        {
            image: '../img/tacos/taco3.png',
            title: 'Burito plate',
            description: 'Corn, chicken, avocado, beans, rice, brocoly'
        },
        {
            image: '../img/tacos/taco4.png',
            title: 'Tacos',
            description: 'Corn, chicken, avocado, beans, rice, tomato, jelapeno'
        }
    ],

    burgers: [
        {
            image: '../img/burgers/burg1.png',
            title: 'Pulled pork',
            description: 'Pulled pork, paprika, spinach, butter bun, mayo'
        },
        {
            image: '../img/burgers/burg2.png',
            title: 'Double cheese',
            description: 'Extra cheese, tomato, letuce, beef, onion, sesame bun, mayo'
        },
        {
            image: '../img/burgers/burg3.png',
            title: 'Onion delight',
            description: 'Extra onion, cheese, tomato, letuce, beef, sesame bun, mayo'
        },
        {
            image: '../img/burgers/burg4.png',
            title: 'Pickle heaven',
            description: 'Pickles, cheese, tomato, beef'
        },
        {
            image: '../img/burgers/burg5.png',
            title: 'Deluxe',
            description: 'Juicy beef, pickles, cheese, tomato, letuce, sesame bun, mayo'
        }
    ],


};


// ******************** ABOUT US start ********************
const aboutus = [
    {
        images: [
            {img: './img/buritos/1.jpg', alt: 'Photo'},
            {img: './img/buritos/2.jpg', alt: 'Photo'},
            {img: './img/buritos/3.jpg', alt: 'Photo'},
            {img: './img/buritos/4.jpg', alt: 'Photo'},
            {img: './img/buritos/5.jpg', alt: 'Photo'},
            {img: './img/buritos/6.jpg', alt: 'Photo'},
            {img: './img/buritos/7.jpg', alt: 'Photo'},
            {img: './img/buritos/8.jpg', alt: 'Photo'}
        ],
        title: 'Burito Republic   ',
        text: 'Tacos, quesadillas, burritos, enchiladas... Made with love using the best ingredients to create authentic, home-style cuisine! We are waiting for YOU here!'
    },
    {
        images: [
            {img: './img/burger/1.jpg', alt: 'Photo'},
            {img: './img/burger/2.jpg', alt: 'Photo'},
            {img: './img/burger/3.jpg', alt: 'Photo'},
            {img: './img/burger/4.jpg', alt: 'Photo'},
            {img: './img/burger/5.jpg', alt: 'Photo'},
            {img: './img/burger/6.jpg', alt: 'Photo'},
            {img: './img/burger/7.jpg', alt: 'Photo'},
            {img: './img/burger/8.jpg', alt: 'Photo'},
            {img: './img/burger/9.jpg', alt: 'Photo'},
            {img: './img/burger/10.jpg', alt: 'Photo'},
            {img: './img/burger/11.jpg', alt: 'Photo'},
            {img: './img/burger/12.jpg', alt: 'Photo'},
            {img: './img/burger/13.jpg', alt: 'Photo'},
            {img: './img/burger/14.jpg', alt: 'Photo'},
            {img: './img/burger/15.jpg', alt: 'Photo'},
            {img: './img/burger/16.jpg', alt: 'Photo'},
            {img: './img/burger/17.jpg', alt: 'Photo'},
            {img: './img/burger/18.jpg', alt: 'Photo'},
            {img: './img/burger/19.jpg', alt: 'Photo'}
        ],
        title: "JOHN'S BURGERS   ",
        text: 'Every Burger is made with fresh, never frozen beef and always seared after you order. Then we top it with a lightly buttered, toasted bun. Order your favorite in a Single, Double or Triple and we’ll build the perfect burger just for you. Your choice, our pleasure!'
    },
    {
        images: [
            {img: './img/sushi/1.jpg', alt: 'Photo'},
            {img: './img/sushi/2.jpg', alt: 'Photo'},
            {img: './img/sushi/3.jpg', alt: 'Photo'},
            {img: './img/sushi/4.jpg', alt: 'Photo'},
            {img: './img/sushi/5.jpg', alt: 'Photo'},
            {img: './img/sushi/6.jpg', alt: 'Photo'},
            {img: './img/sushi/7.jpg', alt: 'Photo'}
        ],
        title: 'Yoko Sushi   ',
        text: ' was founded by our chef Mr Yoko Chhing N Shirman. After gaining experience at various restaurants in his younger years, he created Yoko Sushi. Yoko Sushi has continued serving high quality sushi to Vilnius, going on to win the award for Most Loved Sushi.'
    }
];
// ********************ABOUT US end ********************


// ********************Special offers start******************

const specialOffers = [
    {
        img: './img/BuritoLogo.png',
        name: 'Burito',
        price: '9.99 €',
        special1: '2 x Buritos',
        special2: '2 x 0,33L Coca-Cola',
        special3: '2 x Desserts',
        input: 'Order Now',
        FullMeniu: 'Visit full meniu'
    },
    {
        img: './img/BurgerLogo.png',
        name: 'Burger',
        price: '8.99 €',
        special1: '2 x Burgers',
        special2: '2 x 0,33L Coca-Cola',
        special3: '2 x Desserts',
        input: 'Order Now',
        FullMeniu: 'Visit full meniu'
    },
    {
        img: './img/sushilogo.png',
        name: 'Sushi',
        price: '12.99 €',
        special1: '20 x Sushi',
        special2: '2 x 0,33L Coca-Cola',
        special3: '2 x Desserts',
        input: 'Order Now',
        FullMeniu: 'Visit full meniu'
    },
];

// ********************Special offers end********************

// ********************Map start********************

let = [
     x = 600,
     y = 400,
]

let = [
    x1 = 710,
    y1 = 340,
]

let = [
    x2 = 850,
    y2 = 450,
]



// ********************Map end********************