const getResource = async (url) => {
  const response = await fetch(url);

  if (response.status !== 200) {
    throw new Error(`Could not fetch ${url}, status: ${response.status}`);
  }

  return await response.json();
};

const postData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
};

const setBodyTop = (scrollPosition = 0) => {
  scrollPosition = window.scrollY;
  document.body.style.top = `-${scrollPosition}px`;
};

const unsetBodyTop = (scrollPosition = 0) => {
  document.body.style.top = '';
  window.scrollTo(0, scrollPosition);
};

export { getResource };
export { postData };
export { setBodyTop };
export { unsetBodyTop };
