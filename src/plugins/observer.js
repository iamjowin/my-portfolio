export function handleIntersect(entries, observer, data) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const targetId = entry.target.id;

            const link1 = document.querySelector('#link1');
            const link2 = document.querySelector('#link2');
            const link3 = document.querySelector('#link3');
            const link4 = document.querySelector('#link4');

            const line1 = document.querySelector('#link-line-1');
            const line2 = document.querySelector('#link-line-2');
            const line3 = document.querySelector('#link-line-3');
            const line4 = document.querySelector('#link-line-4');

            const aboutHeading = document.querySelector('.about-heading')
            const expHeading = document.querySelector('.exp-heading')
            const projectHeading = document.querySelector('.project-heading')

            const section1 = document.querySelector('#section1');
            const section2 = document.querySelector('#section2');
            const section3 = document.querySelector('#section3');

            if (targetId === 'section0') {
                if (window.innerWidth <= 768) {
                    aboutHeading.classList.remove(
                        'max-sm:fixed',
                        'max-sm:top-0',
                        'max-sm:bg-[#161835]',
                        'max-sm:w-full',
                        'max-sm:right-0',
                        'max-sm:pl-10',
                        'max-sm:pt-1',
                        'max-sm:pb-1'
                    );
                }
            }

            if (targetId === 'section1') {
                link1.classList.add('active-link')
                link2.classList.remove('active-link')
                link3.classList.remove('active-link')
                link4.classList.remove('active-link')

                line1.classList.add('line-width');
                line2.classList.remove('line-width')
                line3.classList.remove('line-width')
                line4.classList.remove('line-width')

                // section1.classList.remove('opacity-0')
                // section2.classList.add('opacity-0')
                // section3.classList.add('opacity-0')
                
                if (window.innerWidth <= 768) {
                    aboutHeading.classList.add(
                        'max-sm:fixed',
                        'max-sm:top-0',
                        'max-sm:bg-[#161835]',
                        'max-sm:w-full',
                        'max-sm:right-0',
                        'max-sm:pl-10',
                        'max-sm:pt-1',
                        'max-sm:pb-1'
                    );
    
                    expHeading.classList.add('mt-28')
    
                    expHeading.classList.remove(
                        'max-sm:fixed',
                        'max-sm:top-0',
                        'max-sm:bg-[#161835]',
                        'max-sm:w-full',
                        'max-sm:right-0',
                        'max-sm:pl-10',
                        'max-sm:pt-1',
                        'max-sm:pb-1'
                    );
    
                    projectHeading.classList.remove(
                        'max-sm:fixed',
                        'max-sm:top-0',
                        'max-sm:bg-[#161835]',
                        'max-sm:w-full',
                        'max-sm:right-0',
                        'max-sm:pl-10',
                        'max-sm:pt-1',
                        'max-sm:pb-1'
                    );
                }
            }

            if (targetId === 'section2') {
                link2.classList.add('active-link')
                link1.classList.remove('active-link')
                link3.classList.remove('active-link')
                link4.classList.remove('active-link')

                line1.classList.remove('line-width');
                line2.classList.add('line-width')
                line3.classList.remove('line-width')
                line4.classList.remove('line-width')

                // section2.classList.remove('opacity-0')
                // section1.classList.add('opacity-0')
                // section3.classList.add('opacity-0')

                if (window.innerWidth <= 768) {
                    expHeading.classList.add(
                        'max-sm:fixed',
                        'max-sm:top-0',
                        'max-sm:bg-[#161835]',
                        'max-sm:w-full',
                        'max-sm:right-0',
                        'max-sm:pl-10',
                        'max-sm:pt-1',
                        'max-sm:pb-1'
                    );
    
                    expHeading.classList.remove('mt-28');
                    projectHeading.classList.add('mt-28')
    
                    aboutHeading.classList.remove(
                        'max-sm:fixed',
                        'max-sm:top-0',
                        'max-sm:bg-[#161835]',
                        'max-sm:w-full',
                        'max-sm:right-0',
                        'max-sm:pl-10',
                        'max-sm:pt-1',
                        'max-sm:pb-1'
                    );
    
                    projectHeading.classList.remove(
                        'max-sm:fixed',
                        'max-sm:top-0',
                        'max-sm:bg-[#161835]',
                        'max-sm:w-full',
                        'max-sm:right-0',
                        'max-sm:pl-10',
                        'max-sm:pt-1',
                        'max-sm:pb-1'
                    );
                }
            }

            if (targetId === 'section3') {
                link3.classList.add('active-link')
                link1.classList.remove('active-link')
                link2.classList.remove('active-link')
                link4.classList.remove('active-link')

                line1.classList.remove('line-width');
                line2.classList.remove('line-width')
                line4.classList.remove('line-width')
                line3.classList.add('line-width')

                // section3.classList.remove('opacity-0')
                // section1.classList.add('opacity-0')
                // section2.classList.add('opacity-0')

                if (window.innerWidth <= 768) {
                    projectHeading.classList.add(
                        'max-sm:fixed',
                        'max-sm:top-0',
                        'max-sm:bg-[#161835]',
                        'max-sm:w-full',
                        'max-sm:right-0',
                        'max-sm:pl-10',
                        'max-sm:pt-1',
                        'max-sm:pb-1'
                    );

                    projectHeading.classList.remove('mt-28')
    
                    aboutHeading.classList.remove(
                        'max-sm:fixed',
                        'max-sm:top-0',
                        'max-sm:bg-[#161835]',
                        'max-sm:w-full',
                        'max-sm:right-0',
                        'max-sm:pl-10',
                        'max-sm:pt-1',
                        'max-sm:pb-1'
                    );
    
                    expHeading.classList.remove(
                        'max-sm:fixed',
                        'max-sm:top-0',
                        'max-sm:bg-[#161835]',
                        'max-sm:w-full',
                        'max-sm:right-0',
                        'max-sm:pl-10',
                        'max-sm:pt-1',
                        'max-sm:pb-1'
                    );
                }
            }

            if (targetId === 'section4') {
                link4.classList.add('active-link')
                link1.classList.remove('active-link')
                link2.classList.remove('active-link')
                link3.classList.remove('active-link')

                line1.classList.remove('line-width');
                line2.classList.remove('line-width')
                line3.classList.remove('line-width')
                line4.classList.add('line-width')

                // section3.classList.remove('opacity-0')
                // section1.classList.add('opacity-0')
                // section2.classList.add('opacity-0')

                if (window.innerWidth <= 768) {
                    projectHeading.classList.add(
                        'max-sm:fixed',
                        'max-sm:top-0',
                        'max-sm:bg-[#161835]',
                        'max-sm:w-full',
                        'max-sm:right-0',
                        'max-sm:pl-10',
                        'max-sm:pt-1',
                        'max-sm:pb-1'
                    );

                    projectHeading.classList.remove('mt-28')
    
                    aboutHeading.classList.remove(
                        'max-sm:fixed',
                        'max-sm:top-0',
                        'max-sm:bg-[#161835]',
                        'max-sm:w-full',
                        'max-sm:right-0',
                        'max-sm:pl-10',
                        'max-sm:pt-1',
                        'max-sm:pb-1'
                    );
    
                    expHeading.classList.remove(
                        'max-sm:fixed',
                        'max-sm:top-0',
                        'max-sm:bg-[#161835]',
                        'max-sm:w-full',
                        'max-sm:right-0',
                        'max-sm:pl-10',
                        'max-sm:pt-1',
                        'max-sm:pb-1'
                    );
                }
            }
        }
    });
}