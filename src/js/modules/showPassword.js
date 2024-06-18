const showPassword = () => {
  const btns = document.querySelectorAll('.password__btn');
  const inputs = document.querySelectorAll('.password__input');

  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('password__btn_active');

      inputs.forEach((input, j) => {
        if (i === j) {
          if (input.getAttribute('type') === 'password') {
            input.setAttribute('type', 'text');
          } else {
            input.setAttribute('type', 'password');
          }
        }
      });
    });
  });
};

export default showPassword;
