document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");
    let loadedImages = 0;

    // check if all images are loaded
    images.forEach((img) => {
        if (img.complete) {
            loadedImages++;
        } else {
            img.addEventListener("load", () => {
                loadedImages++;
                if (loadedImages === images.length) {
                    startAnimations();
                }
            });
            img.addEventListener("error", () => {
                loadedImages++;
                if (loadedImages === images.length) {
                    startAnimations();
                }
            });
        }
    });

    // if all images were already loaded
    if (loadedImages === images.length) {
        startAnimations();
    }
});

function startAnimations() {
    // add the 'sizer' animation class to all items
    document.querySelectorAll(".item").forEach((item) => {
        item.style.animation = "sizer .8s ease";
    });
}



window.addEventListener('load', () => {
    // select the loader
    const loader = document.querySelector('.loader');
    // add the 'hidden' class to hide the loader
    loader.classList.add('hidden');
});