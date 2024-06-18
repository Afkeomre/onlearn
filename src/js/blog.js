import mobileNav from './modules/mobile-nav.js';
import modal from './modules/modal.js';
import forms from './modules/forms.js';
import showPassword from './modules/showPassword.js';
import activeLink from './modules/activeLink.js';
import newsletterForm from './modules/newsletterForm.js';

window.addEventListener('DOMContentLoaded', () => {
  mobileNav();
  modal('.modal__login', '[data-login]');
  modal('.modal__signup', '[data-signup]');
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
});
