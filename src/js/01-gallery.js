// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');


const galleryHTML = galleryItems.map(({preview, original, description}) => {
    return `
    <li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
      `;

}).join('');

gallery.insertAdjacentHTML('beforeend', galleryHTML);

const lightbox = new SimpleLightbox('.gallery__item a', {
    captions: true,
    captionsData: "alt",
    captionsDelay: 250,
    loop: true,
    bindToItems: true,
    swipeClose: true,
    history: true,
    historyHash: "lightbox",
    widthRatio: 0.8,
    heightRatio: 0.9,
    scaleImageToRatio: true,
    enableZoom: true,
    zoomFactor: 2,
  });