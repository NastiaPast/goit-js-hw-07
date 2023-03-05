import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const handleGalleryClick = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const bannerUrl = event.target.dataset.source;
  createModalClick(bannerUrl);
};
galleryEl.addEventListener("click", handleGalleryClick);
const createGalleryCard = ({ preview, original, description } = {}) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
};
const markup = galleryItems.map((el) => createGalleryCard(el)).join("");
galleryEl.insertAdjacentHTML("beforeend", markup);

function createModalClick(url) {
  const modal = basicLightbox.create(`
		<img src="${url}" width="800" height="600">
	`);

  modal.show();
  document.addEventListener("keydown", handleEscKeydown);

  function handleEscKeydown(event) {
    if (event.code === "Escape") {
      modal.close();
      document.removeEventListener("keydown", handleEscKeydown);
    }
  }
}
