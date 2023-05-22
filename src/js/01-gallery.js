import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);

// Construcción de la Galería
const galleryContainer = document.querySelector('.gallery');

const builderGallery = galleryItems
  .map(
    item =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image"
            src="${item.preview}"  
            alt="${item.description}"/>
        </a>
    </li>`
  )
  .join('');

// Insertar la galería en el HTML
galleryContainer.insertAdjacentHTML('afterbegin', builderGallery);
galleryContainer.addEventListener('click', event => event.preventDefault());

// Ventana modal librería SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
