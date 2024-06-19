import { hideModal } from './modal';
import { getResource, postData } from '../services/services';

function forms(formSelector, successMessage, dataMessage) {
  const forms = document.querySelectorAll(formSelector);
  const message = {
    loading: './../../img/spinner.svg',
    success: {
      text: successMessage,
      class: 'green',
    },
    failure: {
      text: 'Something went wrong :(',
      class: 'red',
    },
    incorrectUser: {
      text: dataMessage,
      class: 'red',
    },
    incorrectConfirm: 'Passwords do not match',
  };
  let flag = true;

  forms.forEach((item) => {
    bindPostData(item);
  });

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const passwordMessage = document.createElement('div');
      const statusMessage = document.createElement('img');

      checkPasswordConfirm(
        formData,
        passwordMessage,
        statusMessage,
        message,
        form
      );

      if (
        checkPasswordConfirm(
          formData,
          passwordMessage,
          statusMessage,
          message,
          form
        ) === false
      ) {
        return;
      }

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      getResource('https://c1cf054ef519e1a2.mokky.dev/users')
        .then((data) => {
          let existedUser;

          if (formData.has('loginEmail') && formData.has('loginPassword')) {
            existedUser = data.find(
              (user) =>
                formData.get('loginEmail') === user.signupEmail &&
                formData.get('loginPassword') === user.signupPassword
            );

            if (existedUser?.id === undefined) {
              showThanksModal(
                message.incorrectUser.text,
                message.incorrectUser.class
              );
              flag = false;
            } else {
              flag = true;
            }
          } else if (
            formData.has('signupEmail') &&
            formData.has('signupPassword')
          ) {
            existedUser = data.find(
              (user) =>
                formData.get('signupEmail') === user.signupEmail ||
                formData.get('signupPassword') === user.signupPassword
            );

            if (existedUser?.id !== undefined) {
              showThanksModal(
                message.incorrectUser.text,
                message.incorrectUser.class
              );
              flag = false;
            } else {
              flag = true;
            }
          }
        })
        .then(() => {
          if (flag) {
            postData('https://c1cf054ef519e1a2.mokky.dev/users', json)
              .then((data) => {
                console.log(data);
                showThanksModal(message.success.text, message.success.class);
                addExitPossibility();
              })
              .catch(() => {
                showThanksModal(message.failure.text, message.failure.class);
              })
              .finally(() => {
                clear(form, statusMessage);
              });
          } else {
            clear(form, statusMessage);
          }
        });
    });

    function showThanksModal(messageText, messageClass) {
      const newMessage = document.createElement('div');
      newMessage.classList.add(messageClass);
      newMessage.textContent = messageText;

      const parent = form.nextElementSibling;
      parent.classList.remove('none');
      form.classList.add('none');
      parent.append(newMessage);

      setTimeout(() => {
        hideModal(parent.closest('.modal'));
        parent.classList.add('none');
        newMessage.remove();
        form.classList.remove('none');
      }, 4000);
    }

    function addExitPossibility() {
      const loginBtn = document.querySelector('[data-login]');
      const signupBtn = document.querySelector('[data-signup]');
      const exitBtn = document.querySelector('[data-exit]');

      exitBtn.classList.remove('none');
      loginBtn.classList.add('none');
      signupBtn.classList.add('none');

      exitBtn.addEventListener('click', () => {
        exitBtn.classList.add('none');
        loginBtn.classList.remove('none');
        signupBtn.classList.remove('none');
      });
    }

    function checkPasswordConfirm(data, warning, status, state, form) {
      if (
        data.has('signupPassword') &&
        data.has('confirmPassword') &&
        data.get('signupPassword') !== data.get('confirmPassword')
      ) {
        warning.classList.add('red');
        warning.textContent = state.incorrectConfirm;
        form.append(warning);
        document.getElementById('signupSubmit').disabled = true;

        const inputs = form.querySelectorAll('input');
        inputs.forEach((input) => {
          input.addEventListener('input', () => {
            if (
              input.classList.contains('signup-password') ||
              input.classList.contains('signup-confirm')
            ) {
              warning.remove();
              document.getElementById('signupSubmit').disabled = false;
            }
          });
        });

        return false;
      } else {
        warning.remove();
        status.src = state.loading;
        form.append(status);
      }
    }

    function clear(form, status) {
      form.reset();
      status.remove();
    }
  }
}

export default forms;
