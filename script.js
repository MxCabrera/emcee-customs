console.log('it works');
const app = {}

// hamburger drop down menu js logic :
app.hamburger = document.querySelector('.hamburger');
app.navLink = document.querySelector('.nav__link');
app.gallery = document.querySelector('.galleryContainer');
// app.service = document.querySelector('.serviceContainer');

// on click that adds a hide class to element
app.hamburger.addEventListener('click', () => {
   app.navLink.classList.toggle('hide');
});

app.gallerys = [
   {
      name: 'Inuyasha x Inuyasha Demon Air Force 1 Low Top',
      image: 'IMG_1047.jpg',
      description: `A custom hand painted drawing of Inuysha, and the demon form of the main character of his own anime show, "Inuyasha"`

   },
   {
      name: 'Sasuke x Itachi Uchiha Air Force 1 High Top',
      image: 'IMG_1047.jpg',
      description: `A custom hand painted drawing of Sasuke Uchiha and his older Brother Itachi, along with it's family inspired "Sharingan", from the classic anime show "Naruto"`

   },
   {
      name: 'Attack x Scared - Zenitsu Air Force 1 Utility High',
      image: 'IMG_1047.jpg',
      description: `A custom hand painted drawing of Zenitsu, the Thunder breathing slayer in both attack mode and frightened scene from the spider demons, shown in the latest anime, "Demonslayer"`
   },
   {
      name: 'Itadori Yuuji x Gojo Satoru Nike Cortez',
      image: 'IMG_1047.jpg',
      description: `A custom hand painted drawing of Itadori Yuuji and Sensei Gojo Satoru created using the art design from the end credits of the upcoming anime, "Jujutsu Kaisen"`
   }
]

// app.services = [
//    {
//       name: 'Basic Cleaning',
//       description: `Base cleaning session`,
//       price: '$40',
//    },
//    {
//       name: 'Deep Cleaning',
//       description: `Deeper cleaning session, helps remove all the dirt and grime in the hard the reach areas as well as the inside & bottom sole`,
//       price: '$55',
//    },
//    {
//       name: 'Sole Icing',
//       description: `Icing the sole of your shoes. Using a solution, it will turn your yellow'd soles back to its transparent icy blue form`,
//       price: '$20/per session',
//    },
//    {
//       name: 'Re-paint touch ups',
//       description: `Service provided to areas of the shoe where the paint has scratched off or lost its color during use. Will go through process of initial coat removal, sanding, color-matching, painting, and acrylic finisher `,
//       price: '$25/per shoe',
//    },
//    {
//       name: 'Re-paint sections',
//       description: `Service provided to areas of the shoe where a large section of paint has scratched off or lost its color during use. Will go through process of initial coat removal, sanding, color-matching, painting, and acrylic finisher `,
//       price: '$45/per shoe',
//    },
//    {
//       name: 'Full Color Swap Custom',
//       description: `Changing the entire color way of the shoe to match the clients request. No designs, just color changes (Up to 4 colors max)`,
//       price: '$160',
//    },
//    {
//       name: 'Full Restoration',
//       description: `Restoring an older or beat up pair of shoes to its almost original look. Includes deep cleaning, sole icing, repaint section, and inside cleaning`,
//       price: 'price varies according to client needs',
//    },
//    {
//       name: 'Custom Shoe Design',
//       description: `Customizing a clients shoe based on their request/needs. Could have any character, quotes, items painted on it, as well as any color selections`,
//       price: 'starting rate at $110 - price varies according to client needs',
//    },
// ];

app.addListeners = () => {
   app.galleryAppend()
   // app.serviceAppend();
   // if (app.gallery === null) {
   //    console.log('gallery is null')
   //    app.gallerys.forEach((design) => {
   //       const firstListItem = document.createElement('li');
   //       firstListItem.classList.add('design');
   //       firstListItem.innerHTML = `
   //       <div class="designPic">
   //       <img src="${design.image}" alt="${design.name}"
   //       </div>
   //       <div class="designName">
   //       <h2 class="customName">${design.name}</h2>
   //       </div>
   //       <div class="designDescrip">
   //       <p>${design.description}</p>
   //       </div>
   //       <div class="serviceButtons">
   //       <button>Add to cart</button>
   //       <button>Contact Us</button>
   //       </div>
   //       `
   //       app.gallery.appendChild(firstListItem);
   
   //    });
   // } else if (app.service === null){
   //    console.log('service is null');
   //    app.services.forEach((service) => {
   //       console.log(service)
   //       const newListItem = document.createElement('li');
   //       newListItem.classList.add('services');
   //       // newListItem.setAttribute('data-aos', 'fade-up');
   //       newListItem.innerHTML = `
   //       <div class="serviceName">
   //       <h2 class="customName">${service.name}</h2>
   //       </div>
   //       <div class="serviceDescrip">
   //       <p>${service.description}</p>
   //       <p> Price: ${service.price}</p>
   //       </div>
   //       <div class="serviceButtons">
   //       <button>Add to cart</button>
   //       <button>Contact Us</button>
   //       </div>
   //       `
   //       app.service.appendChild(newListItem);
   //       console.log(newListItem)
   //    })
   // }
}


// app.serviceAppend = () => {
//    console.log(app.service);
//    app.services.forEach((service) => {
//       console.log(service)
//       const newListItem = document.createElement('li');
//       newListItem.classList.add('services');
//       // newListItem.setAttribute('data-aos', 'fade-up');
//       newListItem.innerHTML = `
//       <div class="serviceName">
//       <h2 class="customName">${service.name}</h2>
//       </div>
//       <div class="serviceDescrip">
//       <p>${service.description}</p>
//       <p> Price: ${service.price}</p>
//       </div>
//       <div class="serviceButtons">
//       <button>Add to cart</button>
//       <button>Contact Us</button>
//       </div>
//       `
//       app.service.appendChild(newListItem);
//       console.log(newListItem)
//    })
// }



app.galleryAppend = () => {
   app.gallerys.forEach((design) => {
      const firstListItem = document.createElement('li');
      firstListItem.classList.add('design');
      firstListItem.innerHTML = `
      <div class="designPic">
      <img src="${design.image}" alt="${design.name}"
      </div>
      <div class="designName">
      <h2 class="customName">${design.name}</h2>
      </div>
      <div class="designDescrip">
      <p>${design.description}</p>
      </div>
      <div class="serviceButtons">
      <button>Add to cart</button>
      <button>Contact Us</button>
      </div>
      `
      app.gallery.appendChild(firstListItem);
      
   });
};

app.hey = () => {
   console.log('hey')
}


app.init = () => {
   app.addListeners();
   app.hey()



   console.log('init');
}

app.init()



// custom shoe business page that allows users to check out the services we provide, as well as visuals that have currently been created.
// users can add services to the cart, and check out by using paypal or sending an email regarding what they want. 
// multi page (contact page, service page, previous work page, )
// about page - ABOUT Our Story Kicks Of Chicago was founded in 2017 as a small side project which has now transformed into a full customization business which specializes in customizing shoes and apparel. Every single pairs we create is handmade and made to order allowing everyone express themselves through wearable art
// will contain an array with all the previous photos and info about it to map & append to the DOM.
// how to order page? or (FAQ - frequently asked questions page) to answer all common questions
// services & restoration array. 
// some how link an empty customer cart that can add services from both custom and restores.
// users will need to send their name and email and it will save it to firebase, and will also be sent as an email to the company. 
// users can search for their previous service requests and will append only what they wanted and their name ( not the email )


// ** Stretch goals **
// search bar to check/filter through ... services?
// paypal integration
// 


