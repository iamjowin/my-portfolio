export function handleHideLoading(container, timeout) {
    setTimeout(() => {
        container.classList.add('fade-out');
        container.style.zIndex = -1;

        animateLeftColumn();
    }, timeout);
}

function animateLeftColumn() {
    const leftDiv = document.querySelector('.left-column-div');

    leftDiv.classList.add('fade-in-left-animation')  
}