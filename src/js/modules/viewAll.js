const viewAll = (
  btnSelector,
  containerSelector,
  sectionSelector,
  cardSelector,
  textForAll,
  textForLess
) => {
  const btn = document.querySelector(btnSelector);
  const container = document.querySelector(containerSelector);
  const section = document.querySelector(sectionSelector);

  window.addEventListener('load', setMaxHeight);

  btn.addEventListener('click', () => {
    const isActive = btn.classList.toggle('active');
    container.classList.toggle('gradient');

    if (isActive) {
      container.style.maxHeight = container.scrollHeight + 'px';
      section.scrollIntoView();
      setTimeout(() => {
        container.classList.remove('clip');
      }, 500);
      btn.textContent = textForLess;
    } else {
      setMaxHeight();
      section.scrollIntoView();
      container.classList.add('clip');
      btn.textContent = textForAll;
    }
  });

  function setMaxHeight() {
    const cards = document.querySelectorAll(cardSelector);

    cards.forEach((card) => {
      container.style.maxHeight = Math.round(card.scrollHeight) * 1.5 + 'px';
    });
  }
};

export default viewAll;
