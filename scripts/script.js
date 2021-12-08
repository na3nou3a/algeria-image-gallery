function prepareLinks() {
  const gallery = document.getElementById('gallery');
  const items = gallery.querySelectorAll('li');
  items.forEach((li) =>
    li.addEventListener('click', (e) => {
      e.preventDefault();
      const link = li.dataset.link;
      const title = li.dataset.title;
      const placeHolder = document.querySelector('#placeholder img');
      const paragraph = document.querySelector('#placeholder p');
      placeHolder.src = link;
      paragraph.textContent = title;
    })
  );
}

prepareLinks();
