function showList(
  btnSelector,
  listSelector,
  contentSelector,
  itemSelector,
  text
) {
  const btn = document.querySelector(btnSelector);
  const list = document.querySelector(listSelector);
  const items = document.querySelectorAll(itemSelector);
  const content = document.querySelector(contentSelector);

  btn.addEventListener('click', () => {
    list.classList.toggle('none');
    content.classList.add('fade');
    items.forEach((item) => item.classList.toggle('list-fade'));
    setTimeout(() => content.classList.remove('fade'), 1000);

    if (!list.classList.contains('none')) {
      btn.textContent = 'Hide list';
    } else {
      btn.textContent = text;
    }
  });
}

export default showList;
