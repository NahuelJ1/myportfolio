const menu = document.querySelector('.menu');
const logo = document.querySelector('header h3');
const hamburger = document.querySelector('#openmenu');
const closeHamburger = document.querySelector('#closemenu');
const ul = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const menuBg = document.querySelector('.menu-bg');
const lis = Array.from(navLinks);
const btn = document.querySelectorAll('.action-btn');

const navbar = document.querySelector('.mynav');
window.onscroll = () => {
  if (window.scrollY > 40) {
    navbar.classList.add('nav-active');
  } else {
    navbar.classList.remove('nav-active');
  }
};

function toggler() {
  logo.classList.toggle('hide');
  ul.classList.toggle('hide');
  menuBg.classList.toggle('remove');
}

menu.addEventListener('click', () => {
  toggler();
  hamburger.classList.toggle('remove');
  closeHamburger.classList.toggle('remove');
  document.body.classList.toggle('no-scroll');
});

for (let i = 0; i < lis.length; i += 1) {
  lis[i].addEventListener('click', () => {
    toggler();
    closeHamburger.classList.add('remove');
    hamburger.classList.remove('remove');
    document.body.classList.remove('no-scroll');
  });
}

// mobile
const myProject = [{
  id: 0,
  name: 'Customizable Lofi Website',
  description: 'This project is a clone of Lofi.co that allows users to create a custom environment for productive work with interactive scenes, music and powerful tools.',
  technologies: ['React', 'Redux', 'Firebase', 'SASS'],
  source: 'https://github.com/NahuelJ1/Customizable-lofi-app',
  image: 'img/bdsconference.PNG',
  'live version': 'https://customizable-lofi-app.vercel.app',
}, {
  id: 1,
  name: 'Rating App Movies',
  description: 'Movie discovery and research web app. Users can search for their favourite movies, browse throughout multiple genres, and get cast/crew info and ratings. Making it an ideal platform for movie enthusiasts.',
  technologies: ['Vite', 'Axios', 'SASS', 'React'],
  source: 'https://github.com/NahuelJ1/rating-app-movies',
  image: 'img/GymFit.PNG',
  'live version': 'https://appmoviex.vercel.app/',
}, {
  id: 2,
  name: 'Ecommerce with Paypal Payments',
  description: 'This ecommerce app is built with Sanity CMS and NextJS, and features secure payment processing through Paypal, making it a reliable platform for online shopping with an intuitive user experience.',
  technologies: ['NextJS', 'Sanity', 'NodeJS'],
  source: 'https://github.com/NahuelJ1/ecommerce-react',
  image: './img/covid.PNG',
  'live version': 'https://ecommerce-react-nahuelj1.vercel.app/',
}, {
  id: 3,
  name: 'Covid Statistics',
  description: 'Covid Statistics is a web application to present the numerical data about corona virus pandemic, fetching the data from an API.',
  technologies: ['Redux', 'Bootstrap', 'JavaScript', 'ES6 Modules'],
  source: 'https://github.com/NahuelJ1/covid-statistics',
  image: 'img/math-magicains.PNG',
  'live version': 'https://covid-statistics-sandy.vercel.app/',
}, {
  id: 4,
  name: 'Finance Dashboard Overview',
  description: 'A financial dashboard that includes the United States Interest Rate, as well as price fluctuations in financial markets, Currencies, Metals and Cryptocurrencies.',
  technologies: ['XML', 'CSS', 'HTML'],
  source: 'https://github.com/NahuelJ1/finance-dashboard',
  image: 'img/awesome-list.PNG',
  'live version': 'https://finance-dashboard-rho.vercel.app/',
}, {
  id: 5,
  name: 'Calculator BMR',
  description: 'Calculate your daily calorie needs using BMR method with HTML, CSS, and Javascript, including validations. Get an accurate estimate of the calories required for maintaining, losing or gaining weight.',
  technologies: ['HTML', 'CSS', 'Javascript'],
  source: 'https://github.com/NahuelJ1/bmr-calculator',
  image: './img/bookstore1.PNG',
  'live version': 'https://bmr-calculator-rho.vercel.app/',
}];

function createPopup(idx, prop) {
  document.body.classList.add('no-scroll');
  const subject = document.querySelector('#work-section');
  subject.insertAdjacentHTML('afterend',
    `<div id="popup-window" class="">
  <div>
  <div>
  <i class="bi bi-x-circle-fill"></i>
  <img src="${prop[idx].image}" alt="project" class="stretch project-img">
  </div>
  <div class="flex-column">
  <h2>${prop[idx].name}</h2>
  <ul class="flex">
  ${prop[idx].technologies.map((item) => `<li class="li-padding bg-ash tech">${item}</li>`).join('')}
  </ul>
  <p>${prop[idx].description}</p>
  <div class="btn-action stretch flex">
  <a href="${prop[idx]['live version']}" target="_blank"><button type="button" class="btn-bg-green flex" id="popup-btn">See Live<img src="img/see-live-icon.png" alt="see-live-icon"></button></a>
  <a href="${prop[idx].source}" target="_blank"><button type="button" class="btn-bg-green flex" id="popup-btn">See Source<img src="img/Vector.png" alt="github-logo"></button></a>
  </div>
  </div>
  </div>
  </div>`);
}

function dltbtn(dbtn) {
  dbtn.addEventListener('click', () => {
    document.body.classList.remove('no-scroll');
    document.querySelector('#popup-window').setAttribute('style', 'left: -2000px; transition: 0.8s ease;');
  });
}

// popup
function handleClick(e) {
  const index = e.target.id;
  createPopup(index, myProject);
  const btnClose = document.querySelector('.bi-x-circle-fill');
  dltbtn(btnClose);
}

btn.forEach((item) => {
  item.addEventListener('click', handleClick);
});
const email = document.querySelector('#mail');
const form = document.querySelector('form');
const errorMsg = document.querySelector('#message');

function handleSubmit(e) {
  e.preventDefault();
  const regex = /[A-Z]/g;
  const userEmail = email.value;

  if (userEmail.match(regex)) {
    if (!errorMsg.classList.contains('error')) {
      errorMsg.classList.add('error');
      const icon = document.createElement('i');
      icon.classList.add('fa-sharp', 'fa-solid', 'fa-circle-info');
      errorMsg.appendChild(icon);
      const p = document.createElement('p');
      p.innerHTML = 'Email should be in lower case';
      errorMsg.appendChild(p);

      setTimeout(() => {
        errorMsg.innerHTML = '';
        errorMsg.classList.remove('error');
      }, 3000);
    }
  } else {
    errorMsg.remove();
    form.submit();
  }
}

form.addEventListener('submit', handleSubmit);

let formxx = { name: '', mail: '', msg: '' };

if (localStorage.getItem('portfolio') !== null) {
  const newdata = localStorage.getItem('portfolio');
  formxx = JSON.parse(newdata);
}
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach((item) => {
  item.value = formxx[item.id];
  item.addEventListener('input', (e) => {
    formxx[e.target.id] = e.target.value;
    const data = JSON.stringify(formxx);
    localStorage.setItem('portfolio', data);
  });
});