// script.js

const imageContainer = document.getElementById("imageContainer");

imageContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        const newImage = e.target.cloneNode(true); // Membuat salinan gambar yang diklik
        imageContainer.appendChild(newImage); // Menambahkan salinan ke galeri
    }
});
