export function handleHideLoading(container, timeout) {
    setTimeout(() => {
        container.style.display = 'none';

        animateLeftColumn();
    }, timeout);
}

function animateLeftColumn() {
    const leftDiv = document.querySelector('.left-column-div');

    leftDiv.classList.add('fade-in-left-animation')  
}