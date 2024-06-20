import { getResource } from './../services/services';

const fetchBtns = async () => {
  try {
    const parent = document.querySelector('.courses__buttons');

    await getResource('https://c1cf054ef519e1a2.mokky.dev/btns').then(
      (data) => {
        data.forEach((item) => {
          parent.insertAdjacentHTML(
            'beforeend',
            `<button class="courses__btn btn btn_small">${item.text}</button>`
          );
        });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export default fetchBtns;
