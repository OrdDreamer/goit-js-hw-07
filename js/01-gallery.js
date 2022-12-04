import { galleryItems } from "./gallery-items.js";

function getGalleryItemElement(previewImageURL, originalImageURL, description) {
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
}

function handleGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  console.log(event.target.dataset.source);
}

const galleryElement = document.querySelector("div.gallery");

if (galleryElement) {
  const galleryItemElements = galleryItems
    .map((item) =>
      getGalleryItemElement(item.preview, item.original, item.description)
    )
    .join("");

  galleryElement.insertAdjacentHTML("afterbegin", galleryItemElements);

  galleryElement.addEventListener("click", handleGalleryItemClick);
}
