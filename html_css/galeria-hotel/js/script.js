document.addEventListener("DOMContentLoaded", function() {
    const loadMoreButton = document.getElementById("load-more");
    const galleryRow2 = document.querySelector(".gallery-row-2");
    const galleryRow3 = document.querySelector(".gallery-row-3");
    const galleryRow4 = document.querySelector(".gallery-row-4");
    const galleryRow5 = document.querySelector(".gallery-row-5");
    const galleryRow6 = document.querySelector(".gallery-row-6");

    galleryRow2.style.display = "none";
    galleryRow3.style.display = "none";

    loadMoreButton.addEventListener("click", function() {
        if (galleryRow2.style.display === "none") {
            galleryRow2.style.display = "flex";
            galleryRow3.style.display = "flex";
            galleryRow4.style.display = "flex";
            galleryRow5.style.display = "flex";
            galleryRow6.style.display = "flex";
        }
    });
});
