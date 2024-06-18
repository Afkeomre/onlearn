const tabs = (
  tabsSelector,
  tabsContentSelector,
  tabsParentSelector,
  activeClass
) => {
  window.addEventListener('load', () => {
    const tabs = document.querySelectorAll(tabsSelector);
    const tabsContent = document.querySelectorAll(tabsContentSelector);
    const tabsParent = document.querySelector(tabsParentSelector);

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
      const target = e.target;

      if (target?.classList.contains(tabsSelector.slice(1))) {
        tabs.forEach((tab, i) => {
          if (target === tab) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });

    function hideTabContent() {
      tabsContent.forEach((item) => {
        item.classList.add('none');
        item.classList.remove('fade');
      });

      tabs.forEach((tab) => {
        tab.classList.remove(activeClass);
      });
    }

    function showTabContent(i = 0) {
      tabsContent[i].classList.add('fade');
      tabsContent[i].classList.remove('none');
      tabs[i].classList.add(activeClass);
    }
  });
};

export default tabs;
