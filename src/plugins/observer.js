export function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('add-opacity')

            switch (entry.target.id) {
                case 'div1':
                    const route1 = document.querySelector('#route1');
                    route1.classList.add('nav-link')
                    break;
                case 'div2':
                    const route2 = document.querySelector('#route2');
                    route2.classList.add('nav-link')
                    break;
                case 'div3':
                    const route3 = document.querySelector('#route3');
                    route3.classList.add('nav-link')
                    break;
                case 'div4':
                    const route4 = document.querySelector('#route4');
                    route4.classList.add('nav-link')
                    break;
                default:
                    break;
            }
        } else {
            resetLink();
        }
    });
}

function resetLink() {
    const route1 = document.querySelector('#route1');
    const route2 = document.querySelector('#route2');
    const route3 = document.querySelector('#route3');
    const route4 = document.querySelector('#route4');

    route1.classList.remove('nav-link')
    route2.classList.remove('nav-link')
    route3.classList.remove('nav-link')
    route4.classList.remove('nav-link')
}