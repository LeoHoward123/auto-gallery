const images = [
    "images/DSCF9979.JPG",
    "images/DSCF9932.JPG",
    "images/DSCF9931.JPG",
    "images/DSCF9928.JPG",
    "images/DSCF9879.JPG",
    "images/DSCF9875.JPG",
    "images/DSCF9832.JPG",
    "images/DSCF9823.JPG",
    "images/DSCF9821.JPG",
    "images/DSCF9818.JPG"
];

const slideDuration = 4000; // 4 seconds per slide
let currentIndex = 0;
const filmStrip = document.getElementById('film-strip');

// 1. Load all images into the film strip on startup
images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    filmStrip.appendChild(img);
});

// 2. The sliding logic
function nextSlide() {
    currentIndex++;
    
    // When it reaches the end, it will quickly slide all the way back to the start
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    
    // Calculate the distance to move left (-100vw is one full screen width)
    filmStrip.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

// Start the automatic slideshow
setInterval(nextSlide, slideDuration);