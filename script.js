

// name spacing app 
const app = {};

// hamburger drop down menu js logic :
app.hamburger = document.querySelector('.hamburger');
app.navLink = document.querySelector('.nav__link');
app.cart = document.querySelector('.eCart')

// on click that adds a hide class to element
app.hamburger.addEventListener('click', () => {
   app.navLink.classList.toggle('hide');
});

// on click to travel to e-cart page IF we choose to create a modal pop up instead of a html page
// app.cart.addEventListener('click', () => {
//    console.log('hey you reached the e-cart!')
// });


app.addListeners = () => {
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