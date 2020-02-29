import './components/externalStyleSheet.js';
import './reset.css';
import './index.css';
import './components/headerComponent/logo.png';
import './components/homeComponent/bkg-img4.jpg';
import './components/menuComponent/gallery-1s.jpg';
import './components/menuComponent/gallery-2s.jpg';
import './components/menuComponent/gallery-3s.jpg';
import './components/menuComponent/gallery-4s.jpg';

import './components/headerComponent/nav.js';
import './components/homeComponent/hero.js';
import './components/aboutComponent/ourStory.js';
import './components/menuComponent/menu.js';
import './components/cateringServicesComponent/cateringService.js';
import './components/reservationComponent/reservation.js';
import './components/contactComponent/footer.js';
import 'font-awesome/css/font-awesome.css';

const app = {
  pages: [],
  show: new Event('show'),
  init: function() {
    document.querySelectorAll('.nav-Link').forEach(link => {
      link.addEventListener('click', app.nav);
    });
    history.replaceState({}, 'Home', '#home');

    /* handling the back button poppin means, clicking the back navigation. */
    window.addEventListener('popstate', app.poppin);
  },

  nav: function(evt) {
    evt.preventDefault();
    let currentPage = evt.target.getAttribute('data-target');
    document.querySelector('.active').classList.remove('active');
    document.getElementById(currentPage).classList.add('active');
    history.pushState({}, currentPage, `#${currentPage}`);
  },
  poppin: function(evt) {
    let hash = location.hash.replace('#', '');
    document.querySelector('.active').classList.remove('active');
    document.getElementById(hash).classList.add('active');
  }
};

document.addEventListener('DOMContentLoaded', app.init);
