const content = document.querySelector('#content');
const row = document.createElement('div');
const nav = document.createElement('nav');
const navContainer = document.createElement('div');
const navBrand = document.createElement('a');
const navbarCollapse = document.createElement('div');
const navbarNav = document.createElement('ul');
const navLink = document.createElement('li');
const imageTag = document.createElement('img');

row.setAttribute('class', 'row row-1');
nav.setAttribute('class', 'nav navbar-expand-lg');
navContainer.setAttribute('class', 'container-navigation');
navBrand.setAttribute('class', 'navbar-brand');
navbarCollapse.setAttribute('class', 'collapse navbar-collapse');
navbarNav.setAttribute('class', 'navbar-nav mr-auto navigation');
imageTag.setAttribute('alt', 'logo');
imageTag.setAttribute('src', './49ed8e440a7d54ca9672edaa6c636d6e.png');
navLink.setAttribute('class', 'nav-Link');

content.append(row);
row.appendChild(nav);
nav.appendChild(navContainer);
navContainer.appendChild(navBrand);
navContainer.appendChild(navbarCollapse);
navBrand.appendChild(imageTag);
navbarCollapse.appendChild(navbarNav);

const navList = [
  'HOME',
  'ABOUT',
  'MENU',
  'RESERVATION',
  'CATERING',
  'GALLERY',
  'BLOG',
  'CONTACT'
];

for (var i = 0; i < 8; i++) {
  const navLink = document.createElement('li');
  navbarNav.appendChild(navLink);
  navLink.setAttribute('class', 'nav-Link');
  navLink.setAttribute('href', '#');
  navLink.innerHTML = navList[i];
}

console.log(document.body);
