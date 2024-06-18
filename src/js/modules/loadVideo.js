function loadVideo(triggerSelector, videoParentSelector, videoSrc) {
  const trigger = document.querySelector(triggerSelector);
  const videoParent = document.querySelector(videoParentSelector);

  trigger.addEventListener('click', () => {
    if (videoParent.classList.contains('opened')) {
      return;
    }

    videoParent.classList.add('opened');

    videoParent.insertAdjacentHTML(
      'afterbegin',
      `
    	<iframe class="modal__video-iframe" id="videoMeeting" width="560" height="315"
    		src="${videoSrc}" title="YouTube video player" frameborder="0"
    		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    		referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    	`
    );
  });
}

export default loadVideo;
