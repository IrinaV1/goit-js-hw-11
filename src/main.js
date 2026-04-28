import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery, createGallery, list } from './js/render-functions';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
const form = document.querySelector('.form');

form.addEventListener('submit', handleFormClick);

function handleFormClick(event) {
  event.preventDefault();
  clearGallery();
  const query = event.target.elements['search-text'].value.trim();
  if (!query) return;

  console.log(query);
  getImagesByQuery(query)
    .then(data => {
      console.log(query);
      if (data.length === 0) {
        alert(
          'Sorry, there are no images matching your search query. Please try again!'
        );

        return;
      }

      list.insertAdjacentHTML('beforeend', createGallery(data));
      lightbox.refresh();
    })
    .catch(() => {
      alert('Something went wrong. Please try again later.');
    });

  event.target.reset();
}
