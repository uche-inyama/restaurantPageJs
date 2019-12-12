import Menu1 from './menu-item-01.png';
import Menu2 from './menu-item-02.png';
import Menu3 from './menu-item-03.png';

const main = document.querySelector('main');
const row = document.createElement('div');
const container = document.createElement('div');
const menuSection = document.createElement('div');
const gallery = document.createElement('div');
const galleryGrid = document.createElement('ul');
const header4 = document.createElement('h4');
const header24 = document.createElement('h4');
const menuStyle = document.createElement('div');
const menuStyleGrid = document.createElement('ul');
let galleryImage2 = document.createElement('li');
let span1 = document.createElement('span');
let span2 = document.createElement('span');
let header5 = document.createElement('h5');
let paragraph = document.createElement('p');

row.setAttribute('class', 'row menu-section-row');
row.setAttribute('id', 'menu');
container.setAttribute('class', 'container');
menuSection.setAttribute('class', 'menu-section');
gallery.setAttribute('class', 'gallery');
galleryGrid.setAttribute('class', 'gallery-grid');
menuStyle.setAttribute('class', 'menu-style');
menuStyleGrid.setAttribute('class', 'menu-style-grid');

for (let i = 1; i < 5; i++) {
  const galleryImage = document.createElement('li');
  galleryImage.setAttribute('class', `gallery-image-${i}`);
  galleryGrid.append(galleryImage);
}

main.append(row);
row.append(container);
container.append(menuSection);
menuSection.append(gallery);
menuSection.append(menuStyle);
gallery.append(galleryGrid);
menuStyle.appendChild(menuStyleGrid);

menuStyleGrid.append(galleryImage2);
galleryImage2.setAttribute('class', 'header');
header4.innerHTML = `From the menu`;
header24.innerHTML = `special offers`;
galleryImage2.append(header4);
galleryImage2.append(header24);

const images = [Menu1, Menu2, Menu3];
const headers5 = ['ROYAL BREAKFAST', 'ROYAL BRUNCH', 'ROYAL DINNER'];
const paragraphs = [
  `Fried eggs, fried bacon, toast, fresh tomato salad, cup
of coffee or tea.`,
  `Warm chicken wings, portobello mushrooms, fresh
mozzarella, coffe or tea.`,
  `Grilled Beaf steak, roasted red potatos with rosemary,
mashrooms sause, vine.`
];

const price = [15, 22, 28];
for (let i = 0; i < images.length; i++) {
  galleryImage2 = document.createElement('li');
  span1 = document.createElement('span');
  span2 = document.createElement('span');
  span2.setAttribute('class', 'price');
  span2.innerHTML = `$${price[i]}`;
  header5 = document.createElement('h5');
  header5.innerHTML = headers5[i];
  paragraph = document.createElement('p');
  paragraph.innerHTML = paragraphs[i];
  const image = new Image();
  image.src = images[i];
  galleryImage2.append(image);
  galleryImage2.append(span1);

  span1.append(header5);
  span1.append(paragraph);
  galleryImage2.append(span2);
  menuStyleGrid.append(galleryImage2);
}
