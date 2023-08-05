const app = {};

// hamburger drop down menu js logic :
app.hamburger = document.querySelector('.hamburger');
app.navLink = document.querySelector('.nav__link');

app.modal = document.getElementById('myModal');
app.span = document.querySelector('.close');
app.serviceModal = document.querySelector('.serviceData');
app.userCart = document.getElementById('userCart');
// connecting to serviceContainer element
app.service = document.querySelector('.serviceContainer');

// menu drop down event listener
app.hamburger.addEventListener('click', () => {
   app.navLink.classList.toggle('hide');
});

app.userCostArray = []

// services array that contain information & prices of each product.
app.services = [
   {
      name: 'Basic Cleaning',
      description: `Base cleaning session`,
      price: '$40.00',
      cost: 40,
      code: 'bc'
   },
   {
      name: 'Deep Cleaning',
      description: `Deeper cleaning session, helps remove all the dirt and grime in the hard the reach areas as well as the inside & bottom sole`,
      price: '$55.00',
      cost: 55,
      code: 'dc'
   },
   {
      name: 'Sole Icing',
      description: `Icing the sole of your shoes. Using a solution, it will turn your yellow'd soles back to its transparent icy blue form`,
      price: '$20.00/per session',
      cost: 20,
      code: 'si'
   },
   {
      name: 'Re-paint touch ups',
      description: `Service provided to areas of the shoe where the paint has scratched off or lost its color during use. Will go through process of initial coat removal, sanding, color-matching, painting, and acrylic finisher `,
      price: '$25.00/per shoe',
      cost: 25,
      code: 'rpt'
   },
   {
      name: 'Re-paint sections',
      description: `Service provided to areas of the shoe where a large section of paint has scratched off or lost its color during use. Will go through process of initial coat removal, sanding, color-matching, painting, and acrylic finisher `,
      price: '$45.00/per shoe',
      cost: 45,
      code: 'rps'
   },
   {
      name: 'Full Color Swap Custom',
      description: `Changing the entire color way of the shoe to match the clients request. No designs, just color changes (Up to 4 colors max)`,
      price: '$160.00',
      cost: 160,
      code: 'fcs'
   },
   {
      name: 'Full Restoration',
      description: `Restoring an older or beat up pair of shoes to its almost original look. Includes deep cleaning, sole icing, repaint section, and inside cleaning`,
      price: 'price varies according to client needs, base rate starts at $150',
      cost: 150,
      code: 'rf'
   },
   {
      name: 'Custom Shoe Design',
      description: `Customizing a clients shoe based on their request/needs. Could have any character, quotes, items painted on it, as well as any color selections`,
      price: 'starting rate at $120.00 - price varies according to client needs',
      cost: 120,
      code: 'csd'
   }
];

app.emptyCart = () => {
   // if service modal container is empty, tell users theres nothing in the cart
   if (app.serviceModal.innerHTML == '') {
      // adding content into element.
      app.serviceModal.innerHTML = `
         <div class="emptyCart">
            <h4>Theres nothing in your cart</h4>
         </div>
      `;
   };
};

app.showCart = () => {
   app.modal.style.display = 'block';
}
app.hideCart = () => {
   app.modal.style.display = 'none';
}

app.finalCost = document.querySelector('.finalCost');


app.addCost = () => {
   console.log(app.userCostArray);
   let sum = 0;
   for (let i=0; i < app.userCostArray.length; i++) {
      sum+= app.userCostArray[i];
      app.finalCost.innerHTML = `${sum}`
   };
}


app.minusCost = (data) => {
   let sum = 0;
   const toDelete = data;
   console.log(data);
   const newArray = app.userCostArray.filter(item => !toDelete.includes(item))
   // app.userCostArray.remove(data);
   for (let i = 0; i < app.userCostArray.length; i++) {
      sum -= app.userCostArray[i];
      console.log(sum);
      app.finalCost.innerHTML = `${sum}`
      return sum;
   };
   console.log(newArray);
}



app.addProduct = (cartCounter, data, newData) => {
   if (app.serviceModal.innerHTML == '\n         <div class="emptyCart">\n            <h4>Theres nothing in your cart</h4>\n         </div>\n      ') {
      // clear the text in the html element.
      app.serviceModal.innerHTML = '';
   };
   console.log(data.cost);
   // adding a new product in the user cart.
   newData.innerHTML = `
         <div class="product${cartCounter} product">
            <div class="leftside">
               <h1>- ${data.name}</h1>
               <p>Price:$${data.cost}.00</p>
               <p class="hidden">${data.cost}</p>
            </div>
            <div class="rightside">
               <button class="remove${cartCounter}">remove</button>
            </div>
         </div>

         `;
   app.userCostArray.push(data.cost);
   console.log(app.userCostArray);
   app.addCost()
   // inserting the product as a child to the parent element.
   cartCounter++;
   app.serviceModal.appendChild(app.newData);

   // connecting the remove buttons in the cart
   app.removeItemOne = document.querySelector('.remove1');
   app.removeItemTwo = document.querySelector('.remove2');
   app.removeItemThree = document.querySelector('.remove3');
   app.removeItemFour = document.querySelector('.remove4');
   app.removeItemFive = document.querySelector('.remove5');
   app.removeItemSix = document.querySelector('.remove6');
   app.removeItemSeven = document.querySelector('.remove7');
   app.removeItemEight = document.querySelector('.remove8');
   app.removeItemNine = document.querySelector('.remove9');
}


// if user clicks cart in nav bar, make modal appear in DOM
app.userCart.addEventListener('click', ()=>{
   // display: block;
   app.showCart();
   console.log(app.serviceModal);
   app.emptyCart();
});

// if user clicks on x button in the modal, remove modal from DOM.
app.span.addEventListener('click', () => {
   // hiding the modal from the user
   app.hideCart();
});


app.appendService = (counter, service) => {
   // li html element creation stored in variable
   const newListItem = document.createElement('li');
   // adding class to html element
   newListItem.classList.add('services');
   newListItem.classList.add(`services${counter}`);
   // adding an ID to the element
   newListItem.setAttribute('id', `cart${counter}`);
   // adding content to html element
   newListItem.innerHTML = `
         <div class="serviceName">
            <h2 class="customName">${service.name}</h2>
         </div>
         <div class="serviceDescrip">
            <p>${service.description}</p>
            <p> <b>Price</b>: ${service.price}</p>
         </div>
         <div class="serviceButtons">
            <button class="addCart contactButton${counter}">Add to cart</button>
            <button class="contactUs">
            <a href="./contact.html">Contact Us</a>
            </button>
         </div>
         `;
   // inserting html element as a child to parent container
   app.service.appendChild(newListItem);
}



// add listeners function that is called by app.init
app.addListeners = () => {
   // base counter for tracking
   let counter = 0; 

   // forEach method that loops through service array.
   app.services.forEach((service) => {
      app.appendService(counter, service);

      // storing html element by ID into variable.
      app.btn = document.getElementById(`cart${counter}`);

      // if user click on the button, make modal appear in DOM. 
      app.btn.addEventListener('click', () => {
         app.showCart();
      });

      // window event listener if user click on window.
      window.addEventListener('click', (e) => {
         // we dont need this
         const hasClass = e.target.classList.contains(`customPic1`);
         // if user clicks on app.modal, then remove the modal.
         if (e.target == app.modal) {
            app.hideCart();
         };
      });
      // add 1 to counter 
      counter++;
   });
   
   
   // connecting the add to cart button to the correct html element.
   app.contactButtonOne = document.querySelector('.contactButton0');
   app.contactButtonTwo = document.querySelector('.contactButton1');
   app.contactButtonThree = document.querySelector('.contactButton2');
   app.contactButtonFour = document.querySelector('.contactButton3');
   app.contactButtonFive = document.querySelector('.contactButton4');
   app.contactButtonSix = document.querySelector('.contactButton5');
   app.contactButtonSeven = document.querySelector('.contactButton6');
   app.contactButtonEight = document.querySelector('.contactButton7');

   // when user clicks on the service they want, append it to the DOM in the cart
   app.contactButtonOne.addEventListener('click', ()=>{
      app.showDetails(app.services[0]);
   });

   app.contactButtonTwo.addEventListener('click', ()=>{
      app.showDetails(app.services[1]);
   });

   app.contactButtonThree.addEventListener('click', ()=>{
      app.showDetails(app.services[2]);
   });

   app.contactButtonFour.addEventListener('click', ()=>{
      app.showDetails(app.services[3]);
   });

   app.contactButtonFive.addEventListener('click', ()=>{
      app.showDetails(app.services[4]);
   });

   app.contactButtonSix.addEventListener('click', ()=>{
      app.showDetails(app.services[5]);
   });

   app.contactButtonSeven.addEventListener('click', ()=>{
      app.showDetails(app.services[6]);
   });

   app.contactButtonEight.addEventListener('click', ()=>{
      app.showDetails(app.services[7]);
   });


   app.removeProduct = () => {
      // connecting the productBox for eventual deletion 
      app.test = document.querySelector('.hidden');
      app.deletedOne = document.querySelector('.productBox1');
      app.deletedTwo = document.querySelector('.productBox2');
      app.deletedThree = document.querySelector('.productBox3');
      app.deletedFour = document.querySelector('.productBox4');
      app.deletedFive = document.querySelector('.productBox5');
      app.deletedSix = document.querySelector('.productBox6');
      app.deletedSeven = document.querySelector('.productBox7');
      app.deletedEight = document.querySelector('.productBox8');
      app.deletedNine = document.querySelector('.productBox9');

      // when user clicks, remove the box that corresponds to what user removed. 
      app.removeItemOne.addEventListener('click', () => {
         app.deletedOne.remove();
         app.minusCost(app.test.innerHTML);
         app.emptyCart();
      });
      app.removeItemTwo.addEventListener('click', () => {
         app.deletedTwo.remove();
         app.minusCost(app.test.innerHTML);
         app.emptyCart();
      });
      app.removeItemThree.addEventListener('click', () => {
         app.deletedThree.remove();
         app.minusCost(app.test.innerHTML);
         app.emptyCart();
      });
      app.removeItemFour.addEventListener('click', () => {
         app.deletedFour.remove();
         app.minusCost(app.test.innerHTML);
         app.emptyCart();
      });
      app.removeItemFive.addEventListener('click', () => {
         app.deletedFive.remove();
         app.minusCost(app.test.innerHTML);
         app.emptyCart();
      });
      app.removeItemSix.addEventListener('click', () => {
         app.deletedSix.remove();
         app.minusCost(app.test.innerHTML);
         app.emptyCart();
      });
      app.removeItemSeven.addEventListener('click', () => {
         app.deletedSeven.remove();
         app.minusCost(app.test.innerHTML);
         app.emptyCart();
      });
      app.removeItemEight.addEventListener('click', () => {
         app.deletedEight.remove();
         app.minusCost(app.test.innerHTML);
         app.emptyCart();
      });
      app.removeItemNine.addEventListener('click', () => {
         app.deletedNine.remove();
         app.minusCost(app.test.innerHTML);
         app.emptyCart();
      });
   }
   
   
   let cartCounter = 1;
   
   // function that will add and show product users added into cart. 
   app.showDetails = (data) => {
      // empty array for future use
      app.serviceCheck = [];
      // li element creation, storing in variable
      app.newData = document.createElement('li');
      // adding a class to every new product
      app.newData.classList.add(`productBox${cartCounter}`);
      // forEach method
      app.serviceCheck.forEach((item)=>{
         // if the serivce code matches any item in the array, let us know. 
         if (data.code === item) {
            console.log(`yes, ${data.code} matches with item inside serviceCheck`);
         } else {
            console.log('no match!')
            console.log(app.serviceCheck);
         };
      });
      
      app.addProduct(cartCounter, data, app.newData)

      // pushing service code into array to check is user has already added the product.
      app.serviceCheck.push(data.code);

      // adding 1 to the counter variable 
      cartCounter++;
      // remove product in cart if user clicks.
      app.removeProduct();

   };
};

// app.init function to initialize the web application.
app.init = () => {
   // addListeners function call
   app.addListeners();
};

// calling app.init function
app.init();

