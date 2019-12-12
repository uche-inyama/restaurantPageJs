import ImageLeft from './spices-left.png';
import ImageRight from './spices-right.png';

const main = document.querySelector('main');
console.log(main);
const row = document.createElement('div');
const container = document.createElement('div');
const ourStorySection = document.createElement('div');
const spicesLeftWrapper = document.createElement('div');
const spicesRightWrapper = document.createElement('div');

const imageSpiceLeft = new Image();
const imageSpiceRight = new Image();

const potriatWrapper = document.createElement('div');
const potriat = document.createElement('div');
const blog = document.createElement('div');
const header4 = document.createElement('h4');
const header2 = document.createElement('h2');
const paragraph = document.createElement('p');

row.setAttribute('class', 'row');
row.setAttribute('id', 'about');
container.setAttribute('class', 'container');
ourStorySection.setAttribute('class', 'ourStory-section');
spicesLeftWrapper.setAttribute('class', 'spices-left-wrapper');
potriatWrapper.setAttribute('class', 'potriat-wrapper');
potriat.setAttribute('class', 'potrariat');
blog.setAttribute('class', 'blog');
spicesLeftWrapper.setAttribute('class', 'spices-left-wrapper');
spicesRightWrapper.setAttribute('class', 'spices-right-wrapper');
imageSpiceLeft.src = ImageLeft;
imageSpiceRight.src = ImageRight;

header4.innerHTML = 'Our Story';
header2.innerHTML = 'Love for food';
paragraph.innerHTML = `Welcome. This is Royal plate. Elegant & sophisticated
restaurant template. Royal plate offers different home
page layouts with smart and unique design, showcasing
beautifully designed elements every restaurant website
should have. Smooth animations, fast loading and engaging
user experience are just some of the features this
template offers. So, give it a try and dive into a world
of royal restaurant websites.`;

main.appendChild(row);
row.appendChild(container);
container.appendChild(ourStorySection);
ourStorySection.append(spicesLeftWrapper);
ourStorySection.append(potriatWrapper);

spicesLeftWrapper.appendChild(imageSpiceLeft);
potriatWrapper.appendChild(potriat);
potriat.appendChild(blog);
blog.append(header4);
blog.append(header2);
blog.append(paragraph);
ourStorySection.append(spicesRightWrapper);
spicesRightWrapper.appendChild(imageSpiceRight);
