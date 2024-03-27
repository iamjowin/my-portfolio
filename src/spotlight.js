function isLaptopOrDesktop() {
    return window.innerWidth > 1024;
}

//DOM load event
window.addEventListener("load", () => {
    if (!isLaptopOrDesktop()) return;

    const spotlight = document.querySelector('.spotlight');
    let spotlightSize = 'transparent 20%, rgba(0, 0, 0, 0.3) 40%';

    window.addEventListener('mousemove', e => updateSpotlight(e));
    window.addEventListener('mousedown', e => {
        spotlightSize = 'transparent 10%, rgba(0, 0, 0, 0.3) 35%';
        updateSpotlight(e);
    });

    window.addEventListener('mouseup', e => {
        spotlightSize = 'transparent 20%, rgba(0, 0, 0, 0.3) 40%';
        updateSpotlight(e);
    });

    function updateSpotlight(e) {
		spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
    }
});