<script setup>
import SocialNav from './components/social-nav.vue'
import { RouterLink, RouterView } from 'vue-router'
import { usePorfolioStore } from './stores/data'
import { handleIntersect } from './plugins/observer'
import { handleClickScroll } from './plugins/scroll'
import { handleHideLoading } from './plugins/loading'
import { 
    ArrowUpRightIcon, 
    ArrowRightIcon, 
    XMarkIcon, 
    PaperAirplaneIcon, 
    ChatBubbleOvalLeftEllipsisIcon,
    ArchiveBoxIcon,
    DocumentTextIcon 
} from '@heroicons/vue/24/outline'
import { onMounted } from 'vue'

const portfolioStore = usePorfolioStore();

const showContact = () => {
    const contactContainerEl = document.querySelector('.contact-container');

    contactContainerEl.classList.remove('hidden');
    contactContainerEl.classList.toggle('fade-in-left-animation');
    contactContainerEl.classList.remove('fade-out-left-animation');
}

const hideContact = () => {
    const contactContainerEl = document.querySelector('.contact-container');

    contactContainerEl.classList.remove('fade-in-left-animation');
    contactContainerEl.classList.toggle('fade-out-left-animation');
}

const showProjects = () => {
    const projectContainerEl = document.querySelector('.projects-container');

    projectContainerEl.classList.remove('hidden');
    projectContainerEl.classList.toggle('fade-in-left-animation');
    projectContainerEl.classList.remove('fade-out-left-animation');

}

const hideProjects = () => {
    const projectContainerEl = document.querySelector('.projects-container');

    projectContainerEl.classList.remove('fade-in-left-animation');
    projectContainerEl.classList.toggle('fade-out-left-animation');
}

onMounted(() => {
    const loadingContainer = document.querySelector('.loading-container');

    handleHideLoading(loadingContainer, 3000)

    const sections = document.querySelectorAll(".section");

    const options = {
        rootMargin: '0px 0px -20% 0px',
        threshold: 0.5
    }

    sections.forEach((section) => {
        const observer = new IntersectionObserver((entries, observer) => {
        handleIntersect(entries, observer, portfolioStore)}, options);
        observer.observe(section);
    });

    const navLinks = document.querySelectorAll(".nav-link");

    handleClickScroll(navLinks)
});
</script>
<template>
    <!-- Projects container -->
    <div class="projects-container bg-[#030521] hidden">
        <button @click="hideProjects" class="contact-close-btn">
            <XMarkIcon class="h-8 w-7 text-[#00dc82] mt-1 mr-1" />
        </button>
        <div class="max-sm:p-10 md:p-10 lg:p-20 lg:pl-28">
            <h1 class="text-5xl font-bold text-white mt-1 max-sm:text-3xl">All Projects</h1>
            <div class="flex flex-wrap pt-12">
                <div class="w-full">
                    <div class="overflow-x-auto">
                        <table class="min-w-full">
                            <thead>
                                <tr>
                                    <th class="text-left font-bold text-sm text-slate-200 tracking-wider">Year</th>
                                    <th class="max-sm:px-0 px-6 py-3 text-left font-bold text-sm text-slate-200 tracking-wider">Project</th>
                                    <th class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-3 text-left font-bold text-sm text-slate-200 tracking-wider">Made at</th>
                                    <th class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-3 text-left font-bold text-sm text-slate-200 tracking-wider">Built with</th>
                                    <th class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-3 text-left font-bold text-sm text-slate-200 tracking-wider">Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border border-slate-800 border-l-0 border-r-0">
                                    <td class="text-slate-500">2019</td>
                                    <td class="max-sm:px-0 px-6 py-4 text-slate-200 font-bold max-sm:hidden">Prolook 2.5 Customizer</td>
                                    <td class="max-sm:px-0 px-6 py-4 text-slate-200 font-bold lg:hidden md:hidden">
                                        <a href="https://customizer.prolook.com/index" target="_blank" class="flex flex-wrap">
                                            Prolook 2.5 Customizer 
                                            <ArrowUpRightIcon class="h-4 w-5 text-slate-200 mt-1 ml-1" />
                                        </a>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500">Prolook Sports</td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4">
                                        <ul class="flex flex-wrap text-[#00dc82] text-xs">
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Vue JS</li>
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">TypeScript</li>
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Uikit</li>
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">JavaScript</li>
                                        </ul>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500 font-bold">
                                        <a href="https://customizer.prolook.com/index" target="_blank">customizer.prolook.com</a>
                                    </td>
                                </tr>
                                <tr class="border border-slate-800 border-l-0 border-r-0">
                                    <td class="text-slate-500">2020</td>
                                    <td class="max-sm:px-0 px-6 py-4 text-slate-200 font-bold max-sm:hidden">Marucci & Victus Customizer</td>
                                    <td class="max-sm:px-0 px-6 py-4 text-slate-200 font-bold lg:hidden md:hidden">
                                        <a href="#" target="_blank" class="flex flex-wrap">
                                            Marucci & Victus Customizer
                                            <ArrowUpRightIcon class="h-4 w-5 text-slate-200 mt-1 ml-1" />
                                        </a>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500">Prolook Sports</td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4">
                                        <ul class="flex flex-wrap text-[#00dc82] text-xs">
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Bootstrap</li>
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Jquery</li>
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">JavaScript</li>
                                        </ul>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500 font-bold">
                                        <a href="#">none</a>
                                    </td>
                                </tr>
                                <tr class="border border-slate-800 border-l-0 border-r-0">
                                    <td class="text-slate-500">2021</td>
                                    <td class="max-sm:px-0 px-6 py-4 text-slate-200 font-bold max-sm:hidden">Dick's & Sporting Goods</td>
                                    <td class="max-sm:px-0 px-6 py-4 text-slate-200 font-bold lg:hidden md:hidden">
                                        <a href="https://prolookteam.com/" target="_blank" class="flex flex-wrap">
                                            Dick's & Sporting Goods
                                            <ArrowUpRightIcon class="h-4 w-5 text-slate-200 mt-1 ml-1" />
                                        </a>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500">Prolook Sports</td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4">
                                        <ul class="flex flex-wrap text-[#00dc82] text-xs">
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Vue JS</li>
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">TypeScript</li>
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Uikit</li>
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">JavaScript</li>
                                        </ul>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500 font-bold">
                                        <a href="https://prolookteam.com/" target="_blank">prolookteam.com</a>
                                    </td>
                                </tr>
                                <tr class="border border-slate-800 border-l-0 border-r-0">
                                    <td class="text-slate-500">2022</td>
                                    <td class="max-sm:px-0 px-6 py-4 text-slate-200 font-bold max-sm:hidden">Prolook 2.75 Customizer</td>
                                    <td class="max-sm:px-0 px-6 py-4 text-slate-200 font-bold lg:hidden md:hidden">
                                        <a href="#" target="_blank" class="flex flex-wrap">
                                            Prolook 2.75 Customizer
                                            <ArrowUpRightIcon class="h-4 w-5 text-slate-200 mt-1 ml-1" />
                                        </a>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500">Prolook Sports</td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4">
                                        <ul class="flex flex-wrap text-[#00dc82] text-xs">
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Vue JS</li>
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">TypeScript</li>
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Uikit</li>
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">JavaScript</li>
                                        </ul>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500 font-bold">
                                        <a href="#" target="_blank">none</a>
                                    </td>
                                </tr>
                                <tr class="border border-slate-800 border-l-0 border-r-0">
                                    <td class="text-slate-500">2023</td>
                                    <td class="max-sm:px-0 px-6 py-4 text-slate-200 font-bold max-sm:hidden">Core Customizer</td>
                                    <td class="max-sm:px-0 px-6 py-4 text-slate-200 font-bold lg:hidden md:hidden">
                                        <a href="https://customizer-core-prd.qstrike.net" target="_blank" class="flex flex-wrap">
                                            Core Customizer
                                            <ArrowUpRightIcon class="h-4 w-5 text-slate-200 mt-1 ml-1" />
                                        </a>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500">Prolook Sports</td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4">
                                        <ul class="flex flex-wrap text-[#00dc82] text-xs">
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Vue JS</li>
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">TypeScript</li>
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Uikit</li>
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">JavaScript</li>
                                        </ul>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500 font-bold">
                                        <a href="https://customizer-core-prd.qstrike.net" target="_blank">customizer-core-prd.qstrike.net</a>
                                    </td>
                                </tr>
                                <tr class="border border-slate-800 border-l-0 border-r-0">
                                    <td class="text-slate-500">2023</td>
                                    <td class="max-sm:px-0 px-6 py-4 text-slate-200 font-bold max-sm:hidden">Perfect Game Customizer</td>
                                    <td class="max-sm:px-0 px-6 py-4 text-slate-200 font-bold lg:hidden md:hidden">
                                        <a href="https://www.pguniforms.com/" target="_blank" class="flex flex-wrap">
                                            Perfect Game Customizer
                                            <ArrowUpRightIcon class="h-4 w-5 text-slate-200 mt-1 ml-1" />
                                        </a>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500">Prolook Sports</td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4">
                                        <ul class="flex flex-wrap text-[#00dc82] text-xs">
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Vue JS</li>
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">TypeScript</li>
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Uikit</li>
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">JavaScript</li>
                                        </ul>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500 font-bold">
                                        <a href="https://www.pguniforms.com/" target="_blank">pguniforms.com</a>
                                    </td>
                                </tr>
                                <tr class="border border-slate-800 border-l-0 border-r-0">
                                    <td class="text-slate-500">2023</td>
                                    <td class="max-sm:px-0 px-6 py-4 text-slate-200 font-bold max-sm:hidden">Alli Customizer</td>
                                    <td class="max-sm:px-0 px-6 py-4 text-slate-200 font-bold lg:hidden md:hidden">
                                        <a href="https://www.alliteamuniforms.com/" target="_blank" class="flex flex-wrap">
                                            Alli Customizer
                                            <ArrowUpRightIcon class="h-4 w-5 text-slate-200 mt-1 ml-1" />
                                        </a>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500">Prolook Sports</td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4">
                                        <ul class="flex flex-wrap text-[#00dc82] text-xs">
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Vue JS</li>
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">TypeScript</li>
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Uikit</li>
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">JavaScript</li>
                                        </ul>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500 font-bold">
                                        <a href="https://www.alliteamuniforms.com/" target="_blank">alliteamuniforms.com</a>
                                    </td>
                                </tr>
                                <tr class="border border-slate-800 border-l-0 border-r-0">
                                    <td class="text-slate-500">2023</td>
                                    <td class="max-sm:px-0 px-6 py-4 text-slate-200 font-bold max-sm:hidden">Wordtorque</td>
                                    <td class="max-sm:px-0 px-6 py-4 text-slate-200 font-bold lg:hidden md:hidden">
                                        <a href="https://wordtorque.graxia.dev" target="_blank" class="flex flex-wrap">
                                            Wordtorque
                                            <ArrowUpRightIcon class="h-4 w-5 text-slate-200 mt-1 ml-1" />
                                        </a>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500">Wordtorque</td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4">
                                        <ul class="flex flex-wrap text-[#00dc82] text-xs">
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Bootstrap</li>
                                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">JavaScript</li>
                                        </ul>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500 font-bold">
                                        <a href="https://wordtorque.graxia.dev" target="_blank">wordtorque.graxia.dev</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Contact container -->
    <div class="contact-container bg-[#030521] hidden">
        <button @click="hideContact" class="contact-close-btn">
            <XMarkIcon class="h-8 w-7 text-[#00dc82] mt-1 mr-1" />
        </button>
        <div class="max-sm:p-10 md:p-10 lg:p-20 lg:pl-28">
            <h1 class="text-5xl font-bold text-white mt-1 mb-5 max-sm:text-3xl">Contact</h1> 
            <form class="mt-10" action="https://getform.io/f/2b950655-3eb4-4650-8b2b-0b74f9dd3d97" method="POST">
                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="name" class="block py-2.5 px-0 w-full text-sm text-slate-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#00dc82] focus:outline-none focus:ring-0 focus:border-[#00dc82] peer" placeholder=" " required />
                        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-40020 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00dc82] peer-focus:dark:text-[#00dc82] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="email" name="email" class="block py-2.5 px-0 w-full text-sm text-slate-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#00dc82] focus:outline-none focus:ring-0 focus:border-[#00dc82] peer" placeholder=" " required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00dc82] peer-focus:dark:text-[#00dc82] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <textarea type="text" name="message" class="block py-2.5 px-0 w-full text-sm text-slate-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#00dc82] focus:outline-none focus:ring-0 focus:border-[#00dc82] peer" placeholder=" " required />
                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#00dc82] peer-focus:dark:text-[#00dc82] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>
                </div>
                
                <button type="submit" class="flex flex-wrap mt-10 text-[#00dc82] bg-[#161835] font-medium text-sm px-5 py-2.5 text-justify hovered-btn">Shoot
                    <PaperAirplaneIcon class="absolute-icon h-4 w-5 text-[#00dc82] mt-0.5 ml-1 transform duration-300" />
                </button>
            </form>

        </div>
    </div>

    <!-- Loading container -->
    <div class="loading-container">
        <img src="./assets/chunk-loading.svg">
    </div>

    <!-- Index container -->
    <div class="lg:flex h-screen main-column-div">
        <!-- Left Column -->
        <div class="lg:w-1/2 lg:h-full flex flex-col left-column-div max-sm:p-10 sm:p-10 md:p-10 lg:pl-52 lg:pt-20">
            <h1 class="text-5xl font-extrabold text-white mt-1 my-name max-sm:hidden">Jowin Cueto</h1>
            <h1 class="text-5xl font-extrabold text-white mt-1 my-name lg:hidden md:hidden">JMC</h1>
            <div>
                <h1 class="text-xl text-slate-200 mt-2"><span class="text-[#00dc82]">Front-End Developer</span> at Prolook Sports</h1>
                <p class="w-full lg:w-1/1 mt-4 text-md text-slate-400"> I design and implement the visual elements, interactivity, and functionality of the website.</p>
            </div>
            <SocialNav />
            <!-- <div class="mt-8 max-sm:mb-20">
                <a href="#" @click.prevent="showContact">
                    <p class="text-slate-200 flex flex-wrap hover:text-[#00dc82] w-2/2">Shoot me a message
                        <ArrowRightIcon class="h-4 w-5 text-slate-200 mt-1 ml-1" />
                    </p>
                </a>
            </div> -->
            <nav class="mt-16 max-md:hidden md:hidden lg:block" id="menu">
                <a href="#section1" id="link1" class="text-slate-500 text-xs font-bold flex flex-wrap nav-link hover:text-slate-200">
                    <div id="link-line-1" class="line mt-2 mr-4"></div>
                    ABOUT
                </a>
                <a href="#section2" id="link2" class="text-slate-500 text-xs font-bold flex flex-wrap mt-6 nav-link hover:text-slate-200">
                    <div id="link-line-2" class="line mt-2 mr-4"></div>
                    EXPERIENCE
                </a>
                <a href="#section3" id="link3" class="text-slate-500 text-xs font-bold flex flex-wrap mt-6 nav-link hover:text-slate-200">
                    <div id="link-line-3" class="line mt-2 mr-4"></div>
                    PROJECTS
                </a>
            </nav>
        </div>

        <!-- Right Column -->
        <div class="lg:w-1/2 h-full flex flex-col max-sm:pt-0 md:pt-0 max-sm:p-10 sm:p-10 md:p-10 lg:pl-0 lg:pr-52 lg:pt-20 lg:max-h-auto lg:overflow-y-auto">
            <div class="max-sm:mt-12">
                <section id="section0" class="section"></section>
                <h1 class="text-xl font-bold mb-4 text-slate-700 max-sm:text-slate-200 max-md:text-slate-400 about-heading lg:hidden">ABOUT</h1>
                <section id="section1" class="text-slate-400 text-md section transition-opacity duration-2000 ease-in-out opacity-0">
                    <div>
                        <p>In the years 2014 to 2018, while I was still a student, I developed an interest in web design. I created mockups and converted them into HTML and CSS. I even gave myself the title of a front-end designer. However, as time passed and I entered the workforce, my understanding of front-end development expanded. I realized that it's not just about creating mockups and converting them into HTML and CSS; front-end development also encompasses interactions with data. For instance, you may need to fetch data to dynamically display it on the front-end side of the system.</p>
                        <p class="mt-7">Currently, I work at <a href="https://www.prolook.com/" target="_blank" class="text-slate-200 font-medium">Prolook Sports</a>, where I have been employed for just over 4 years. My responsibilities include maintaining existing projects by implementing new features and fixing bugs. I enjoy the non-strict environment, as it allows me to think clearly and focus on my work.</p>
                        <p class="mt-7">When I'm not in front of the computer, especially after finishing work, I either go to the gym or biking to exercise. This is essentail for me, particularly for us programmers who spend most of our time in front of the computer and sitting down.</p>
                    </div>
                </section>

                <h1 class="text-xl font-bold mb-4 text-slate-700 lg:mt-28 max-sm:text-slate-200 max-md:text-slate-400 lg:hidden exp-heading">EXPERIENCE</h1>
                <section id="section2" class="section transition-opacity duration-2000 ease-in-out opacity-0">
                    <div>
                        <a href="https://www.prolook.com/" target="_blank" class="hovered-btn">
                            <p class="text-slate-200 flex flex-wrap hover:text-[#00dc82]">
                                <span class="text-slate-400 text-xs float-right mt-1 mr-2">2019 - PRESENT -</span>
                                Prolook Sports
                                <ArrowUpRightIcon class="h-3 w-5 text-slate-200 mt-2 ml-1 absolute-icon transform duration-300" />
                            </p>
                        </a>
                        <p class="text-slate-600">Front-End Developer</p>
                        <p class="mt-3 text-sm text-slate-400">Responsible for maintaining existing projects, fixing bugs, and implementing new features. Ensuring the implementation of reusable components and the use of <a class="text-slate-200" href="https://pinia.vuejs.org/" target="_blank">pinia</a> for state management. Also, ensuring that the code is maintainable and readable.</p>
                        <ul class="flex flex-wrap text-[#00dc82] text-xs mt-2">
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">JavaScript</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">HTML</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">CSS</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Vue JS</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">TypeScript</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Underscore</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Lodash</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Pinia</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">NPM</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">GIT</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Uikit</li>
                        </ul>
                    </div>
                    <div class="mt-10">
                        <a href="https://wordtorque.graxia.dev" target="_blank" class="hovered-btn">
                            <p class="text-slate-200 flex flex-wrap hover:text-[#00dc82]">
                                <span class="text-slate-400 text-xs float-right mt-1 mr-2">2023 -</span>
                                Wordtorque
                                <ArrowUpRightIcon class="h-3 w-5 text-slate-200 mt-2 ml-1 absolute-icon transform duration-300" />
                            </p>
                        </a>
                        <p class="text-slate-600">Part Time - Front-End Developer</p>
                        <p class="mt-3 text-sm text-slate-400">Responsible for maintaining existing projects, fixing bugs, and enhancing the user interface. Ensuring the system is mobile-responsive and easy to navigate.</p>
                        <ul class="flex flex-wrap text-[#00dc82] text-xs mt-2">
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">JavaScript</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">HTML</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">CSS</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">GIT</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Bootstrap</li>
                        </ul>
                    </div>
                    <div class="mt-10">
                        <a href="#" disabled class="cursor-not-allowed">
                            <p class="text-slate-500 flex flex-wrap">
                                <span class="text-slate-400 text-xs float-right mt-1 mr-2">2018 - 2019 -</span>
                                Codeeric IT Solution
                                <ArrowUpRightIcon class="h-3 w-5 text-slate-200 mt-2 ml-1" />
                            </p>
                        </a>
                        <p class="text-slate-600">Front-End Developer</p>
                        <p class="mt-3 text-sm text-slate-400">Responsible for maintaining existing projects, fixing bugs, and implementing new features. Ensuring that the system is responsive and easy to navigate on mobile.</p>
                        <ul class="flex flex-wrap text-[#00dc82] text-xs mt-2">
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">JavaScript</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">HTML</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">CSS</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Fabric JS</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">GIT</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Bootstrap</li>
                        </ul>
                    </div>
                    <div class="mt-10">
                        <a href="#" disabled class="cursor-not-allowed">
                            <p class="text-slate-500 flex flex-wrap">
                                <span class="text-slate-400 text-xs float-right mt-1 mr-2">2018 -</span>
                                La Verdad Christian College
                                <ArrowUpRightIcon class="h-3 w-5 text-slate-200 mt-2 ml-1" />
                            </p>
                        </a>
                        <p class="text-slate-600">Internship Trainee - Front-End Developer</p>
                        <p class="mt-3 text-sm text-slate-400">Responsible for project development, bug fixing, and feature implementation. Ensuring the website is informative, responsive, and easy to navigate on mobile.</p>
                        <ul class="flex flex-wrap text-[#00dc82] text-xs mt-2">
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">JavaScript</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Wix (CMS)</li>
                        </ul>
                    </div>
                    <div class="mt-10">
                        <a href="/jmc-resume.pdf" target="_blank" class="hovered-btn">
                            <p class="text-slate-200 flex flex-wrap hover:text-[#00dc82]">View full resume
                                <ArrowRightIcon class="h-4 w-5 text-slate-200 mt-1 ml-1 absolute-icon transform duration-300" />
                            </p>
                        </a>
                    </div>
                </section>

                <h1 class="text-xl font-bold mb-4 text-slate-700 lg:mt-28 max-sm:text-slate-200 max-md:text-slate-400 lg:hidden project-heading">PROJECTS</h1>
                <section id="section3" class="mt-6 section transition-opacity duration-2000 ease-in-out opacity-0">
                    <div class="flex">
                        <div class="max-sm:hidden">
                            <img src="./assets/projects/prolook.png" width="400" height="48" class="rounded-sm"/>
                        </div>
                        <div class="ml-4 max-sm:ml-0">
                            <a href="https://customizer.prolook.com/index" target="_blank" class="hovered-btn">
                                <p class="text-slate-200 flex flex-wrap hover:text-[#00dc82]">Prolook Customizer 
                                    <ArrowUpRightIcon class="h-3 w-5 text-slate-200 mt-2 ml-1 absolute-icon transform duration-300"/>
                                </p>
                            </a>
                            <p class="text-sm mt-2 text-slate-400">Web app for customizing sports uniforms such as baseball apparel, accessories, and more. It allows you to add features like numbers, text, patterns, piping, custom logos, and more. You can also place orders for your customized uniforms.</p>
                            <ul class="flex flex-wrap text-[#00dc82] text-xs mt-2">
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">JavaScript</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Vue JS</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">TypeScript</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Uikit</li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex mt-16">
                        <div class="max-sm:hidden">
                            <img src="./assets/projects/dsg.png" width="400" height="48" class="rounded-sm"/>
                        </div>
                        <div class="ml-4 max-sm:ml-0">
                            <a href="https://prolookteam.com/" target="_blank" class="hovered-btn">
                                <p class="text-slate-200 flex flex-wrap hover:text-[#00dc82]">Dick's & Sporting Goods Customizer
                                    <ArrowUpRightIcon class="h-3 w-5 text-slate-200 mt-2 ml-1 absolute-icon transform duration-300" />
                                </p>
                            </a>
                            <p class="text-sm mt-2 text-slate-400">Web app for customizing sports uniforms such as baseball apparel, accessories, and more. It allows you to add features like numbers, text, patterns, piping, custom logos, and more. You can also place orders for your customized uniforms.</p>
                            <ul class="flex flex-wrap text-[#00dc82] text-xs mt-2">
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">JavaScript</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Vue JS</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">TypeScript</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Uikit</li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex mt-16">
                        <div class="max-sm:hidden">
                            <img src="./assets/projects/pg.png" width="400" height="48" class="rounded-sm"/>
                        </div>
                        <div class="ml-4 max-sm:ml-0">
                            <a href="https://www.pguniforms.com" target="_blank" class="hovered-btn">
                                <p class="text-slate-200 flex flex-wrap hover:text-[#00dc82]">Perfect Game Customizer
                                    <ArrowUpRightIcon class="h-3 w-5 text-slate-200 mt-2 ml-1 absolute-icon transform duration-300" />
                                </p>
                            </a>
                            <p class="text-sm mt-2 text-slate-400">Web app for customizing sports uniforms such as baseball apparel, accessories, and more. It allows you to add features like numbers, text, patterns, piping, custom logos, and more. You can also place orders for your customized uniforms.</p>
                            <ul class="flex flex-wrap text-[#00dc82] text-xs mt-2">
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">JavaScript</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Vue JS</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">TypeScript</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Uikit</li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex mt-16">
                        <div class="max-sm:hidden">
                            <img src="./assets/projects/alli.png" width="400" height="48" class="rounded-sm"/>
                        </div>
                        <div class="ml-4 max-sm:ml-0">
                            <a href="https://www.alliteamuniforms.com" target="_blank" class="hovered-btn">
                                <p class="text-slate-200 flex flex-wrap hover:text-[#00dc82]">Alli Customizer
                                    <ArrowUpRightIcon class="h-3 w-5 text-slate-200 mt-2 ml-1 absolute-icon transform duration-300" />
                                </p>
                            </a>
                            <p class="text-sm mt-2 text-slate-400">Web app for customizing sports uniforms such as baseball apparel, accessories, and more. It allows you to add features like numbers, text, patterns, piping, custom logos, and more. You can also place orders for your customized uniforms.</p>
                            <ul class="flex flex-wrap text-[#00dc82] text-xs mt-2">
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">JavaScript</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Vue JS</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">TypeScript</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Uikit</li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-10">
                        <a href="#" @click.prevent="showProjects" class="hovered-btn">
                            <p class="text-slate-200 flex flex-wrap hover:text-[#00dc82]">View full project archive
                                <ArrowRightIcon class="h-4 w-5 text-slate-200 mt-1 ml-1 absolute-icon transform duration-300" />
                            </p>
                        </a>
                    </div>
                </section>
                <section class="mt-20 max-sm:mb-10 max-md:mb-10 lg:pb-20">
                    <div class="text-slate-500 text-sm max-sm:text-xs">
                        <p>Coded in<a class="text-slate-200 hover:text-[#00dc82]" href="https://code.visualstudio.com/" target="_blank"> Visual Studio Code.</a> Built with <a class="text-slate-200 hover:text-[#00dc82]" href="https://vuejs.org/" target="_blank">Vue.js</a> and <a class="text-slate-200 hover:text-[#00dc82]" href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>, deployed in <a class="text-slate-200 hover:text-[#00dc82]" href="https://www.netlify.com/" target="_blank">Netlify.</a> All text is set to <a class="text-slate-200 hover:text-[#00dc82]" href="https://fonts.google.com/specimen/Inter?query=inter" target="_blank">Inter</a> font and <a class="text-slate-200 hover:text-[#00dc82]" href="https://heroicons.com/" target="_blank">Heroicons</a> for icons.</p>
                    </div>
                </section>
            </div>
        </div>
    </div>
    <div class="fixed flex-col top-[50%] max-sm:top-[75%] max-sm:right-3 lg:left-0">
        <a href="#" class="lg:w-[40px] h-[40px] max-sm:h-[40px] lg:hover:w-[45px] lg:hover:pl-2 pr-1 max-sm:rounded-full flex justify-between items-center lg:mr-[-130px] duration-300 bg-[#161835]" @click.prevent="showContact">
            <PaperAirplaneIcon class="max-sm:h-5 h-6 w-8 text-[#00dc82] mt-2 mb-2 ml-1" />
        </a>
        <a href="#" class="lg:w-[40px] h-[40px] max-sm:h-[40px] lg:hover:w-[45px] lg:hover:pl-2 pr-1 max-sm:rounded-full flex justify-between items-center lg:mr-[-130px] duration-300 bg-[#161835] mt-2" @click.prevent="showProjects">
            <ArchiveBoxIcon class="max-sm:h-5 h-6 w-8 text-[#00dc82] mt-2 mb-2 ml-1" />
        </a>
        <a href="/jmc-resume.pdf" target="_blank" class="lg:w-[40px] h-[40px] max-sm:h-[40px] lg:hover:w-[45px] lg:hover:pl-2 pr-1 max-sm:rounded-full flex justify-between items-center lg:mr-[-130px] duration-300 bg-[#161835] mt-2">
            <DocumentTextIcon class="max-sm:h-5 h-6 w-8 text-[#00dc82] mt-2 mb-2 ml-1" />
        </a>
    </div>
</template>
<style>
    .loading-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #030521;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }

    .contact-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;;
        z-index: 9999;
    }

    .projects-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        max-height: auto; 
        overflow-y: auto;
        transition: opacity 0.5s ease;
    }

    .loading-text {
        color: #fff; 
        font-size: 24px;
    }

    .right-column-div {
        max-height: auto; 
        overflow-y: auto; 
    }

    .active-link {
        color: #e2e4e9;
    }

    .contact-close-btn {
        position: absolute;
        top: 10px;
        right: 20px;
    }

    .line {
        width: 6%;
        height: 1.5px;
        background-color: #4d5b7c;
        transition: width 0.5s;
    }

    .line-width {
        width: 15%;
        background-color: #e2e4e9;
    }

    .fade-in-left-animation {
        animation-duration: 0.5s;
        animation-fill-mode: both;
        animation-name: fadeInLeft;
    }

    .fade-out-left-animation {
        animation-duration: 0.5s;
        animation-fill-mode: both;
        animation-name: fadeOutLeft;
    }

    .fade-out {
        opacity: 0;
        transition: opacity 0.5s;
    }

    .hovered-btn:hover .absolute-icon {
        transform: translateX(5px);
    }
</style>