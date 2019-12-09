let linkElement1 = document.createElement('link');
linkElement1.setAttribute('rel', 'stylesheet');
linkElement1.setAttribute('type', 'text/css');
linkElement1.setAttribute('id', 'linkElement');
linkElement1.setAttribute('href', './main.css');

console.log(document.head);
console.log(document.head.appendChild(linkElement1));
