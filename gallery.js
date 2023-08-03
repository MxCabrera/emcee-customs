// name spacing app 
const app = {};

// hamburger drop down menu js logic :
app.hamburger = document.querySelector('.hamburger');
app.navLink = document.querySelector('.nav__link');

// gallery section variables 
app.gallery = document.querySelector('.galleryContainer');
app.restored = document.querySelector('.restorationsBox');
app.cleaned = document.querySelector('.cleanBox');
app.cart = document.querySelector('.eCart');
// app.isolateShoe = [];
// app.customPhotos = [];

// connecting modal html element to a variable
app.modal = document.getElementById('myModal');
app.span = document.querySelector('.close');
// app.shoeModal = document.querySelector('.shoeData');

// on click that adds a hide class to element
app.hamburger.addEventListener('click', () => {
   app.navLink.classList.toggle('hide');
});

// connecting html tabs to a variable for future use
app.customTab = document.querySelector('.customTab');
app.restoreTab = document.querySelector('.restoreTab');
app.cleanTab = document.querySelector('.cleanTab');

// event listeners that wait for user to click specific button, and display the correct data.
// first title tab click
app.customTab.addEventListener('click', () => {
   app.gallery.style.display = 'flex';
   app.restored.style.display = 'none';
   app.cleaned.style.display = 'none';
});

// second title tab click
app.restoreTab.addEventListener('click', () => {
   app.gallery.style.display = 'none';
   app.restored.style.display = 'block';
   app.cleaned.style.display = 'none';
});

// third title tab click
app.cleanTab.addEventListener('click', () => {
   app.gallery.style.display = 'none';
   app.restored.style.display = 'none';
   app.cleaned.style.display = 'block';
});

// starting the app with customs tab showing first. with the other 2 display:none until user decides to click otherwise
app.restored.style.display = 'none';
app.cleaned.style.display = 'none';

// customs portfolio array for later use
app.gallerys = [
   {
      name: 'Inuyasha x Demon Form AF1 Low',
      mainImage: './assets/custom/AF1Inuyasha/IMG_3046-min.JPG',
      images: [
         './assets/custom/AF1Inuyasha/IMG_3030-min.JPG',
         './assets/custom/AF1Inuyasha/IMG_3031-min.JPG',
         './assets/custom/AF1Inuyasha/IMG_3032-min.JPG',
         './assets/custom/AF1Inuyasha/IMG_3033-min.JPG',
      ],
      description: `A dual version of Inuyasha, the half-demon protagonist in the 2000 anime, Inuyasha, in both normal and demon mode. A jewel shard are painted in the back of the shoe. `
   },
   {
      name: 'Sasuke x Itachi Uchiha AF1 High',
      mainImage:'./assets/custom/AF1UchichaBros/IMG_3147.JPG',
      images: [
         './assets/custom/AF1UchichaBros/IMG_3133.JPG',
         './assets/custom/AF1UchichaBros/IMG_3138.JPG',
         './assets/custom/AF1UchichaBros/IMG_3107.JPG',
         './assets/custom/AF1UchichaBros/IMG_3110.JPG',
      ],
      description: `Sasuke and Itachi Uchiha, of the Akatsuki Clan. Using the Akatsuki cloud they wore on their jacket, it inspired the design around the shoe. Characters are based on the classic anime, "Naruto"`

   },
   {
      name: 'Attack x Scared - Zenitsu AF1 Utility High',
      mainImage: './assets/custom/AF1Zenitsu/IMG_2489.JPG',
      images: [
         './assets/custom/AF1Zenitsu/IMG_2489.JPG',
         './assets/custom/AF1Zenitsu/IMG_2493.JPG',
         './assets/custom/AF1Zenitsu/IMG_2494.JPG',
         './assets/custom/AF1Zenitsu/IMG_2497.JPG',
      ],
      description: `Zenitsu, the thunder-breathing demon slayer that has a knack for passing out when people need him the most. His fear-stricken sleep causes him to become the most deadliest unconscious slayer. he is shown in attack mode and frightened scene from the spider demons, from in the latest anime, "Demonslayer"`
   },
   {
      name: 'Itadori Yuuji x Gojo Satoru Nike Cortez',
      mainImage: './assets/custom/NikeJujutsu/IMG_2840.JPG',
      images: [
         './assets/custom/NikeJujutsu/IMG_2850.JPG',
         './assets/custom/NikeJujutsu/IMG_2888.JPG',
         './assets/custom/NikeJujutsu/IMG_2842.JPG',
         './assets/custom/NikeJujutsu/IMG_2843.JPG',

      ],
      description: `Itadori Yuuji, along side his Sensei and Mentor, Gojo Satoru; these sorcerers are copied from the art design in the end credits of the recent anime, "Jujutsu Kaisen"`
   },
   {
      name: 'Blue Cherry Blossoms AF1 Low',
      mainImage: './assets/custom/AF1CherryBlossoms/IMG_2176-min.JPG',
      images: [
         './assets/custom/AF1CherryBlossoms/IMG_2204-min.JPG',
         './assets/custom/AF1CherryBlossoms/IMG_2197-min.JPG',
         './assets/custom/AF1CherryBlossoms/IMG_2184-min.JPG',
         './assets/custom/AF1CherryBlossoms/IMG_2186-min.JPG',
      ],
      description: `Blue Cherry Blossoms still attached to the long branches that reach out, almost engulfing the whole side of the shoes. Nike swoosh is painted black.`
   },
   {
      name: 'PokeMon x Vaporeon x Lapras AF1 Low',
      mainImage: './assets/custom/AF1WaterPokemon/IMG_2645.JPG',
      images: [
         './assets/custom/AF1WaterPokemon/IMG_2637.JPG',
         './assets/custom/AF1WaterPokemon/IMG_2645.JPG',
         './assets/custom/AF1WaterPokemon/IMG_2640.JPG',
         './assets/custom/AF1WaterPokemon/IMG_2642.JPG',
      ],
      description: `The water pokemon; Lapras and Vaporeon. Both chosen by the client whom favored these ones out of the rest. Inspired from the old classic western anime, "Pokemon"`
   },
   {
      name: 'Mint Paisley Print AF1 Low',
      mainImage: './assets/custom/AF1Paisley/IMG_3792.JPG',
      images: [
         './assets/custom/AF1Paisley/IMG_3791.JPG',
         './assets/custom/AF1Paisley/IMG_3797.JPG',
         './assets/custom/AF1Paisley/IMG_3793.JPG',
         './assets/custom/AF1Paisley/IMG_3794.JPG',
      ],
      description: `A custom hand painted clean light mint paisley design and details on the swoosh and back tab. `
   },
   {
      name: 'Red Riot x Kendo Rappa x My Hero Adidas',
      mainImage: './assets/custom/AdidasMyHero/IMG_2225-min.JPG',
      images: [
         './assets/custom/AdidasMyHero/IMG_2120-min.JPG',
         './assets/custom/AdidasMyHero/IMG_2122-min.JPG',
         './assets/custom/AdidasMyHero/IMG_2225-min.JPG',
         './assets/custom/AdidasMyHero/IMG_2228-min.JPG',
      ],
      description: `A custom hand painted drawing of Red Riot and Kendo Rappa fight scene created using the art design from the anime, "My Hero Academia"`
   },
   {
      name: 'Takashi POM x OVO Collab AF1 Low',
      mainImage: './assets/custom/AF1TakashiPom/IMG_2301.JPG',
      images: [
         './assets/custom/AF1TakashiPom/IMG_2149.JPG',
         './assets/custom/AF1TakashiPom/IMG_2153.JPG',
         './assets/custom/AF1TakashiPom/IMG_2152.JPG',
         './assets/custom/AF1TakashiPom/IMG_2299.JPG',
      ],
      description: `A custom hand painted drawing of the fashion collaboration design between Japanese Artist Takashi POM & Drake's October's Very Own Brand`
   },
   {
      name: 'Bart Simpson x CamRon x Donut Off the Wall Vans',
      mainImage: './assets/custom/VansBartSimpson/IMG_2286.JPG',
      images: [
         './assets/custom/VansBartSimpson/IMG_2295.JPG',
         './assets/custom/VansBartSimpson/IMG_2277.JPG',
         './assets/custom/VansBartSimpson/IMG_2270.JPG',
         './assets/custom/VansBartSimpson/IMG_2264.JPG',
      ],
      description: `A custom hand painted drawing of Bart Simpson x Cam'Ron collaboration with the Iconic Donut from the classic show, "The Simpsons"`
   },
   {
      name: 'Abomidable Snowman x Winter Sports Nike Blazers',
      mainImage: './assets/custom/NikeSnowman/IMG_2872.JPG',
      images: [
         './assets/custom/NikeSnowman/IMG_2875.JPG',
         './assets/custom/NikeSnowman/IMG_2856.JPG',
         './assets/custom/NikeSnowman/IMG_2857.JPG',
         './assets/custom/NikeSnowman/IMG_2863.JPG',
      ],
      description: `A custom hand painted drawing of Snowman x Icy Winter skating concept `
   },
   {
      name: 'Floral Rose Concept Design on High Top Boots',
      mainImage: './assets/custom/RoseBoots/IMG_2555.JPG',
      images: [
         './assets/custom/RoseBoots/IMG_2553.JPG',
         './assets/custom/RoseBoots/IMG_2573.JPG',
         './assets/custom/RoseBoots/IMG_2549.JPG',
         './assets/custom/RoseBoots/IMG_2569.JPG',
      ],
      description: `A custom hand painted drawing of Floral Rose design on the top of the Boots`
   },
   {
      name: 'Jordan 1 Conceptual Design on Bicycle shoes',
      mainImage: './assets/custom/NikeBikeShoe/IMG_3625.JPG',
      images: [
         './assets/custom/NikeBikeShoe/IMG_3614.JPG',
         './assets/custom/NikeBikeShoe/IMG_3632.JPG',
         './assets/custom/NikeBikeShoe/IMG_3635.JPG',
         './assets/custom/NikeBikeShoe/IMG_3639.JPG',
         './assets/custom/NikeBikeShoe/IMG_3625.JPG',
      ],
      description: `A custom hand painted drawing of a Jordan 1 conceptual design on a base bicycle shoe`
   },
   {
      name: 'Tanjiro x Nezuko x Demonslayer AF1 Low',
      mainImage: './assets/custom/AF1Demonslayer/IMG_2404-min.JPG',
      images: [
         './assets/custom/AF1Demonslayer/IMG_2404-min.JPG',
         './assets/custom/AF1Demonslayer/IMG_2412-min.JPG',
         './assets/custom/AF1Demonslayer/IMG_2414-min.JPG',
         './assets/custom/AF1Demonslayer/IMG_2413-min.JPG',
      ],
      description: `A custom hand painted drawing of Tanjiro and Nezuko created using the art design from the end credits of the upcoming anime, "Demonslayer"`
   },
   {
      name: 'Butterfly x Flower AF1 Low',
      mainImage: './assets/custom/AF1Butterfly/IMG_3909-min.JPG',
      images: [
         './assets/custom/AF1Butterfly/IMG_3911-min.JPG',
         './assets/custom/AF1Butterfly/IMG_3912-min.JPG',
         './assets/custom/AF1Butterfly/IMG_3905-min.JPG',
         './assets/custom/AF1Butterfly/IMG_3909-min.JPG',
      ],
      description: `A custom hand painted drawing of a butterfly and flower concept design`
   },
   {
      name: 'Killua x HunterxHunter AF1 Low',
      mainImage: './assets/custom/AF1KilluaxHunter/IMG_3915-min.JPG',
      images: [
         './assets/custom/AF1KilluaxHunter/IMG_3914-min.JPG',
         './assets/custom/AF1KilluaxHunter/IMG_3915-min.JPG',
         './assets/custom/AF1KilluaxHunter/IMG_3916-min.JPG',
         './assets/custom/AF1KilluaxHunter/IMG_3918-min.JPG',
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
      mainImage: './assets/custom/AF1TorontoFilipino/IMG_2438.JPG',
      images: [
         './assets/custom/AF1TorontoFilipino/IMG_2438.JPG',
         './assets/custom/AF1TorontoFilipino/IMG_2468.JPG',
         './assets/custom/AF1TorontoFilipino/IMG_2454.JPG',
         './assets/custom/AF1TorontoFilipino/IMG_2453.JPG',
      ],
      description: `A custom hand painted drawing of a design collaboration that includes the OVO x Raptors logo, as well as a Philippines-inspired conceptual `
   },
   {
      name: 'Monkey D. Luffy x Zoro - One Piece AF1 Low',
      mainImage: './assets/custom/AF1OnePiece/IMG_3890-min.JPG',
      images: [
         './assets/custom/AF1OnePiece/IMG_3890-min.JPG',
         './assets/custom/AF1OnePiece/IMG_3895-min.JPG',
         './assets/custom/AF1OnePiece/IMG_3896-min.JPG',
         './assets/custom/AF1OnePiece/IMG_3897-min.JPG'
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
      ],
      description: `A custom hand painted drawing of Tomoe created from the upcoming anime, "Kamisama Kiss"`
   },
   {
      name: 'University Of North Carolina AF1 Low Concept',
      mainImage: './assets/custom/AF1UncBlue/IMG_3776.JPG',
      images: [
         './assets/custom/AF1UncBlue/IMG_3775.JPG',
         './assets/custom/AF1UncBlue/IMG_3776.JPG',
         './assets/custom/AF1UncBlue/IMG_3780.JPG',
         './assets/custom/AF1UncBlue/IMG_3782.JPG',
      ],
      description: `A custom hand painted drawing of a UNC inspired colorway conceptual design`
   },
   {
      name: 'San x Moro x Princess Mononoke Nike Slides',
      mainImage: './assets/custom/NikeMononoke/IMG_3464.JPG',
      images: [
         './assets/custom/NikeMononoke/IMG_3467.JPG',
         './assets/custom/NikeMononoke/IMG_3468.JPG',
         './assets/custom/NikeMononoke/IMG_3463.JPG',
         './assets/custom/NikeMononoke/IMG_3464.JPG',
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
      ],
      description: `A custom hand painted drawing of the Philippines' national flower, the Sampaguita.`
   },
   {
      name: 'Mickey Mouse Customs',
      mainImage: './assets/custom/MickeyMouse/IMG_3456.JPG',
      images: [
         './assets/custom/MickeyMouse/IMG_3456.JPG',
         './assets/custom/MickeyMouse/IMG_3457.JPG',
         './assets/custom/MickeyMouse/IMG_3458.JPG',
         './assets/custom/MickeyMouse/IMG_3459.JPG',

      ],
      description: `A custom hand painted drawing of Mickey Mouse Iconic Logo`
   }
];
// restoration portfolio array for later use
app.restore = [
   {
      name: `Air Jordan 'True Blue' 3  `,
      beforeImage: './assets/restore/TrueBlue3/IMG_3378.JPG',
      afterImage: './assets/restore/TrueBlue3/IMG_3427.JPG',
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
         './assets/restore/TrueBlue3/IMG_3418.JPG',
         './assets/restore/TrueBlue3/IMG_3419.JPG',
         './assets/restore/TrueBlue3/IMG_3420.JPG',
         './assets/restore/TrueBlue3/IMG_3421.JPG',
         './assets/restore/TrueBlue3/IMG_3422.JPG',
         './assets/restore/TrueBlue3/IMG_3423.JPG',
         './assets/restore/TrueBlue3/IMG_3424.JPG',
         './assets/restore/TrueBlue3/IMG_3425.JPG',
         './assets/restore/TrueBlue3/IMG_3426.JPG',
         './assets/restore/TrueBlue3/IMG_3427.JPG',
         './assets/restore/TrueBlue3/IMG_3428.JPG',
         './assets/restore/TrueBlue3/IMG_3429.JPG',
         './assets/restore/TrueBlue3/IMG_3430.JPG',
         './assets/restore/TrueBlue3/IMG_3431.JPG',
         './assets/restore/TrueBlue3/IMG_3432.JPG',
         './assets/restore/TrueBlue3/IMG_3433.JPG',
         './assets/restore/TrueBlue3/IMG_3434.JPG',
      ],
      description: `A complete restoration including, deep clean service, sectional re-paint, sanding, finishing/sealant, as well as a back tab swap`
   },
   {
      name: `Air Jordan 'Legend Blue' 4  `,
      beforeImage: './assets/restore/LegendBlue4/IMG_2897.JPG',
      afterImage: './assets/restore/LegendBlue4/IMG_3005.JPG',
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
      beforeImage: './assets/restore/SportsBlue3/IMG_2479.JPG',
      afterImage: './assets/restore/SportsBlue3/IMG_2481.JPG',
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
   }
];
// cleaning portfolio array for later use
app.cleaning = [
   {
      name: `Air Jordan 'Flint' 13  `,
      beforeImage: './assets/cleaning/Flint13/IMG_3657.JPG',
      afterImage: './assets/cleaning/Flint13/IMG_3672.JPG',
      images: [
         './assets/cleaning/Flint13/IMG_3657.JPG',
         './assets/cleaning/Flint13/IMG_3658.JPG',
         './assets/cleaning/Flint13/IMG_3659.JPG',
         './assets/cleaning/Flint13/IMG_3660.JPG',
         './assets/cleaning/Flint13/IMG_3661.JPG',
         './assets/cleaning/Flint13/IMG_3662.JPG',
         './assets/cleaning/Flint13/IMG_3663.JPG',
         './assets/cleaning/Flint13/IMG_3664.JPG',
         './assets/cleaning/Flint13/IMG_3665.JPG',
         './assets/cleaning/Flint13/IMG_3666.JPG',
         './assets/cleaning/Flint13/IMG_3667.JPG',
         './assets/cleaning/Flint13/IMG_3668.JPG',
         './assets/cleaning/Flint13/IMG_3669.JPG',
         './assets/cleaning/Flint13/IMG_3670.JPG',
         './assets/cleaning/Flint13/IMG_3672.JPG',
         './assets/cleaning/Flint13/IMG_3673.JPG',
         './assets/cleaning/Flint13/IMG_3674.JPG',
         './assets/cleaning/Flint13/IMG_3675.JPG',
         './assets/cleaning/Flint13/IMG_3676.JPG',
      ],
      description: `A complete restoration including, deep clean service, sectional re-paint, sanding, finishing/sealant.`
   },
   {
      name: `Air Jordan 'University of North Carolina' 11  `,
      beforeImage: './assets/cleaning/Unc11/IMG_2583.JPG',
      afterImage: './assets/cleaning/Unc11/IMG_2617.JPG',
      images: [
         './assets/cleaning/Unc11/IMG_2583.JPG',
         './assets/cleaning/Unc11/IMG_2584.JPG',
         './assets/cleaning/Unc11/IMG_2585.JPG',
         './assets/cleaning/Unc11/IMG_2586.JPG',
         './assets/cleaning/Unc11/IMG_2587.JPG',
         './assets/cleaning/Unc11/IMG_2588.JPG',
         './assets/cleaning/Unc11/IMG_2589.JPG',
         './assets/cleaning/Unc11/IMG_2590.JPG',
         './assets/cleaning/Unc11/IMG_2591.JPG',
         './assets/cleaning/Unc11/IMG_2592.JPG',
         './assets/cleaning/Unc11/IMG_2593.JPG',
         './assets/cleaning/Unc11/IMG_2594.JPG',
         './assets/cleaning/Unc11/IMG_2595.JPG',
         './assets/cleaning/Unc11/IMG_2596.JPG',
         './assets/cleaning/Unc11/IMG_2597.JPG',
         './assets/cleaning/Unc11/IMG_2598.JPG',
         './assets/cleaning/Unc11/IMG_2599.JPG',
         './assets/cleaning/Unc11/IMG_2600.JPG',
         './assets/cleaning/Unc11/IMG_2601.JPG',
         './assets/cleaning/Unc11/IMG_2617.JPG',
         './assets/cleaning/Unc11/IMG_2618.JPG',
         './assets/cleaning/Unc11/IMG_2619.JPG',
         './assets/cleaning/Unc11/IMG_2620.JPG',
         './assets/cleaning/Unc11/IMG_2621.JPG',
         './assets/cleaning/Unc11/IMG_2622.JPG',
         './assets/cleaning/Unc11/IMG_2623.JPG',
         './assets/cleaning/Unc11/IMG_2624.JPG',
         './assets/cleaning/Unc11/IMG_2625.JPG',
         './assets/cleaning/Unc11/IMG_2626.JPG',
         './assets/cleaning/Unc11/IMG_2627.JPG',
         './assets/cleaning/Unc11/IMG_2628.JPG',
         './assets/cleaning/Unc11/IMG_2629.JPG',
         './assets/cleaning/Unc11/IMG_2630.JPG',
      ],
      description: `A complete restoration including, deep clean service, sectional re-paint, sanding, finishing/sealant.`
   },
   {
      name: `Yeezys`,
      beforeImage: './assets/cleaning/Yeezy/IMG_3080.JPG',
      afterImage: './assets/cleaning/Yeezy/IMG_3189.JPG',
      images: [
         './assets/cleaning/Yeezy/IMG_3079.JPG',
         './assets/restore/Yeezy/IMG_3080.JPG',
         './assets/cleaning/Yeezy/IMG_3081.JPG',
         './assets/cleaning/Yeezy/IMG_3082.JPG',
         './assets/cleaning/Yeezy/IMG_3083.JPG',
         './assets/cleaning/Yeezy/IMG_3084.JPG',
         './assets/cleaning/Yeezy/IMG_3085.JPG',
         './assets/cleaning/Yeezy/IMG_3086.JPG',
         './assets/cleaning/Yeezy/IMG_3087.JPG',
         './assets/cleaning/Yeezy/IMG_3088.JPG',
         './assets/cleaning/Yeezy/IMG_3182.JPG',
         './assets/cleaning/Yeezy/IMG_3183.JPG',
         './assets/cleaning/Yeezy/IMG_3184.JPG',
         './assets/cleaning/Yeezy/IMG_3185.JPG',
         './assets/cleaning/Yeezy/IMG_3186.JPG',
         './assets/cleaning/Yeezy/IMG_3187.JPG',
         './assets/cleaning/Yeezy/IMG_3188.JPG',
         './assets/cleaning/Yeezy/IMG_3189.JPG',
         './assets/cleaning/Yeezy/IMG_3190.JPG',
         './assets/cleaning/Yeezy/IMG_3191.JPG',
         './assets/cleaning/Yeezy/IMG_3192.JPG',
         './assets/cleaning/Yeezy/IMG_3193.JPG',
         './assets/cleaning/Yeezy/IMG_3194.JPG',
         './assets/cleaning/Yeezy/IMG_3195.JPG',
         './assets/cleaning/Yeezy/IMG_3196.JPG',
         './assets/cleaning/Yeezy/IMG_3197.JPG',
         './assets/cleaning/Yeezy/IMG_3198.JPG',
      ],
      description: `A complete restoration including, deep clean service, sectional re-paint, sanding, finishing/sealant.`
   },
]

// function that appends custom shoes data to DOM
app.galleryAppend = () => {
   // counter that will be used in the forEach loop to track the individual arrays.
   let counter = 0;
   // forEach method to loop through each item in the array
   app.gallerys.forEach((design) => {
      // html element creation declared in a variable
      const firstListItem = document.createElement('li');
      // creating a class for each item in the array.
      firstListItem.classList.add(`design${counter}`);
      firstListItem.classList.add(`design`);
      // setting an ID for each item in the array.
      firstListItem.setAttribute('id',`theModal${counter}`);
      // adding html into the li html element
      firstListItem.innerHTML = `
      <div class="designPic">
         <img class="customPic${counter}" src="${design.mainImage}" alt="${design.name}"
      </div>
      `
      // insert the li element as a child to the html variable. 
      app.gallery.appendChild(firstListItem);

      // ~ Modal Feature ~ //

      // storing a ID in the html element.
      app.btn = document.getElementById(`theModal${counter}`);

      // event listener that appends the modal to the DOM when user clicks.
      app.btn.addEventListener('click', () => {
         app.modal.style.display = 'block';
      });

      // if user clicks anywhere in the site, it will remove the modal. 
      window.addEventListener('click', (e) => {
         // console.log(e.target)
         const hasClass = e.target.classList.contains(`customPic1`);
         if (e.target == app.modal) {
            app.modal.style.display = 'none';
         }
      });

      // adding counter every time it completed a loop. 
      counter++;
   });


   // connecting the array of shoes classNames with a variable
   app.one = document.querySelector('.design0');
   app.two = document.querySelector('.design1');
   app.three = document.querySelector('.design2');
   app.four = document.querySelector('.design3');
   app.five = document.querySelector('.design4');
   app.six = document.querySelector('.design5');
   app.seven = document.querySelector('.design6');
   app.eight = document.querySelector('.design7');
   app.nine = document.querySelector('.design8');
   app.ten = document.querySelector('.design9');
   app.eleven = document.querySelector('.design10');
   app.twelve = document.querySelector('.design11');
   app.thirteen = document.querySelector('.design12');
   app.fourteen = document.querySelector('.design13');
   app.fifteen = document.querySelector('.design14');
   app.sixteen = document.querySelector('.design15');
   app.seventeen = document.querySelector('.design16');
   app.eighteen = document.querySelector('.design17');
   app.nineteen = document.querySelector('.design18');
   app.twenty = document.querySelector('.design19');
   app.twentyone = document.querySelector('.design20');
   app.twentytwo = document.querySelector('.design21');
   app.twentythree = document.querySelector('.design22');
   app.twentyfour = document.querySelector('.design23');
   
   // event listeners that wait for user to click on a specific shoe picture, which will append the correct info to the DOM
   app.one.addEventListener('click', () => {
      // calls the showDetail function with passed info for manipulation
      app.showDetails(app.gallerys[0]);
   });
   
   app.two.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[1]);
      console.log('second click');
   });
   
   app.three.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[2]);
      console.log('second click');
   });
   
   app.four.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[3]);
      console.log('second click');
   });
   
   app.five.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[4]);
      console.log('second click');
   });
   
   app.six.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[5]);
      console.log('second click');
   });
   
   app.seven.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[6]);
      console.log('second click');
   });
   
   app.eight.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[7]);
      console.log('second click');
   });
   
   app.nine.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[8]);
      console.log('second click');
   });
   
   app.ten.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[9]);
      console.log('second click');
   });
   
   app.eleven.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[10]);
      console.log('second click');
   });
   
   app.twelve.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[11]);
      console.log('second click');
   });
   
   app.thirteen.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[12]);
      console.log('second click');
   });
   
   app.fourteen.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[13]);
      console.log('second click');
   });
   
   app.fifteen.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[14]);
      console.log('second click');
   });
   
   app.sixteen.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[15]);
      console.log('second click');
   });
   
   app.seventeen.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[16]);
      console.log('second click');
   });
   
   app.eighteen.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[17]);
      console.log('second click');
   });
   
   app.nineteen.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[18]);
      console.log('second click');
   });
   
   app.twenty.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[19]);
      console.log('second click');
   });
   
   app.twentyone.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[20]);
      console.log('second click');
   });
   
   app.twentytwo.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[21]);
      console.log('second click');
   });
   
   app.twentythree.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[22]);
      console.log('second click');
   });
   
   app.twentyfour.addEventListener('click', ()=>{
      app.showDetails(app.gallerys[23]);
      console.log('second click');
   });

   // connecting to a html element 
   app.shoeData = document.querySelector('.shoeData');
   // html element creation 
   app.newData = document.createElement('li');

   // function that appends data of specific shoe details
   app.showDetails = (data) => {
      // changing the innerHTML with new content      
      app.newData.innerHTML = `
         <h2>${data.name}</h2>
         <div class="modalInfoBox">
            <div class="modalPicBox">
               <img src="${data.images[0]}" alt="image for ${data.name}">
            </div>
            <div class="modalPicBox">
               <img src="${data.images[1]}" alt="image for ${data.name}">
            </div>
            <div class="modalPicBox">
               <img src="${data.images[2]}" alt="image for ${data.name}">
            </div>
            <div class="modalPicBox">
               <img src="${data.images[3]}" alt="image for ${data.name}">
            </div>
         </div> 
         <h3>Description:</h3>
         <p>${data.description}</p>
      `;
      // inserting the newData as a child to the html element section
      app.shoeData.appendChild(app.newData);
   };
   

   // when user clicks on the 'x' from the modal it will remove modal from DOM
   app.span.addEventListener('click', () => {
      // hiding the modal from the user
      app.modal.style.display = 'none';
      // emptying the content in the newData variable
      app.newData.innerHTML = ``;
   });
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
      <div class="beforeAfterBox">
         <div class="restorePic">
            <img src="${fix.beforeImage}" alt="${fix.name}">
         </div>
         <div class="restorePic">
         <img src="${fix.afterImage}" alt="${fix.name}">
         </div>
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

// function that appends data from cleaning array.
app.cleaningAppend = () => {
   // forEach method on the array of restorations
   app.cleaning.forEach((cleaned)=>{
      // html element creation storing in variable declaration 
      const thirdListItem = document.createElement('li');
      // adding a className to the li element
      thirdListItem.classList.add('cleaned');
      // inserting content into the innerHTML of the element
      thirdListItem.innerHTML = `
      
      <div class="beforeAfterBox">
         <div class="cleanPic">
            <img src="${cleaned.beforeImage}" alt="${cleaned.name}">
         </div>
         <div class="cleanPic">
            <img src="${cleaned.afterImage}" alt="${cleaned.name}">
         </div>
      </div>
      <section class="cleanedBox> 
         <div class="cleanName">
            <h2 class="customName">${cleaned.name}</h2>
         </div>
         <div class="cleanDescrip">
            <p>${cleaned.description}</p>
         </div>
         <div class="serviceButtons">
            <button>
               <a href="#" class="addCart">Add to cart</a>
            </button>
            <button>
               <a href="contact.html">Contact Us</a>
            </button>
         </div>
      </section>
      `
      // appending the li element as a child to the section targeted.
      app.cleaned.appendChild(thirdListItem);
   });
};

// addListeners function that is called by app.init(). This sets off the other functions onces user enters page.
app.addListeners = () => {
   // calls 3 functions that append separate sections of data to DOM.
   app.galleryAppend();
   app.callRestore();
   app.cleaningAppend();
};

// app.init function that starts the application
app.init = () => {
   app.addListeners();
   console.log('init');
};

// initial function call to start the web app
app.init();



// galleryAppend will append the data into the DOM and also mark the specific class on each one.
// user will then click on the image, which has an onclick that should determine which