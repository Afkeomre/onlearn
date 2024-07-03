function mobileNav() {
  const navBtn = document.querySelector('.mobile-nav__btn');
  const nav = document.querySelector('.mobile-nav');
  const menuIcon = document.querySelector('.nav-icon');
  let scrollPosition = 0;

  navBtn.addEventListener('click', function () {
    nav.classList.toggle('mobile-nav_open');
    menuIcon.classList.toggle('nav-icon_active');
    document.body.classList.toggle('no-scroll');

    if (nav.classList.contains('mobile-nav_open')) {
      scrollPosition = window.scrollY;
      document.body.style.top = `-${scrollPosition}px`;
    } else {
      document.body.style.top = '';
      window.scrollTo(0, scrollPosition);
    }
  });
}

export default mobileNav;
