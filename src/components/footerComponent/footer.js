const content = document.querySelector('#content');
const footer = document.createElement('footer');
const container = document.createElement('div');
const footerDiv = document.createElement('div');
const center = document.createElement('center');
const logo = document.createElement('div');
const socialMedia = document.createElement('div');
const form = document.createElement('form');
const footerNav = document.createElement('div');
const header6 = document.createElement('h6');
const unorderedList = document.createElement('ul');
const unorderedList1 = document.createElement('ul');

footer.setAttribute('class', 'row');
container.setAttribute('class', 'container');
footerDiv.setAttribute('class', 'footer');
center.setAttribute('class', 'center');
logo.setAttribute('class', 'logo');
socialMedia.setAttribute('class', 'socialMedia');
footerNav.setAttribute('class', 'footerNav');

content.append(footer);
footer.append(container);
container.append(footerDiv);
footerDiv.append(center);
center.append(logo);
for (let i = 0; i < 5; i++) {
  const header5 = document.createElement('h5');
  center.append(header5);
}
footerDiv.append(socialMedia);
socialMedia.append(unorderedList);

const fontAwesome = [
  'fa fa-facebook',
  'fa fa-twitter',
  'fa fa-instagram',
  'fa fa-linkedin'
];

for (let i = 0; i < 4; i++) {
  const list = document.createElement('li');
  const linkTag = document.createElement('a');
  const fontTag = document.createElement('i');
  linkTag.setAttribute('href', '#');
  fontTag.setAttribute('class', `${fontAwesome[i]}`);
  linkTag.append(fontTag);
  list.append(linkTag);
  unorderedList.append(list);
}
socialMedia.append(form);

const inputClass = ['newsletter', 'button'];
const inputType = ['text', 'button'];
for (let i = 0; i < 2; i++) {
  const input = document.createElement('input');
  form.append(input);
  input.setAttribute('class', `${inputClass[i]}`);
  input.setAttribute('class', `${inputType[i]}`);
}

footerDiv.append(footerNav);
footerNav.append(header6);
footerNav.append(unorderedList1);

const text = [
  'Home',
  'About',
  'menu',
  'reservations',
  'catering',
  'gallery',
  'blog',
  'contact'
];
for (let i = 0; i < text.length; i++) {
  const list = document.createElement('li');
  list.innerHTML = text[i];
  unorderedList1.append(list);
}
