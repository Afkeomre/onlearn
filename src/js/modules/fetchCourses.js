import { getResource } from './../services/services';
import tabs from './tabs';

const fetchCourses = () => {
  const parents = document.querySelectorAll('.courses__cards');

  getResource('https://c1cf054ef519e1a2.mokky.dev/courses')
    .then((data) => {
      data.forEach((arr, i) => {
        parents.forEach((parent, j) => {
          arr.forEach((item) => {
            if (i === j) {
              parent.insertAdjacentHTML(
                'beforeend',
                `<article class="courses__card">
								<div class="courses__card-info">
									<img class="courses__card-img" src="./../../../img/courses/${item.img}.jpg" alt="Course">
									<div class="courses__card-statistic">
										<img src="${item.avatars}" alt="Avatars">
										<span class="courses__card-number"><span class="plus">+</span> ${item.number} students</span>
									</div>
								</div>
								<div class="courses__card-content">
								<div class="courses__card-date">${item.date}</div>
								<h4 class="courses__card-title">${item.title}</h4>
								<p class="courses__card-description">${item.description}</p>
								<div class="courses__card-footer">
									<div class="courses__card-price">
										<span class="courses__card-price_new">$ ${item.newPrice} </span>
										<span class="courses__card-price_old">$ ${item.oldPrice}</span>
									</div>
									<button class="btn btn_small btn_cyan">Enroll now</button>
									</div>
								</div>
							</article>`
              );
            }
          });
        });
      });
    })
    .finally(() => {
      tabs(
        '.courses__btn',
        '.courses__cards',
        '.courses__buttons',
        'courses__btn_active'
      );
    });
};

export default fetchCourses;
