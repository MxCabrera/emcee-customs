console.log('it works');

const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
   navLink.classList.toggle('hide');
});


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
