const track = document.getElementById("track");

// Duplicate isi supaya seamless
track.innerHTML += track.innerHTML;

let position = 0;
const speed = 1; // kecepatan sedang

function animate(){
    position -= speed;
    track.style.transform = `rotate(-20deg) translateX(${position}px)`;

    // Reset halus saat setengah track habis
    if(Math.abs(position) >= track.scrollWidth / 2){
        position = 0;
    }

    requestAnimationFrame(animate);
}

animate();
