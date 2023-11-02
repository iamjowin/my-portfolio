export function handleHideLoading(container, timeout) {
    setTimeout(() => {
        container.style.display = 'none';

        animateLeftColumn();
        animateAboutSection();
    }, timeout);
}

function animateLeftColumn() {
    const leftDiv = document.querySelector('.left-column-div');

    leftDiv.classList.add('fade-in-left-animation')  
}

function animateAboutSection() {
    const aboutSection = document.querySelector('#section1');

    aboutSection.classList.remove('opacity-0')
}