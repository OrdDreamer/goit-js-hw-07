import { galleryItems } from "./gallery-items.js";

function getGalleryItemElementMarkup(
  previewImageURL,
  originalImageURL,
  description
) {
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

function handleGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const originalImageURL = event.target.dataset.source;

  const instance = basicLightbox.create(
    `<div class="modal">
        <img src="${originalImageURL}"/>
    </div>`,
    {
      closable: true,
      className: "",
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  instance.show();

  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

const galleryElement = document.querySelector("div.gallery");

if (galleryElement) {
  const galleryItemElements = galleryItems
    .map((item) =>
      getGalleryItemElementMarkup(item.preview, item.original, item.description)
    )
    .join("");

  galleryElement.insertAdjacentHTML("afterbegin", galleryItemElements);

  galleryElement.addEventListener("click", handleGalleryClick);
}
