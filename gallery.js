console.log('it works gallery');

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
      <a href="#" class="addCart">Add to cart</a>
      </button>
      <button>
         <a href="contact.html">Contact Us</a>
      </button>
      </div>
      `
      app.gallery.appendChild(firstListItem);
   });

   // app.addCart.addEventListener('click', () => {
   //    console.log('hey you added to the e-cart!')
   // });
};


app.addListeners = () => {
   app.galleryAppend()
};

app.init = () => {
   app.addListeners();
   console.log('init');
};

app.init();
