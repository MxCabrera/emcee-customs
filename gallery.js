console.log('it works gallery');

// name spacing app 
const app = {};

// hamburger drop down menu js logic :
app.hamburger = document.querySelector('.hamburger');
app.navLink = document.querySelector('.nav__link');
app.gallery = document.querySelector('.galleryContainer');
app.cart = document.querySelector('.eCart')
app.restored = document.querySelector('.restorationsBox');
app.isolateShoe = [];


// on click that adds a hide class to element
app.hamburger.addEventListener('click', () => {
   app.navLink.classList.toggle('hide');
});

// gallery portfolio array for later use
app.gallerys = [
   {
      name: 'Inuyasha x Inuyasha Demon AF1 Low',
      mainImage: './assets/custom/AF1Inuyasha/IMG_3046-min.JPG',
      images: [
         './assets/custom/AF1Inuyasha/IMG_3030-min.JPG',
         './assets/custom/AF1Inuyasha/IMG_3031-min.JPG',
         './assets/custom/AF1Inuyasha/IMG_3032-min.JPG',
         './assets/custom/AF1Inuyasha/IMG_3033-min.JPG',
         './assets/custom/AF1Inuyasha/IMG_3034-min.JPG',
         './assets/custom/AF1Inuyasha/IMG_3037-min.JPG',
         './assets/custom/AF1Inuyasha/IMG_3042-min.JPG',
         './assets/custom/AF1Inuyasha/IMG_3045-min.JPG',
         './assets/custom/AF1Inuyasha/IMG_3046-min.JPG',
      ],
      description: `A custom hand painted drawing of Inuysha, and the demon form of the main character of his own anime show, "Inuyasha"`
   },
   {
      name: 'Sasuke x Itachi Uchiha AF1 High',
      mainImage:'./assets/custom/AF1UchichaBros/IMG_3147.JPG',
      images: [
         './assets/custom/AF1UchichaBros/IMG_3106.JPG',
         './assets/custom/AF1UchichaBros/IMG_3107.JPG',
         './assets/custom/AF1UchichaBros/IMG_3110.JPG',
         './assets/custom/AF1UchichaBros/IMG_3111.JPG',
         './assets/custom/AF1UchichaBros/IMG_3112.JPG',
         './assets/custom/AF1UchichaBros/IMG_3117.JPG',
         './assets/custom/AF1UchichaBros/IMG_3118.JPG',
         './assets/custom/AF1UchichaBros/IMG_3123.JPG',
         './assets/custom/AF1UchichaBros/IMG_3124.JPG',
         './assets/custom/AF1UchichaBros/IMG_3127.JPG',
         './assets/custom/AF1UchichaBros/IMG_3133.JPG',
         './assets/custom/AF1UchichaBros/IMG_3135.JPG',
         './assets/custom/AF1UchichaBros/IMG_3138.JPG',
         './assets/custom/AF1UchichaBros/IMG_3139.JPG',
         './assets/custom/AF1UchichaBros/IMG_3140.JPG',
         './assets/custom/AF1UchichaBros/IMG_3141.JPG',
         './assets/custom/AF1UchichaBros/IMG_3142.JPG',
         './assets/custom/AF1UchichaBros/IMG_3143.JPG',
         './assets/custom/AF1UchichaBros/IMG_3144.JPG',
         './assets/custom/AF1UchichaBros/IMG_3147.JPG',
         './assets/custom/AF1UchichaBros/IMG_3149.JPG',
         './assets/custom/AF1UchichaBros/IMG_3150.JPG',
         './assets/custom/AF1UchichaBros/IMG_3151.JPG',
      ],
      description: `A custom hand painted drawing of Sasuke Uchiha and his older Brother Itachi, along with it's family inspired "Sharingan", from the classic anime show "Naruto"`

   },
   {
      name: 'Attack x Scared - Zenitsu AF1 Utility High',
      mainImage: './assets/custom/AF1Zenitsu/IMG_2489.JPG',
      images: [
         './assets/custom/AF1Zenitsu/IMG_2489.JPG',
         './assets/custom/AF1Zenitsu/IMG_2493.JPG',
         './assets/custom/AF1Zenitsu/IMG_2494.JPG',
         './assets/custom/AF1Zenitsu/IMG_2496.JPG',
         './assets/custom/AF1Zenitsu/IMG_2497.JPG',
         './assets/custom/AF1Zenitsu/IMG_2500.JPG',
         './assets/custom/AF1Zenitsu/IMG_2502.JPG',
         './assets/custom/AF1Zenitsu/IMG_2519.JPG',
         './assets/custom/AF1Zenitsu/IMG_2521.JPG',
         './assets/custom/AF1Zenitsu/IMG_2523.JPG',
         './assets/custom/AF1Zenitsu/IMG_2527.JPG',
         './assets/custom/AF1Zenitsu/IMG_2529.JPG',
         './assets/custom/AF1Zenitsu/IMG_2531.JPG',
      ],
      description: `A custom hand painted drawing of Zenitsu, the Thunder breathing slayer in both attack mode and frightened scene from the spider demons, shown in the latest anime, "Demonslayer"`
   },
   {
      name: 'Itadori Yuuji x Gojo Satoru Nike Cortez',
      mainImage: './assets/custom/NikeJujutsu/IMG_2840.JPG',
      images: [
         './assets/custom/NikeJujutsu/IMG_2837.JPG',
         './assets/custom/NikeJujutsu/IMG_2839.JPG',
         './assets/custom/NikeJujutsu/IMG_2840.JPG',
         './assets/custom/NikeJujutsu/IMG_2842.JPG',
         './assets/custom/NikeJujutsu/IMG_2843.JPG',
         './assets/custom/NikeJujutsu/IMG_2849.JPG',
         './assets/custom/NikeJujutsu/IMG_2850.JPG',
         './assets/custom/NikeJujutsu/IMG_2853.JPG',
         './assets/custom/NikeJujutsu/IMG_2879.JPG',
         './assets/custom/NikeJujutsu/IMG_2881.JPG',
         './assets/custom/NikeJujutsu/IMG_2883.JPG',
         './assets/custom/NikeJujutsu/IMG_2884.JPG',
         './assets/custom/NikeJujutsu/IMG_2888.JPG',
      ],
      description: `A custom hand painted drawing of Itadori Yuuji and Sensei Gojo Satoru created using the art design from the end credits of the upcoming anime, "Jujutsu Kaisen"`
   },
   {
      name: 'Blue Cherry Blossoms AF1 Low',
      mainImage: './assets/custom/AF1CherryBlossoms/IMG_2176-min.JPG',
      images: [
         './assets/custom/AF1CherryBlossoms/IMG_2174-min.JPG',
         './assets/custom/AF1CherryBlossoms/IMG_2176-min.JPG',
         './assets/custom/AF1CherryBlossoms/IMG_2184-min.JPG',
         './assets/custom/AF1CherryBlossoms/IMG_2186-min.JPG',
         './assets/custom/AF1CherryBlossoms/IMG_2189-min.JPG',
         './assets/custom/AF1CherryBlossoms/IMG_2191-min.JPG',
         './assets/custom/AF1CherryBlossoms/IMG_2193-min.JPG',
         './assets/custom/AF1CherryBlossoms/IMG_2194-min.JPG',
         './assets/custom/AF1CherryBlossoms/IMG_2197-min.JPG',
         './assets/custom/AF1CherryBlossoms/IMG_2202-min.JPG',
         './assets/custom/AF1CherryBlossoms/IMG_2204-min.JPG',
      ],
      description: `A custom hand painted drawing of a Blue Cherry Blossom Tree concept design`
   },
   {
      name: 'PokeMon x Vaporeon x Lapras AF1 Low',
      mainImage: './assets/custom/AF1WaterPokemon/IMG_2645.JPG',
      images: [
         './assets/custom/AF1WaterPokemon/IMG_2637.JPG',
         './assets/custom/AF1WaterPokemon/IMG_2640.JPG',
         './assets/custom/AF1WaterPokemon/IMG_2641.JPG',
         './assets/custom/AF1WaterPokemon/IMG_2642.JPG',
         './assets/custom/AF1WaterPokemon/IMG_2643.JPG',
         './assets/custom/AF1WaterPokemon/IMG_2644.JPG',
         './assets/custom/AF1WaterPokemon/IMG_2645.JPG',
         './assets/custom/AF1WaterPokemon/IMG_2647.JPG',
         './assets/custom/AF1WaterPokemon/IMG_2648.JPG',
         './assets/custom/AF1WaterPokemon/IMG_2649.JPG',
         './assets/custom/AF1WaterPokemon/IMG_2662.JPG',
         './assets/custom/AF1WaterPokemon/IMG_2664.JPG',
         './assets/custom/AF1WaterPokemon/IMG_2667.JPG',
      ],
      description: `A custom hand painted drawing of Lapras and Vaporeon created using the art design from "Pokemon"`
   },
   {
      name: 'Mint Paisley Print AF1 Low',
      mainImage: './assets/custom/AF1Paisley/IMG_3792.JPG',
      images: [
         './assets/custom/AF1Paisley/IMG_3791.JPG',
         './assets/custom/AF1Paisley/IMG_3792.JPG',
         './assets/custom/AF1Paisley/IMG_3793.JPG',
         './assets/custom/AF1Paisley/IMG_3794.JPG',
         './assets/custom/AF1Paisley/IMG_3795.JPG',
         './assets/custom/AF1Paisley/IMG_3796.JPG',
         './assets/custom/AF1Paisley/IMG_3797.JPG',
         './assets/custom/AF1Paisley/IMG_3798.JPG',
         './assets/custom/AF1Paisley/IMG_3799.JPG',
         './assets/custom/AF1Paisley/IMG_3800.JPG',
         './assets/custom/AF1Paisley/IMG_3801.JPG',
      ],
      description: `A custom hand painted mint paisley print details on the swoosh and back tab`
   },
   {
      name: 'Red Riot x Kendo Rappa x My Hero Adidas',
      mainImage: './assets/custom/AdidasMyHero/IMG_2218-min.JPG',
      images: [
         './assets/custom/AdidasMyHero/IMG_2120-min.JPG',
         './assets/custom/AdidasMyHero/IMG_2122-min.JPG',
         './assets/custom/AdidasMyHero/IMG_2124-min.JPG',
         './assets/custom/AdidasMyHero/IMG_2127-min.JPG',
         './assets/custom/AdidasMyHero/IMG_2128-min.JPG',
         './assets/custom/AdidasMyHero/IMG_2129-min.JPG',
         './assets/custom/AdidasMyHero/IMG_2214-min.JPG',
         './assets/custom/AdidasMyHero/IMG_2218-min.JPG',
         './assets/custom/AdidasMyHero/IMG_2223-min.JPG',
         './assets/custom/AdidasMyHero/IMG_2225-min.JPG',
         './assets/custom/AdidasMyHero/IMG_2228-min.JPG',
         './assets/custom/AdidasMyHero/IMG_2234-min.JPG',
      ],
      description: `A custom hand painted drawing of Red Riot and Kendo Rappa fight scene created using the art design from the anime, "My Hero Academia"`
   },
   {
      name: 'Takashi POM x OVO Collab AF1 Low',
      mainImage: './assets/custom/AF1TakashiPom/IMG_2301.JPG',
      images: [
         './assets/custom/AF1TakashiPom/IMG_2147.JPG',
         './assets/custom/AF1TakashiPom/IMG_2148.JPG',
         './assets/custom/AF1TakashiPom/IMG_2149.JPG',
         './assets/custom/AF1TakashiPom/IMG_2152.JPG',
         './assets/custom/AF1TakashiPom/IMG_2153.JPG',
         './assets/custom/AF1TakashiPom/IMG_2156.JPG',
         './assets/custom/AF1TakashiPom/IMG_2158.JPG',
         './assets/custom/AF1TakashiPom/IMG_2159.JPG',
         './assets/custom/AF1TakashiPom/IMG_2164.JPG',
         './assets/custom/AF1TakashiPom/IMG_2166.JPG',
         './assets/custom/AF1TakashiPom/IMG_2296.JPG',
         './assets/custom/AF1TakashiPom/IMG_2298.JPG',
         './assets/custom/AF1TakashiPom/IMG_2299.JPG',
         './assets/custom/AF1TakashiPom/IMG_2301.JPG',
      ],
      description: `A custom hand painted drawing of the fashion collaboration design between Japanese Artist Takashi POM & Drake's October's Very Own Brand`
   },
   {
      name: 'Bart Simpson x CamRon x Donut Off the Wall Vans',
      mainImage: './assets/custom/VansBartSimpson/IMG_2286.JPG',
      images: [
         './assets/custom/VansBartSimpson/IMG_2252.JPG',
         './assets/custom/VansBartSimpson/IMG_2259.JPG',
         './assets/custom/VansBartSimpson/IMG_2263.JPG',
         './assets/custom/VansBartSimpson/IMG_2264.JPG',
         './assets/custom/VansBartSimpson/IMG_2265.JPG',
         './assets/custom/VansBartSimpson/IMG_2266.JPG',
         './assets/custom/VansBartSimpson/IMG_2267.JPG',
         './assets/custom/VansBartSimpson/IMG_2268.JPG',
         './assets/custom/VansBartSimpson/IMG_2269.JPG',
         './assets/custom/VansBartSimpson/IMG_2270.JPG',
         './assets/custom/VansBartSimpson/IMG_2271.JPG',
         './assets/custom/VansBartSimpson/IMG_2272.JPG',
         './assets/custom/VansBartSimpson/IMG_2277.JPG',
         './assets/custom/VansBartSimpson/IMG_2278.JPG',
         './assets/custom/VansBartSimpson/IMG_2286.JPG',
         './assets/custom/VansBartSimpson/IMG_2287.JPG',
         './assets/custom/VansBartSimpson/IMG_2288.JPG',
         './assets/custom/VansBartSimpson/IMG_2289.JPG',
         './assets/custom/VansBartSimpson/IMG_2290.JPG',
         './assets/custom/VansBartSimpson/IMG_2294.JPG',
         './assets/custom/VansBartSimpson/IMG_2295.JPG',
      ],
      description: `A custom hand painted drawing of Bart Simpson x Cam'Ron collaboration with the Iconic Donut from the classic show, "The Simpsons"`
   },
   {
      name: 'Abomidable Snowman x Winter Sports Nike Blazers',
      mainImage: './assets/custom/NikeSnowman/IMG_2872.JPG',
      images: [
         './assets/custom/NikeSnowman/IMG_2800.JPG',
         './assets/custom/NikeSnowman/IMG_2856.JPG',
         './assets/custom/NikeSnowman/IMG_2857.JPG',
         './assets/custom/NikeSnowman/IMG_2859.JPG',
         './assets/custom/NikeSnowman/IMG_2860.JPG',
         './assets/custom/NikeSnowman/IMG_2861.JPG',
         './assets/custom/NikeSnowman/IMG_2862.JPG',
         './assets/custom/NikeSnowman/IMG_2863.JPG',
         './assets/custom/NikeSnowman/IMG_2868.JPG',
         './assets/custom/NikeSnowman/IMG_2869.JPG',
         './assets/custom/NikeSnowman/IMG_2870.JPG',
         './assets/custom/NikeSnowman/IMG_2871.JPG',
         './assets/custom/NikeSnowman/IMG_2872.JPG',
         './assets/custom/NikeSnowman/IMG_2873.JPG',
         './assets/custom/NikeSnowman/IMG_2874.JPG',
         './assets/custom/NikeSnowman/IMG_2875.JPG',
         './assets/custom/NikeSnowman/IMG_2876.JPG',
      ],
      description: `A custom hand painted drawing of Snowman x Icy Winter skating concept `
   },
   {
      name: 'Floral Rose Concept Design on High Top Boots',
      mainImage: './assets/custom/RoseBoots/IMG_2555.JPG',
      images: [
         './assets/custom/RoseBoots/IMG_2537.JPG',
         './assets/custom/RoseBoots/IMG_2542.JPG',
         './assets/custom/RoseBoots/IMG_2549.JPG',
         './assets/custom/RoseBoots/IMG_2550.JPG',
         './assets/custom/RoseBoots/IMG_2553.JPG',
         './assets/custom/RoseBoots/IMG_2555.JPG',
         './assets/custom/RoseBoots/IMG_2569.JPG',
         './assets/custom/RoseBoots/IMG_2573.JPG',
      ],
      description: `A custom hand painted drawing of Floral Rose design on the top of the Boots`
   },
   {
      name: 'Jordan 1 Conceptual Design on Bicycle shoes',
      mainImage: './assets/custom/NikeBikeShoe/IMG_3625.JPG',
      images: [
         './assets/custom/NikeBikeShoe/IMG_3614.JPG',
         './assets/custom/NikeBikeShoe/IMG_3615.JPG',
         './assets/custom/NikeBikeShoe/IMG_3616.JPG',
         './assets/custom/NikeBikeShoe/IMG_3617.JPG',
         './assets/custom/NikeBikeShoe/IMG_3618.JPG',
         './assets/custom/NikeBikeShoe/IMG_3619.JPG',
         './assets/custom/NikeBikeShoe/IMG_3621.JPG',
         './assets/custom/NikeBikeShoe/IMG_3622.JPG',
         './assets/custom/NikeBikeShoe/IMG_3624.JPG',
         './assets/custom/NikeBikeShoe/IMG_3625.JPG',
         './assets/custom/NikeBikeShoe/IMG_3626.JPG',
         './assets/custom/NikeBikeShoe/IMG_3627.JPG',
         './assets/custom/NikeBikeShoe/IMG_3628.JPG',
         './assets/custom/NikeBikeShoe/IMG_3629.JPG',
         './assets/custom/NikeBikeShoe/IMG_3632.JPG',
         './assets/custom/NikeBikeShoe/IMG_3635.JPG',
         './assets/custom/NikeBikeShoe/IMG_3639.JPG',
      ],
      description: `A custom hand painted drawing of a Jordan 1 conceptual design on a base bicycle shoe`
   },
   {
      name: 'Tanjiro x Nezuko x Demonslayer AF1 Low',
      mainImage: './assets/custom/AF1Demonslayer/IMG_2404-min.JPG',
      images: [
         './assets/custom/AF1Demonslayer/IMG_2404-min.JPG',
         './assets/custom/AF1Demonslayer/IMG_2406-min.JPG',
         './assets/custom/AF1Demonslayer/IMG_2408-min.JPG',
         './assets/custom/AF1Demonslayer/IMG_2412-min.JPG',
         './assets/custom/AF1Demonslayer/IMG_2413-min.JPG',
         './assets/custom/AF1Demonslayer/IMG_2414-min.JPG',
         './assets/custom/AF1Demonslayer/IMG_2415-min.JPG',
         './assets/custom/AF1Demonslayer/IMG_2416-min.JPG',
         './assets/custom/AF1Demonslayer/IMG_2418-min.JPG',
         './assets/custom/AF1Demonslayer/IMG_2421-min.JPG',
         './assets/custom/AF1Demonslayer/IMG_2423-min.JPG',
      ],
      description: `A custom hand painted drawing of Tanjiro and Nezuko created using the art design from the end credits of the upcoming anime, "Demonslayer"`
   },
   {
      name: 'Butterfly x Flower AF1 Low',
      mainImage: './assets/custom/AF1Butterfly/IMG_3909-min.JPG',
      images: [
         './assets/custom/AF1Butterfly/IMG_3904-min.JPG',
         './assets/custom/AF1Butterfly/IMG_3905-min.JPG',
         './assets/custom/AF1Butterfly/IMG_3906-min.JPG',
         './assets/custom/AF1Butterfly/IMG_3907-min.JPG',
         './assets/custom/AF1Butterfly/IMG_3908-min.JPG',
         './assets/custom/AF1Butterfly/IMG_3909-min.JPG',
         './assets/custom/AF1Butterfly/IMG_3910-min.JPG',
         './assets/custom/AF1Butterfly/IMG_3911-min.JPG',
         './assets/custom/AF1Butterfly/IMG_3912-min.JPG',
         './assets/custom/AF1Butterfly/IMG_3913-min.JPG',
      ],
      description: `A custom hand painted drawing of a butterfly and flower concept design`
   },
   {
      name: 'Killua x HunterxHunter AF1 Low',
      mainImage: './assets/custom/AF1KilluaxHunter/IMG_3922-min.JPG',
      images: [
         './assets/custom/AF1KilluaxHunter/IMG_3914-min.JPG',
         './assets/custom/AF1KilluaxHunter/IMG_3915-min.JPG',
         './assets/custom/AF1KilluaxHunter/IMG_3916-min.JPG',
         './assets/custom/AF1KilluaxHunter/IMG_3917-min.JPG',
         './assets/custom/AF1KilluaxHunter/IMG_3918-min.JPG',
         './assets/custom/AF1KilluaxHunter/IMG_3919-min.JPG',
         './assets/custom/AF1KilluaxHunter/IMG_3920-min.JPG',
         './assets/custom/AF1KilluaxHunter/IMG_3921-min.JPG',
         './assets/custom/AF1KilluaxHunter/IMG_3922-min.JPG',
         './assets/custom/AF1KilluaxHunter/IMG_3923-min.JPG',
      ],
      description: `A custom hand painted drawing of Killua Zoldyck created using the art design from the anime, "Hunter x Hunter"`
   },
   {
      name: 'Strawberry Galore AF1 Low',
      mainImage: './assets/custom/AF1Strawberry/2BC0BE52-1793-45CA-B502-E174C8A6D0B1.JPG',
      images: [
         './assets/custom/AF1Strawberry/2BC0BE52-1793-45CA-B502-E174C8A6D0B1.JPG',
         './assets/custom/AF1Strawberry/E41E8F32-2F70-49DD-8184-6CA4FD7060B2.JPG',
      ],
      description: `A custom hand painted drawing of strawberries printed all over the shoe.`
   },
   {
      name: 'OVO x Raptors x Philippines Design AF1 Low',
      mainImage: './assets/custom/AF1TorontoFilipino/IMG_2450.JPG',
      images: [
         './assets/custom/AF1TorontoFilipino/IMG_2438.JPG',
         './assets/custom/AF1TorontoFilipino/IMG_2439.JPG',
         './assets/custom/AF1TorontoFilipino/IMG_2440.JPG',
         './assets/custom/AF1TorontoFilipino/IMG_2445.JPG',
         './assets/custom/AF1TorontoFilipino/IMG_2447.JPG',
         './assets/custom/AF1TorontoFilipino/IMG_2450.JPG',
         './assets/custom/AF1TorontoFilipino/IMG_2451.JPG',
         './assets/custom/AF1TorontoFilipino/IMG_2453.JPG',
         './assets/custom/AF1TorontoFilipino/IMG_2454.JPG',
         './assets/custom/AF1TorontoFilipino/IMG_2464.JPG',
         './assets/custom/AF1TorontoFilipino/IMG_2468.JPG',
         './assets/custom/AF1TorontoFilipino/IMG_2470.JPG',
         './assets/custom/AF1TorontoFilipino/IMG_2472.JPG',
      ],
      description: `A custom hand painted drawing of a design collaboration that includes the OVO x Raptors logo, as well as a Philippines-inspired conceptual `
   },
   {
      name: 'Monkey D. Luffy x Zoro - One Piece AF1 Low',
      mainImage: './assets/custom/AF1OnePiece/IMG_3890-min.JPG',
      images: [
         './assets/custom/AF1OnePiece/IMG_3890-min.JPG',
         './assets/custom/AF1OnePiece/IMG_3891-min.JPG',
         './assets/custom/AF1OnePiece/IMG_3892-min.JPG',
         './assets/custom/AF1OnePiece/IMG_3893-min.JPG',
         './assets/custom/AF1OnePiece/IMG_3894-min.JPG',
         './assets/custom/AF1OnePiece/IMG_3895-min.JPG',
         './assets/custom/AF1OnePiece/IMG_3896-min.JPG',
         './assets/custom/AF1OnePiece/IMG_3897-min.JPG',
         './assets/custom/AF1OnePiece/IMG_3898-min.JPG',
         './assets/custom/AF1OnePiece/IMG_3899-min.JPG',
         './assets/custom/AF1OnePiece/IMG_3900-min.JPG',
         './assets/custom/AF1OnePiece/IMG_3901-min.JPG',
         './assets/custom/AF1OnePiece/IMG_3902-min.JPG',
      ],
      description: `A custom hand painted drawing of Monkey D. Luffy and Zoro created using the art design from the end credits of the timeless anime, "One Piece"`
   },
   {
      name: 'Kamisama Kiss AF1 Low',
      mainImage: './assets/custom/AF1KamisamaKiss/IMG_7133-min.jpg',
      images: [
         './assets/custom/AF1KamisamaKiss/IMG_7133-min.jpg',
         './assets/custom/AF1KamisamaKiss/IMG_7134-min.jpg',
         './assets/custom/AF1KamisamaKiss/IMG_7135-min.jpg',
         './assets/custom/AF1KamisamaKiss/IMG_7136-min.jpg',
         './assets/custom/AF1KamisamaKiss/IMG_7137-min.jpg',
      ],
      description: `A custom hand painted drawing of Tomoe created from the upcoming anime, "Kamisama Kiss"`
   },
   {
      name: 'University Of North Carolina AF1 Low Concept',
      mainImage: './assets/custom/AF1UncBlue/IMG_3776.JPG',
      images: [
         './assets/custom/AF1UncBlue/IMG_3775.JPG',
         './assets/custom/AF1UncBlue/IMG_3776.JPG',
         './assets/custom/AF1UncBlue/IMG_3777.JPG',
         './assets/custom/AF1UncBlue/IMG_3778.JPG',
         './assets/custom/AF1UncBlue/IMG_3779.JPG',
         './assets/custom/AF1UncBlue/IMG_3780.JPG',
         './assets/custom/AF1UncBlue/IMG_3781.JPG',
         './assets/custom/AF1UncBlue/IMG_3782.JPG',
         './assets/custom/AF1UncBlue/IMG_3783.JPG',
         './assets/custom/AF1UncBlue/IMG_3784.JPG',
         './assets/custom/AF1UncBlue/IMG_3785.JPG',
         './assets/custom/AF1UncBlue/IMG_3786.JPG',
         './assets/custom/AF1UncBlue/IMG_3787.JPG',
         './assets/custom/AF1UncBlue/IMG_3788.JPG',
         './assets/custom/AF1UncBlue/IMG_3789.JPG',
         './assets/custom/AF1UncBlue/IMG_3790.JPG',
      ],
      description: `A custom hand painted drawing of a UNC inspired colorway conceptual design`
   },
   {
      name: 'San x Moro x Princess Mononoke Nike Slides',
      mainImage: './assets/custom/NikeMononoke/IMG_3464.JPG',
      images: [
         './assets/custom/NikeMononoke/IMG_3461.JPG',
         './assets/custom/NikeMononoke/IMG_3462.JPG',
         './assets/custom/NikeMononoke/IMG_3463.JPG',
         './assets/custom/NikeMononoke/IMG_3464.JPG',
         './assets/custom/NikeMononoke/IMG_3465.JPG',
         './assets/custom/NikeMononoke/IMG_3466.JPG',
         './assets/custom/NikeMononoke/IMG_3467.JPG',
         './assets/custom/NikeMononoke/IMG_3468.JPG',
      ],
      description: `A custom hand painted drawing of San and her trusty Wolf, Moro. Created using the art design from the Studio Ghibli anime, "Princess Mononoke"`
   },
   {
      name: 'Philippines Flag x Sampaguita Flower Custom',
      mainImage: './assets/custom/PhilippinesFlag/IMG_3472.JPG',
      images: [
         './assets/custom/PhilippinesFlag/IMG_3469.JPG',
         './assets/custom/PhilippinesFlag/IMG_3470.JPG',
         './assets/custom/PhilippinesFlag/IMG_3471.JPG',
         './assets/custom/PhilippinesFlag/IMG_3472.JPG',
         './assets/custom/PhilippinesFlag/IMG_3474.JPG',
         './assets/custom/PhilippinesFlag/IMG_3475.JPG',
         './assets/custom/PhilippinesFlag/IMG_3476.JPG',
      ],
      description: `A custom hand painted drawing of the Philippines' national flower, the Sampaguita.`
   },
   {
      name: 'Mickey Mouse Customs',
      mainImage: './assets/custom/MickeyMouse/IMG_3460.JPG',
      images: [
         './assets/custom/MickeyMouse/IMG_3456.JPG',
         './assets/custom/MickeyMouse/IMG_3457.JPG',
         './assets/custom/MickeyMouse/IMG_3458.JPG',
         './assets/custom/MickeyMouse/IMG_3459.JPG',
         './assets/custom/MickeyMouse/IMG_3460.JPG',
      ],
      description: `A custom hand painted drawing of Mickey Mouse Iconic Logo`
   }
];

app.restore = [
   {
      name: `Air Jordan 'True Blue' 3  `,
      mainImage: './assets/restore/TrueBlue3/IMG_3371.JPG',
      images: [
         './assets/restore/TrueBlue3/IMG_3371.JPG',
         './assets/restore/TrueBlue3/IMG_3372.JPG',
         './assets/restore/TrueBlue3/IMG_3373.JPG',
         './assets/restore/TrueBlue3/IMG_3374.JPG',
         './assets/restore/TrueBlue3/IMG_3375.JPG',
         './assets/restore/TrueBlue3/IMG_3376.JPG',
         './assets/restore/TrueBlue3/IMG_3377.JPG',
         './assets/restore/TrueBlue3/IMG_3378.JPG',
         './assets/restore/TrueBlue3/IMG_3379.JPG',
         './assets/restore/TrueBlue3/IMG_3380.JPG',
         './assets/restore/TrueBlue3/IMG_3381.JPG',
         './assets/restore/TrueBlue3/IMG_3382.JPG',
         './assets/restore/TrueBlue3/IMG_3383.JPG',
         './assets/restore/TrueBlue3/IMG_3384.JPG',
         './assets/restore/TrueBlue3/IMG_3385.JPG',
         './assets/restore/TrueBlue3/IMG_3386.JPG',
         './assets/restore/TrueBlue3/IMG_3415.JPG',
         './assets/restore/TrueBlue3/IMG_3416.JPG',
         './assets/restore/TrueBlue3/IMG_3417.JPG',
         './assets/restore/TrueBlue3/IMG_3418.JPG',
      ],
      description: `A complete restoration including, deep clean service, sectional re-paint, sanding, finishing/sealant, as well as a back tab swap`
   },
   {
      name: `Air Jordan 'Legend Blue' 4  `,
      mainImage: './assets/restore/LegendBlue4/IMG_2897.JPG',
      images: [
         './assets/restore/LegendBlue4/IMG_2897.JPG',
         './assets/restore/LegendBlue4/IMG_2898.JPG',
         './assets/restore/LegendBlue4/IMG_2899.JPG',
         './assets/restore/LegendBlue4/IMG_2900.JPG',
         './assets/restore/LegendBlue4/IMG_2901.JPG',
         './assets/restore/LegendBlue4/IMG_2902.JPG',
         './assets/restore/LegendBlue4/IMG_2903.JPG',
         './assets/restore/LegendBlue4/IMG_2904.JPG',
         './assets/restore/LegendBlue4/IMG_2905.JPG',
         './assets/restore/LegendBlue4/IMG_2906.JPG',
         './assets/restore/LegendBlue4/IMG_2907.JPG',
         './assets/restore/LegendBlue4/IMG_3005.JPG',
         './assets/restore/LegendBlue4/IMG_3006.JPG',
         './assets/restore/LegendBlue4/IMG_3007.JPG',
         './assets/restore/LegendBlue4/IMG_3008.JPG',
         './assets/restore/LegendBlue4/IMG_3009.JPG',
         './assets/restore/LegendBlue4/IMG_3010.JPG',
         './assets/restore/LegendBlue4/IMG_3011.JPG',
         './assets/restore/LegendBlue4/IMG_3012.JPG',
         './assets/restore/LegendBlue4/IMG_3013.JPG',
         './assets/restore/LegendBlue4/IMG_3014.JPG',
         './assets/restore/LegendBlue4/IMG_3015.JPG',
         './assets/restore/LegendBlue4/IMG_3016.JPG',
         './assets/restore/LegendBlue4/IMG_3017.JPG',
         './assets/restore/LegendBlue4/IMG_3018.JPG',
         './assets/restore/LegendBlue4/IMG_3019.JPG',
         './assets/restore/LegendBlue4/IMG_3020.JPG',
         './assets/restore/LegendBlue4/IMG_3021.JPG',
         './assets/restore/LegendBlue4/IMG_3022.JPG',
         './assets/restore/LegendBlue4/IMG_3023.JPG',
         './assets/restore/LegendBlue4/IMG_3024.JPG',
         './assets/restore/LegendBlue4/IMG_3025.JPG',
         './assets/restore/LegendBlue4/IMG_3026.JPG',
         './assets/restore/LegendBlue4/IMG_3027.JPG',
         './assets/restore/LegendBlue4/IMG_3028.JPG',
         './assets/restore/LegendBlue4/IMG_3029.JPG',
      ],
      description: `A complete restoration including, deep clean service, sectional re-paint, sanding, finishing/sealant.`
   },
   {
      name: `Air Jordan 'Sport Blue' 3  `,
      mainImage: './assets/restore/SportsBlue3/IMG_2476.JPG',
      images: [
         './assets/restore/SportsBlue3/IMG_2476.JPG',
         './assets/restore/SportsBlue3/IMG_2477.JPG',
         './assets/restore/SportsBlue3/IMG_2478.JPG',
         './assets/restore/SportsBlue3/IMG_2479.JPG',
         './assets/restore/SportsBlue3/IMG_2480.JPG',
         './assets/restore/SportsBlue3/IMG_2481.JPG',
         './assets/restore/SportsBlue3/IMG_2482.JPG',
         './assets/restore/SportsBlue3/IMG_2483.JPG',
         './assets/restore/SportsBlue3/IMG_2484.JPG',
         './assets/restore/SportsBlue3/IMG_2485.JPG',
         './assets/restore/SportsBlue3/IMG_2486.JPG',
         './assets/restore/SportsBlue3/IMG_2487.JPG',
         './assets/restore/SportsBlue3/IMG_2488.JPG',
      ],
      description: `A complete restoration including, deep clean service, sectional re-paint, sanding, finishing/sealant.`
   },
   {
      name: `Air Jordan 'Flint' 13  `,
      mainImage: './assets/restore/Flint13/IMG_3657.JPG',
      images: [
         './assets/restore/Flint13/IMG_3657.JPG',
         './assets/restore/Flint13/IMG_3658.JPG',
         './assets/restore/Flint13/IMG_3659.JPG',
         './assets/restore/Flint13/IMG_3660.JPG',
         './assets/restore/Flint13/IMG_3661.JPG',
         './assets/restore/Flint13/IMG_3662.JPG',
         './assets/restore/Flint13/IMG_3663.JPG',
         './assets/restore/Flint13/IMG_3664.JPG',
         './assets/restore/Flint13/IMG_3665.JPG',
         './assets/restore/Flint13/IMG_3666.JPG',
         './assets/restore/Flint13/IMG_3667.JPG',
         './assets/restore/Flint13/IMG_3668.JPG',
         './assets/restore/Flint13/IMG_3669.JPG',
         './assets/restore/Flint13/IMG_3670.JPG',
         './assets/restore/Flint13/IMG_3672.JPG',
         './assets/restore/Flint13/IMG_3673.JPG',
         './assets/restore/Flint13/IMG_3674.JPG',
         './assets/restore/Flint13/IMG_3675.JPG',
         './assets/restore/Flint13/IMG_3676.JPG',
      ],
      description: `A complete restoration including, deep clean service, sectional re-paint, sanding, finishing/sealant.`
   },
   {
      name: `Air Jordan 'University of North Carolina' 11  `,
      mainImage: './assets/restore/Unc11/IMG_2583.JPG',
      images: [
         './assets/restore/Unc11/IMG_2583.JPG',
         './assets/restore/Unc11/IMG_2584.JPG',
         './assets/restore/Unc11/IMG_2585.JPG',
         './assets/restore/Unc11/IMG_2586.JPG',
         './assets/restore/Unc11/IMG_2587.JPG',
         './assets/restore/Unc11/IMG_2588.JPG',
         './assets/restore/Unc11/IMG_2589.JPG',
         './assets/restore/Unc11/IMG_2590.JPG',
         './assets/restore/Unc11/IMG_2591.JPG',
         './assets/restore/Unc11/IMG_2592.JPG',
         './assets/restore/Unc11/IMG_2593.JPG',
         './assets/restore/Unc11/IMG_2594.JPG',
         './assets/restore/Unc11/IMG_2595.JPG',
         './assets/restore/Unc11/IMG_2596.JPG',
         './assets/restore/Unc11/IMG_2597.JPG',
         './assets/restore/Unc11/IMG_2598.JPG',
         './assets/restore/Unc11/IMG_2599.JPG',
         './assets/restore/Unc11/IMG_2600.JPG',
         './assets/restore/Unc11/IMG_2601.JPG',
         './assets/restore/Unc11/IMG_2617.JPG',
         './assets/restore/Unc11/IMG_2618.JPG',
         './assets/restore/Unc11/IMG_2619.JPG',
         './assets/restore/Unc11/IMG_2620.JPG',
         './assets/restore/Unc11/IMG_2621.JPG',
         './assets/restore/Unc11/IMG_2622.JPG',
         './assets/restore/Unc11/IMG_2623.JPG',
         './assets/restore/Unc11/IMG_2624.JPG',
         './assets/restore/Unc11/IMG_2625.JPG',
         './assets/restore/Unc11/IMG_2626.JPG',
         './assets/restore/Unc11/IMG_2627.JPG',
         './assets/restore/Unc11/IMG_2628.JPG',
         './assets/restore/Unc11/IMG_2629.JPG',
         './assets/restore/Unc11/IMG_2630.JPG',
      ],
      description: `A complete restoration including, deep clean service, sectional re-paint, sanding, finishing/sealant.`
   },
   {
      name: `Yeezys`,
      mainImage: './assets/restore/Yeezy/IMG_3079.JPG',
      images: [
         './assets/restore/Yeezy/IMG_3079.JPG',
         './assets/restore/Yeezy/IMG_3080.JPG',
         './assets/restore/Yeezy/IMG_3081.JPG',
         './assets/restore/Yeezy/IMG_3082.JPG',
         './assets/restore/Yeezy/IMG_3083.JPG',
         './assets/restore/Yeezy/IMG_3084.JPG',
         './assets/restore/Yeezy/IMG_3085.JPG',
         './assets/restore/Yeezy/IMG_3086.JPG',
         './assets/restore/Yeezy/IMG_3087.JPG',
         './assets/restore/Yeezy/IMG_3088.JPG',
         './assets/restore/Yeezy/IMG_3182.JPG',
         './assets/restore/Yeezy/IMG_3183.JPG',
         './assets/restore/Yeezy/IMG_3184.JPG',
         './assets/restore/Yeezy/IMG_3185.JPG',
         './assets/restore/Yeezy/IMG_3186.JPG',
         './assets/restore/Yeezy/IMG_3187.JPG',
         './assets/restore/Yeezy/IMG_3188.JPG',
         './assets/restore/Yeezy/IMG_3189.JPG',
         './assets/restore/Yeezy/IMG_3190.JPG',
         './assets/restore/Yeezy/IMG_3191.JPG',
         './assets/restore/Yeezy/IMG_3192.JPG',
         './assets/restore/Yeezy/IMG_3193.JPG',
         './assets/restore/Yeezy/IMG_3194.JPG',
         './assets/restore/Yeezy/IMG_3195.JPG',
         './assets/restore/Yeezy/IMG_3196.JPG',
         './assets/restore/Yeezy/IMG_3197.JPG',
         './assets/restore/Yeezy/IMG_3198.JPG',
      ],
      description: `A complete restoration including, deep clean service, sectional re-paint, sanding, finishing/sealant.`
   },
];


app.galleryAppend = () => {
   let counter = 0;
   app.gallerys.forEach((design) => {
      
      const firstListItem = document.createElement('li');
      firstListItem.classList.add(`design${counter}`);
      firstListItem.setAttribute('id',`theModal${counter}`);
      firstListItem.classList.add(`design`);
      // console.log(design.mainImage)
      firstListItem.innerHTML = `
      <div class="designPic">
      <img class="customPic${counter}" src="${design.mainImage}" alt="${design.name}"
      </div>
      `
      app.gallery.appendChild(firstListItem);

      ///////////////////////////


      app.modal = document.getElementById('myModal');
      // console.log(app.modal);
      app.btn = document.getElementById(`theModal${counter}`);

      app.shoeModal = document.querySelector('.shoeData');
      
   
      const shoeInfo = document.createElement('li');
      shoeInfo.classList.add('shoeInformation');
      shoeInfo.innerHTML = `
         <div class="infoBox">
            <h3>${design.name}</h3>
            <p>${design.description}</p>
         </div>
      `

      app.shoeModal.appendChild(shoeInfo);

      app.btn.addEventListener('click', () => {
         // console.log('clicked')
         app.shoeModal
         app.modal.style.display = 'block';
      })

      app.span = document.querySelector('.close');

      app.span.addEventListener('click', () => {
         app.modal.style.display = 'none';
      });

      window.addEventListener('click', (e) => {
         // console.log(e.target.classList.contains(`customPic0`))
         const hasClass = e.target.classList.contains(`customPic1`);
         if (e.target == app.modal) {
            app.modal.style.display = 'none';
         }

         if(hasClass){
            console.log('yes');
         } else {
            console.log('no')
         }
      })
      // maybe push the data into a variable in the global scope to access it later.
      // in this case, push the picture, with specific class and data that the user clicked on into the variable, which can then be used to manipulate that isolated array of data.
      // the whole point of this is to be able to create a pop up modal with information and extra photos of the specific shoe that the user clicked on. 


      
      ///////////////////////////

      app.customPic = document.querySelector(`.design${counter}`);
      app.customPic.addEventListener('click',() => {
         console.log(`you've clicked on ${firstListItem.className}`)
      })
      counter++;
   });


   // app.addCart = document.querySelector('.addCart');

   // app.addCart.addEventListener('click', () => {
   //    console.log('hey you added to the e-cart!')
   // });

};


// callRestore function that appends the restoration gallery to DOM.
app.callRestore = () => {
   // forEach method on the array of restorations
   app.restore.forEach((fix)=>{
      // html element creation storing in variable declaration 
      const secondListItem = document.createElement('li');
      // adding a className to the li element
      secondListItem.classList.add('restored');
      // inserting content into the innerHTML of the element
      secondListItem.innerHTML = `
      <div class="restorePic">
      <img src="${fix.mainImage}" alt="${fix.name}"
      </div>
      <div class="restoreName">
      <h2 class="customName">${fix.name}</h2>
      </div>
      <div class="restoreDescrip">
      <p>${fix.description}</p>
      </div>
      <div class="serviceButtons">
      <button>
      <a href="#" class="addCart">Add to cart</a>
      </button>
      <button>
         <a href="contact.html">Contact Us</a>
      </button>
      </div>
      `
      // appending the li element as a child to the section targeted.
      app.restored.appendChild(secondListItem);
   });
};

// addListeners function that is called by app.init(). This sets off the other functions onces user enters page.
app.addListeners = () => {
   // calls 2 functions that append data to DOM.
   app.galleryAppend();
   app.callRestore();
};

app.init = () => {
   app.addListeners();
   console.log('init');
};

app.init();


//      firstListItem.innerHTML = `
      // <div class="designPic">
      // <img src="${design.mainImage}" alt="${design.name}"
      // </div>
      // <div class="designName">
      // <h2 class="customName">${design.name}</h2>
      // </div>
      // <div class="designDescrip">
      // <p>${design.description}</p>
      // </div>
      // <div class="serviceButtons">
      // <button>
      // <a href="#" class="addCart">Add to cart</a>
      // </button>
      // <button>
      //    <a href="contact.html">Contact Us</a>
      // </button>
      // </div>
      // `