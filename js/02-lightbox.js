import { galleryItems } from './gallery-items.js';
// библиотека SimpleLightbox
//

console.log(galleryItems);

const markup = galleryItems.map (({preview, original, description}) => {
    return `
    <a class="gallery__item" 
        href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}/>
    </a>`
}) .join("");
console.log(markup);

const gallaryList = document.querySelector('.gallery');
gallaryList.insertAdjacentHTML('beforeend', markup);

const gallery = new SimpleLightbox('.gallery a', 
{ captionsData: '${description}',
captionDelay: 250,
});



    