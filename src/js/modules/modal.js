function modal(modalSelector, openBtnSelector) {
  const modalWindow = document.querySelector(modalSelector);
  const openBtns = document.querySelectorAll(openBtnSelector);

  openBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showModal();
    });
  });

  modalWindow.addEventListener('click', (e) => {
    if (
      e.target === modalWindow ||
      e.target.getAttribute('data-close') === ''
    ) {
      hideModal(modalWindow);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      hideModal(modalWindow);
    }
  });

  function showModal() {
    modalWindow.classList.remove('none');
    document.body.classList.add('no-scroll');
  }
}

function hideModal(modal) {
  modal.classList.add('none');

  if (
    !document.querySelector('.mobile-nav').classList.contains('mobile-nav_open')
  ) {
    document.body.classList.remove('no-scroll');
  }
}

export default modal;
export { hideModal };
