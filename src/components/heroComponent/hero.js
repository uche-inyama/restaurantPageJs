import Icon from './icon.svg';

const main = document.createElement('main');
const row = document.createElement('div');
const container = document.createElement('div');
const heroSection = document.createElement('div');
const imgWrapper = document.createElement('div');
const header4 = document.createElement('h4');
const header2 = document.createElement('h2');
const iconWrapper = document.createElement('div');
const span = document.createElement('span');
const image = new Image();

row.setAttribute('class', 'row');
container.setAttribute('class', 'container');
heroSection.setAttribute('class', 'hero-section col-12');
imgWrapper.setAttribute('class', 'imgWrapper');
iconWrapper.setAttribute('class', 'icon-wrapper');
image.src = Icon;

content.append(main);
main.appendChild(row);
row.appendChild(container);
container.appendChild(heroSection);
heroSection.appendChild(imgWrapper);
imgWrapper.append(header4);
imgWrapper.append(header2);
imgWrapper.append(iconWrapper);
iconWrapper.append(image);

header2.innerHTML = 'Exceptional catering services';
header4.innerHTML = 'for your special day';
