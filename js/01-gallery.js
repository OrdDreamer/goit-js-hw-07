import { galleryItems } from "./gallery-items.js";

const getGalleryItemElement = (previewImageURL, originalImageURL, description) => {
  return `<div class="gallery__item">
            <a class="gallery__link" href="${originalImageURL}">
              <img
                class="gallery__image"
                src="${previewImageURL}"
                data-source="${originalImageURL}"
                alt="${description}"
              />
            </a>
          </div>`;
};

const galleryElement = document.querySelector("div.gallery");


if (galleryElement) {
  const galleryItemElements = galleryItems
    .map((item) => getGalleryItemElement(item.preview, item.original, item.description))
    .join("");

    galleryElement.insertAdjacentHTML("afterbegin", galleryItemElements);
}
