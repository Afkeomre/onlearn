import fetchCourses from './fetchCourses';
import fetchBtns from './fetchBtns';
import tabs from './tabs';

async function prepareTabs() {
  try {
    await fetchBtns();
    await fetchCourses();
    tabs(
      '.courses__btn',
      '.courses__cards',
      '.courses__buttons',
      'courses__btn_active'
    );
  } catch (error) {
    console.log(error);
  }
}

export default prepareTabs;
