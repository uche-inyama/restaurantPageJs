const main = document.querySelector('main');
const row = document.createElement('div');
const container = document.createElement('div');
const reservationBooking = document.createElement('div');
const reservationImage1 = document.createElement('div');
const form1 = document.createElement('div');
const form = document.createElement('form');
const formheader = document.createElement('div');
const header4 = document.createElement('h4');
const header3 = document.createElement('h3');
const reservationImage2 = document.createElement('div');
const textboxWrapper = document.createElement('div');

header4.innerHTML = 'Reservation';
header3.innerHTML = 'Book your table';

const list = [
  'name-wrap',
  'email-wrap',
  'date-wrap',
  'time-wrap',
  'party-size-wrap',
  'submit'
];

const placeholder = [
  'Your name',
  'Your email',
  '17/09/2019',
  '6:00pm',
  '4 people'
];

row.setAttribute('class', 'row');
container.setAttribute('class', 'container');
reservationBooking.setAttribute('class', 'reservationBooking');
reservationImage1.setAttribute('class', 'reservationImage1');
form1.setAttribute('class', 'form');
formheader.setAttribute('class', 'formheader');
textboxWrapper.setAttribute('class', 'textbox-wrapper');
reservationImage2.setAttribute('class', 'reservationImage2');

main.append(row);
row.append(container);
container.append(reservationBooking);
reservationBooking.append(reservationImage1);
reservationBooking.append(form1);
form1.append(formheader);
formheader.append(header4);
formheader.append(header3);
form1.append(form);
form.append(textboxWrapper);
for (let i = 0; i < list.length; i++) {
  const inputWrap = document.createElement('div');
  const input = document.createElement('input');
  inputWrap.setAttribute('class', `${list[i]} input-wrap`);
  input.setAttribute('placeholder', `${placeholder[i]}`);
  input.setAttribute('type', 'text');
  inputWrap.append(input);
  textboxWrapper.append(inputWrap);
}
reservationBooking.append(reservationImage2);

const submitButton = document.querySelector('.submit').firstChild;
submitButton.setAttribute('class', 'submit');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('value', 'Find a place');
