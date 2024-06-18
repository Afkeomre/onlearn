function activeLink(linksSelector) {
  const links = document.querySelectorAll(linksSelector);

  window.addEventListener('load', () => {
    links.forEach((link, i) => {
      if (
        link.href === window.location.href ||
        (i == 0 && window.location.href.indexOf('html') === -1)
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
}

export default activeLink;
