import fetchCategories from './fetchCategories';
import viewAll from './viewAll';

async function prepareCategories() {
  try {
    await fetchCategories();
    viewAll(
      '.category__btn',
      '.category__cards',
      '.category',
      '.category__card',
      'View all',
      'Less categories'
    );
  } catch (error) {
    console.log(error);
  }
}

export default prepareCategories;
