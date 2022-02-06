import { galleryItems } from './gallery-items.js';
// подключение скрипта и стилей библиотеки модального окна basicLightbox
// Создание и рендер разметки по массиву данных galleryItems 
// и предоставленному шаблону элемента галереи.

console.log(galleryItems);

const markup = galleryItems.map (({preview, original, description}) => {
     return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`
}) .join("");
console.log(markup);

const gallaryList = document.querySelector('.gallery');
gallaryList.insertAdjacentHTML('beforeend', markup);

//Открытие модального окна по клику на элементе галереи

gallaryList.addEventListener ('click', onGalleryItemClick )

function onGalleryItemClick(evt){

    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
    return;
    }
    console.log(evt.target)

    const selectedImg = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">`)
    selectedImg.show()

    // закрытие модального окна по нажатию клавиши Escape

    window.addEventListener('keydown', onOpenGalleryItemKeydown)
    function onOpenGalleryItemKeydown (evt){
    if (evt.code == 'Escape') {
        selectedImg.close() 
        } 
    }       
}




