document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery img");

    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add("show");
        }, index * 150); // delay tiap foto
    });
});
