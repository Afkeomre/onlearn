import { getResource } from './../services/services';

const fetchExeclusive = () => {
  const parent = document.querySelector('.swiper-wrapper');

  getResource('http://localhost:3000/exclusive').then((data) => {
    data.forEach((item) => {
      parent.insertAdjacentHTML(
        'beforeend',
        `<div class="swiper-slide">
					<article class="exclusive__card">
						<div class="exclusive__img-wrapper">
							<img src="./../../../img/exclusive/${item.img}.jpg" alt="Exclusive course" class="exclusive__img">
							<div class="exclusive__card-price">
								<span class="exclusive__card-price_new">$ ${item.newPrice} </span>
								<span class="exclusive__card-price_old">$ ${item.oldPrice}</span>
							</div>
						</div>
						<div class="exclusive__card-content">
							<div class="exclusive__card-date">${item.date}</div>
							<h4 class="exclusive__card-title">${item.title}</h4>
							<p class="exclusive__card-description">${item.description}</p>
							<div class="exclusive__card-statistic">
								<div class="exclusive__card-icon">
									<img src="${item.avatars}" alt="Avatars">
								</div>
								<span class="exclusive__card-number"><span class="plus plus_big">+&nbsp;</span>${item.number}&nbsp;students</span>
							</div>
						</div>
					</article>
				</div>`
      );
    });
  });
};

export default fetchExeclusive;
