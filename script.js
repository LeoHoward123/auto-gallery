// Add your photo URLs or local file paths here
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

const slideDuration = 6000; // Time per slide in milliseconds (6 seconds)
let currentIndex = 0;
const slideElement = document.getElementById('slide');

// Initialize the first image
if(images.length > 0) {
    slideElement.src = images[currentIndex];
}

function nextSlide() {
    // Start the fade out
    slideElement.classList.add('fade-out');

    // Wait for the fade out to finish (0.5s), then swap the image
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length; // Loop back to 0 at the end
        slideElement.src = images[currentIndex];
        
        // Remove the fade out class to fade back in
        slideElement.classList.remove('fade-out');
    }, 500); // This should match the transition time in your CSS
}

// Start the automatic slideshow
setInterval(nextSlide, slideDuration);