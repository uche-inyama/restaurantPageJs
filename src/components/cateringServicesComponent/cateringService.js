const main = document.querySelector('main');
const row = document.createElement('div');
const container = document.createElement('div');
const cateringService = document.createElement('div');
const socialEventImage = document.createElement('div');
const cateringWriteUp = document.createElement('div');
const header4 = document.createElement('h4');
const header5 = document.createElement('h5');
const header6 = document.createElement('h6');
const paragragh = document.createElement('p');
const categories = document.createElement('ul');

row.setAttribute('class', 'row');
row.setAttribute('id', 'catering');
container.setAttribute('class', 'container');
cateringService.setAttribute('class', 'catering-services');
socialEventImage.setAttribute('class', 'socialEventsImage');
cateringWriteUp.setAttribute('class', 'cateringWriteUp');
header5.setAttribute('class', 'socialEvents');
categories.setAttribute('class', 'categories');

main.append(row);
row.append(container);
container.append(cateringService);
cateringService.append(socialEventImage);
cateringService.append(cateringWriteUp);

const socialEvents = ['Birthdays', 'Family reunion', 'or just because'];
for (let i = 0; i < 3; i++) {
  const list = document.createElement('li');
  list.innerHTML = socialEvents[i];
  categories.append(list);
}
header4.innerHTML = 'Catering';
header5.innerHTML = 'SOCIAL EVENTS';
header6.innerHTML = 'more details';
cateringWriteUp.append(header4);
cateringWriteUp.append(header5);
cateringWriteUp.append(categories);
cateringWriteUp.append(paragragh);
paragragh.append(header6);
paragragh.innerHTML = `Weather you are celebrating your birthday, having a family reunion or
something else. We'll make it enjoying and memorable. Our experts
have years of experience in party planning and will make sure it is a
delicious success, enjoying and memorable for you and your guests!
Time to put your party hat on!
`;
