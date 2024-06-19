import { postData } from '../services/services';

function newsletterForm(formSelector) {
  const forms = document.querySelectorAll(formSelector);

  const message = {
    loading: './../../img/spinner.svg',
    success: {
      text: `Thank you for your message! We'll send you the information`,
      class: 'green',
    },
    failure: {
      text: 'Something went wrong :(',
      class: 'red',
    },
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.marginTop = '15px';
      statusMessage.style.alignSelf = 'center';
      form.append(statusMessage);

      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData('https://c1cf054ef519e1a2.mokky.dev/subscribers', json)
        .then((data) => {
          console.log(data);
          showThanksMessage(message.success.text, message.success.class);
        })
        .catch(() => {
          showThanksMessage(message.failure.text, message.failure.class);
        })
        .finally(() => {
          form.reset();
          statusMessage.remove();
        });
    });

    function showThanksMessage(messageText, messageClass) {
      const newMessage = document.createElement('div');
      newMessage.textContent = messageText;
      newMessage.style.marginTop = '15px';
      newMessage.style.textAlign = 'center';
      newMessage.style.fontSize = '14px';
      newMessage.classList.add(messageClass);
      form.append(newMessage);

      setTimeout(() => {
        newMessage.remove();
      }, 4000);
    }
  }
}

export default newsletterForm;
