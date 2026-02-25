const gallery = document.getElementById("gallery");

// Duplikat isi supaya seamless
gallery.innerHTML += gallery.innerHTML;

let x = 0;
let y = 0;
const speed = 0.5; // kecepatan sedang

function animate() {
    x -= speed;
    y += speed;

    gallery.style.transform = `rotate(-45deg) translate(${x}px, ${y}px)`;

    // Reset ketika sudah lewat setengah panjang
    if (Math.abs(x) > gallery.offsetWidth / 2) {
        x = 0;
        y = 0;
    }

    requestAnimationFrame(animate);
}

animate();
