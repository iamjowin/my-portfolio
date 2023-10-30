export function handleIntersect(entries, observer, data) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            const targetId = entry.target.id;

            const link1 = document.querySelector('#link1');
            const link2 = document.querySelector('#link2');
            const link3 = document.querySelector('#link3');

            if (targetId === 'section1') {
                link1.classList.add('active-link')
                link2.classList.remove('active-link')
                link3.classList.remove('active-link')

                data.isShowNavSpan1 = true;
                data.isShowNavSpan2 = false;
                data.isShowNavSpan3 = false;
            }

            if (targetId === 'section2') {
                link2.classList.add('active-link')
                link1.classList.remove('active-link')
                link3.classList.remove('active-link')

                data.isShowNavSpan1 = false;
                data.isShowNavSpan2 = true;
                data.isShowNavSpan3 = false;
            }

            if (targetId === 'section3') {
                link3.classList.add('active-link')
                link1.classList.remove('active-link')
                link2.classList.remove('active-link')

                data.isShowNavSpan1 = false;
                data.isShowNavSpan2 = false;
                data.isShowNavSpan3 = true;
            }
        }
    });
}