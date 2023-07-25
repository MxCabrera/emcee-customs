const app = {}

// hamburger drop down menu js logic :
app.hamburger = document.querySelector('.hamburger');
app.navLink = document.querySelector('.nav__link');


app.service = document.querySelector('.serviceContainer');

app.hamburger.addEventListener('click', () => {
   app.navLink.classList.toggle('hide');
});

app.services = [
   {
      name: 'Basic Cleaning',
      description: `Base cleaning session`,
      price: '$40',
   },
   {
      name: 'Deep Cleaning',
      description: `Deeper cleaning session, helps remove all the dirt and grime in the hard the reach areas as well as the inside & bottom sole`,
      price: '$55',
   },
   {
      name: 'Sole Icing',
      description: `Icing the sole of your shoes. Using a solution, it will turn your yellow'd soles back to its transparent icy blue form`,
      price: '$20/per session',
   },
   {
      name: 'Re-paint touch ups',
      description: `Service provided to areas of the shoe where the paint has scratched off or lost its color during use. Will go through process of initial coat removal, sanding, color-matching, painting, and acrylic finisher `,
      price: '$25/per shoe',
   },
   {
      name: 'Re-paint sections',
      description: `Service provided to areas of the shoe where a large section of paint has scratched off or lost its color during use. Will go through process of initial coat removal, sanding, color-matching, painting, and acrylic finisher `,
      price: '$45/per shoe',
   },
   {
      name: 'Full Color Swap Custom',
      description: `Changing the entire color way of the shoe to match the clients request. No designs, just color changes (Up to 4 colors max)`,
      price: '$160',
   },
   {
      name: 'Full Restoration',
      description: `Restoring an older or beat up pair of shoes to its almost original look. Includes deep cleaning, sole icing, repaint section, and inside cleaning`,
      price: 'price varies according to client needs',
   },
   {
      name: 'Custom Shoe Design',
      description: `Customizing a clients shoe based on their request/needs. Could have any character, quotes, items painted on it, as well as any color selections`,
      price: 'starting rate at $110 - price varies according to client needs',
   },
];

// add listeners function that is called by app.init
app.addListeners = () => {
      app.services.forEach((service) => {
         const newListItem = document.createElement('li');
         newListItem.classList.add('services');
         // newListItem.setAttribute('data-aos', 'fade-up');
         newListItem.innerHTML = `
      <div class="serviceName">
      <h2 class="customName">${service.name}</h2>
      </div>
      <div class="serviceDescrip">
      <p>${service.description}</p>
      <p> Price: ${service.price}</p>
      </div>
      <div class="serviceButtons">
      <button>Add to cart</button>
      <button>Contact Us</button>
      </div>
      `
         app.service.appendChild(newListItem);
         console.log(newListItem)
      })
}


app.init = () => {
   app.addListeners();
}


app.init()