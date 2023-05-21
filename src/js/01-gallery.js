import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import BasicLightbox from 'basiclightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

console.log(galleryItems);

// Construcción de la Galeria
const galleryHTML = galleryItems
  .map(
    item => `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image"
            src="${item.preview}" 
            data-source="${item.original}" 
            alt="${item.description}"/>
        </a>
    </li>`
  )
  .join('');

const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('afterbegin', galleryHTML);

// Evita que las imágenes se descarguen al hacer clic
galleryContainer.addEventListener('click', event => event.preventDefault());

// Ventana modal
galleryContainer.addEventListener('click', clickOnImage);

function clickOnImage(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const instance = BasicLightbox.create(
    `<img src="${event.target.dataset.source}" width="400" height="200">`
  );
  instance.show();

  // Evento tecla Esc
  const closeOnEscape = keyEvent => {
    if (keyEvent.code === 'Escape') {
      instance.close();
      galleryContainer.removeEventListener('keydown', closeOnEscape);
    }
  };

  galleryContainer.addEventListener('keydown', closeOnEscape);
}
