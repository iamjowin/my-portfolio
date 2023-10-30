export function handleHideLoading(container, timeout) {
    setTimeout(() => {
        container.style.display = 'none';
    }, timeout);
}