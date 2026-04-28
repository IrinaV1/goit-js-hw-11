export const list = document.querySelector('.gallery');
export function createGallery(arr) {
  return arr
    .map(
      item => `
      <li class="gallery-item">
        <a href="${item.largeImageURL}">
          <img class="gallery-image" src="${item.webformatURL}" alt="${item.tags}" />
        </a>

        <div class="info">
          <p>Likes ${item.likes}</p>
          <p>Views ${item.views}</p>
          <p>Comments ${item.comments}</p>
          <p>Downloads ${item.downloads}</p>
        </div>
      </li>
    `
    )
    .join('');
}

export function clearGallery() {
  list.innerHTML = '';
}
// showLoader(){};
// hideLoader(){};
