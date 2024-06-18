import mobileNav from './modules/mobile-nav.js';
import showList from './modules/showList.js';
import fetchBtns from './modules/fetchBtns.js';
import fetchCategories from './modules/fetchCategories.js';
import fetchCourses from './modules/fetchCourses.js';
import fetchExeclusive from './modules/fetchExeclusive.js';
import viewAll from './modules/viewAll.js';
import adjustSwiper from './modules/adjustSwiper.js';
import modal from './modules/modal.js';
import forms from './modules/forms.js';
import showPassword from './modules/showPassword.js';
import tabs from './modules/tabs.js';
import loadVideo from './modules/loadVideo.js';
import activeLink from './modules/activeLink.js';
import newsletterForm from './modules/newsletterForm.js';

window.addEventListener('DOMContentLoaded', () => {
  mobileNav();
  showList(
    '.benefits__btn',
    '.benefits__list',
    '.benefits__row',
    '.benefits__list-item',
    'Benefits'
  );
  showList(
    '.training__btn',
    '.training__list',
    '.training__row',
    '.training__list-item',
    'Training'
  );
  fetchBtns();
  fetchCategories();
  fetchCourses();
  fetchExeclusive();
  viewAll(
    '.category__btn',
    '.category__cards',
    '.category',
    '.category__card',
    'View all',
    'Less categories'
  );
  adjustSwiper();
  modal('.modal__login', '[data-login]');
  modal('.modal__signup', '[data-signup]');
  modal('.modal__video', '[data-video]');
  showPassword();
  forms(
    '#loginForm',
    'You are successfully logged in to your account',
    'This user was not found. Please sign up at first'
  );
  forms(
    '#signupForm',
    'You are successfully registered',
    'This data has already been registered. Please log in or use another data to sign up'
  );
  newsletterForm('#newsletterForm');
  activeLink('.header-nav__list a');
  activeLink('.mobile-nav__list a');
  tabs(
    '.courses__btn',
    '.courses__cards',
    '.courses__buttons',
    'courses__btn_active'
  );
  loadVideo(
    '[data-video]',
    '.modal__video-content',
    'https://www.youtube.com/embed/CRJJY6sX4Sk?si=q0bG-5CwZPaVAIAb?enablejsapi=1&rel=0'
  );
});
