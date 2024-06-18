function mobileNav() {
  const navBtn = document.querySelector('.mobile-nav__btn');
  const nav = document.querySelector('.mobile-nav');
  const menuIcon = document.querySelector('.nav-icon');

  navBtn.addEventListener('click', function () {
    nav.classList.toggle('mobile-nav_open');
    menuIcon.classList.toggle('nav-icon_active');
    document.body.classList.toggle('no-scroll');
  });
}

export default mobileNav;
