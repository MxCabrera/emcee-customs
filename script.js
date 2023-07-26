// name spacing app 
const app = {};

// hamburger drop down menu js logic :
app.hamburger = document.querySelector('.hamburger');
app.navLink = document.querySelector('.nav__link');
app.gallery = document.querySelector('.galleryContainer');
app.cart = document.querySelector('.eCart')

// on click that adds a hide class to element
app.hamburger.addEventListener('click', () => {
   app.navLink.classList.toggle('hide');
});

// on click to travel to e-cart page IF we choose to create a modal pop up instead of a html page
app.cart.addEventListener('click', () => {
   console.log('hey you reached the e-cart!')
});


// gallery portfolio array for later use
app.gallerys = [
   {
      name: 'Inuyasha x Inuyasha Demon AF1 Low',
      image: './assets/IMG_3047.JPG',
      description: `A custom hand painted drawing of Inuysha, and the demon form of the main character of his own anime show, "Inuyasha"`

   },
   {
      name: 'Sasuke x Itachi Uchiha AF1 High',
      image: 'IMG_1047.jpg',
      description: `A custom hand painted drawing of Sasuke Uchiha and his older Brother Itachi, along with it's family inspired "Sharingan", from the classic anime show "Naruto"`

   },
   {
      name: 'Attack x Scared - Zenitsu AF1 Utility High',
      image: 'IMG_1047.jpg',
      description: `A custom hand painted drawing of Zenitsu, the Thunder breathing slayer in both attack mode and frightened scene from the spider demons, shown in the latest anime, "Demonslayer"`
   },
   {
      name: 'Itadori Yuuji x Gojo Satoru Nike Cortez',
      image: 'IMG_1047.jpg',
      description: `A custom hand painted drawing of Itadori Yuuji and Sensei Gojo Satoru created using the art design from the end credits of the upcoming anime, "Jujutsu Kaisen"`
   }
]



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
      <button>
      <a href="#" class="addCart${counter}">Add to cart</a>
      </button>
      <button>
         <a href="contact.html">Contact Us</a>
      </button>
      </div>
      `
      app.gallery.appendChild(firstListItem);
   });
   
   app.addCart.addEventListener('click', () => {
      console.log('hey you added to the e-cart!')
   });
};




app.addListeners = () => {
   app.galleryAppend()
};

app.init = () => {
   app.addListeners();
   console.log('init');
};

app.init();



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

// creating a gallery in which, if you click on it it will pop up with a modal and information on the shoe. 


// ** Stretch goals **
// search bar to check/filter through ... services?
// paypal integration
// 



// pseudo code for the e-cart
// on click that will make the pop up modal appear
// call the firebase and get the data
// fire off the data found and append it to the empty container e-cart
// should have a delete button that will splice or remove the specific item from the cart array

// stretch goals: + / - the product in the ecart if they want to add another item thats already in the cart