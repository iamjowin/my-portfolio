export function handleIntersect(entries, observer, data) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            const targetId = entry.target.id;

            const link1 = document.querySelector('#link1');
            const link2 = document.querySelector('#link2');
            const link3 = document.querySelector('#link3');

            const line1 = document.querySelector('#link-line-1');
            const line2 = document.querySelector('#link-line-2');
            const line3 = document.querySelector('#link-line-3');

            if (targetId === 'section1') {
                link1.classList.add('active-link')
                link2.classList.remove('active-link')
                link3.classList.remove('active-link')

                line1.classList.add('line-width');
                line2.classList.remove('line-width')
                line3.classList.remove('line-width')
            }

            if (targetId === 'section2') {
                link2.classList.add('active-link')
                link1.classList.remove('active-link')
                link3.classList.remove('active-link')

                line1.classList.remove('line-width');
                line2.classList.add('line-width')
                line3.classList.remove('line-width')
            }

            if (targetId === 'section3') {
                link3.classList.add('active-link')
                link1.classList.remove('active-link')
                link2.classList.remove('active-link')

                line1.classList.remove('line-width');
                line2.classList.remove('line-width')
                line3.classList.add('line-width')
            }
        }
    });
}