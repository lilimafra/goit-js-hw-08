import simpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

// Construccion de la Galeria
const instance = simpleLightbox.create(
  `<li class= "gallery__item">
        <a class= "gallery__link" href="${item.original}">
            <img class= "gallery__image"
            src="${item.preview}" 
            data-source="${item.original}" 
            alt="${item.description}"/>
        </a>
        </li>`
);
instance.show();

//Insertar la galeria en el html

galleryContainer.insertAdjacentHTML('afterbegin', builderGallery);

//Evita que las imagenes de descarguen al hacer click
galleryContainer.addEventListener('click', event => event.preventDefault());

// Ventana modal
galleryContainer.addEventListener('click', clickOnImage);

function clickOnImage(ImageAction) {
  if (ImageAction.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${ImageAction.target.dataset.source}" width="400" height="200">`
  );
  instance.show();

  // Evento tecla esc
  galleryContainer.addEventListener('keydown', ImageAction => {
    if (ImageAction.code === 'Escape') {
      instance.close();
    }
  });
}
