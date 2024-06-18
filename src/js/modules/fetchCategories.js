import { getResource } from './../services/services';

const fetchCategories = () => {
  const parent = document.querySelector('.category__cards');

  getResource('http://localhost:3000/categories').then((data) => {
    data.forEach((item) => {
      parent.insertAdjacentHTML(
        'beforeend',
        `<article class="category__card">
					<img class="category__card-img" src="./../../../img/categories/${item.img}.svg" alt="Category">
					<h3 class="category__card-title">${item.title}</h3>
					<p class="category__card-description">${item.description}</p>
					<button class="btn btn_shady">Explore courses</button>
				</article>`
      );
    });
  });
};

export default fetchCategories;
