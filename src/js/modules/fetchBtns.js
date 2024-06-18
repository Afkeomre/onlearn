import { getResource } from './../services/services';

const fetchBtns = () => {
  const parent = document.querySelector('.courses__buttons');

  getResource('http://localhost:3000/btns').then((data) => {
    data.forEach((item) => {
      parent.insertAdjacentHTML(
        'beforeend',
        `<button class="courses__btn btn btn_small">${item.text}</button>`
      );
    });
  });
};

export default fetchBtns;
