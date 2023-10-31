<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { usePorfolioStore } from './stores/data'
import { handleIntersect } from './plugins/observer'
import { handleClickScroll } from './plugins/scroll'
import { handleHideLoading } from './plugins/loading'
import SocialNav from './components/social-nav.vue'
import { onMounted } from 'vue'

const portfolioStore = usePorfolioStore();

const showContact = () => {
    portfolioStore.showContactPage = true;
}

const hideContact = () => {
    portfolioStore.showContactPage = false;
}

const showProjects = () => {
    portfolioStore.showProjectPage = true;
}

const hideProjects = () => {
    portfolioStore.showProjectPage = false;
}

onMounted(() => {
    const loadingContainer = document.querySelector('.loading-container');

    handleHideLoading(loadingContainer, 4000)

    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
        const observer = new IntersectionObserver((entries, observer) => {
        handleIntersect(entries, observer, portfolioStore)}, { threshold: 0.5 });
        observer.observe(section);
    });

    const navLinks = document.querySelectorAll(".nav-link");

    handleClickScroll(navLinks)
});
</script>
<template>
    <!-- Projects container -->
    <div v-if="portfolioStore.showProjectPage" class="projects-container bg-[#0f172a]">
        <button @click="hideProjects" class="contact-close-btn">
            <i class="fa fa-times text-[#5be3d4]" aria-hidden="true"></i>
        </button>
        <div class="max-sm:p-10 md:p-10 lg:p-20 lg:pl-28">
            <a class="text-[#5be3d4]" href="#" @click.prevent="hideProjects">
                <i class="fa fa-arrow-left mr-2" aria-hidden="true"></i>
                Jowin Cueto
            </a>
            <h1 class="text-4xl font-bold text-white mt-1">All Projects</h1>
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
                                        <a href="https://customizer.prolook.com/index" target="_blank">
                                            Prolook 2.5 Customizer 
                                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                        </a>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500">Prolook Sports</td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4">
                                        <ul class="flex flex-wrap text-[#5be3d4] text-xs">
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
                                        <a href="#" target="_blank">
                                            Marucci & Victus Customizer
                                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                        </a>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500">Prolook Sports</td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4">
                                        <ul class="flex flex-wrap text-[#5be3d4] text-xs">
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
                                        <a href="https://prolookteam.com/" target="_blank">
                                            Dick's & Sporting Goods
                                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                        </a>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500">Prolook Sports</td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4">
                                        <ul class="flex flex-wrap text-[#5be3d4] text-xs">
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
                                        <a href="#" target="_blank">
                                            Prolook 2.75 Customizer
                                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                        </a>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500">Prolook Sports</td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4">
                                        <ul class="flex flex-wrap text-[#5be3d4] text-xs">
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
                                        <a href="https://customizer-core-prd.qstrike.net" target="_blank">
                                            Core Customizer
                                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                        </a>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500">Prolook Sports</td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4">
                                        <ul class="flex flex-wrap text-[#5be3d4] text-xs">
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
                                        <a href="https://www.pguniforms.com/" target="_blank">
                                            Perfect Game Customizer
                                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                        </a>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500">Prolook Sports</td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4">
                                        <ul class="flex flex-wrap text-[#5be3d4] text-xs">
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
                                        <a href="https://www.alliteamuniforms.com/" target="_blank">
                                            Alli Customizer
                                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                        </a>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500">Prolook Sports</td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4">
                                        <ul class="flex flex-wrap text-[#5be3d4] text-xs">
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
                                        <a href="https://wordtorque.graxia.dev" target="_blank">
                                            Wordtorque
                                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                        </a>
                                    </td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4 text-slate-500">Wordtorque</td>
                                    <td class="md:hidden max-sm:hidden max-md:hidden lg:table-cell px-6 py-4">
                                        <ul class="flex flex-wrap text-[#5be3d4] text-xs">
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
    <!-- <div v-if="portfolioStore.showContactPage" class="contact-container bg-[#0f172a]">
        <button @click="hideContact" class="contact-close-btn">
            <i class="fa fa-times text-[#5be3d4]" aria-hidden="true"></i>
        </button>
        <div class="p-20 pl-28">
            <a class="text-[#5be3d4]" href="#" @click.prevent="hideContact">
                <i class="fa fa-arrow-left mr-2" aria-hidden="true"></i>
                Jowin Cueto
            </a>
            <h1 class="text-4xl font-bold text-white mt-1 mb-5">Contact</h1>
            <span class="text-slate-200">Shoot me an email!</span>
        </div>
    </div> -->

    <!-- Loading container -->
    <div class="loading-container">
        <img src="./assets/bricks-loading-2.svg">
    </div>

    <!-- Index container -->
    <div class="lg:flex h-screen main-column-div">
        <!-- Left Column -->
        <div class="lg:w-1/2 lg:h-full flex flex-col left-column-div max-sm:p-10 sm:p-10 md:p-10 lg:p-28">
            <h1 class="text-4xl font-extrabold text-white mt-1">JOWIN CUETO</h1>
            <div>
                <h1 class="text-xl text-slate-200 mt-2">Frond-End Developer</h1>
                <p class="w-full lg:w-1/2 mt-4 text-md text-slate-400">I optimize website user experience and bring concepts to life.</p>
            </div>
            <SocialNav />
            <!-- <div class="mt-8">
                <a href="#" @click.prevent="showContact">
                    <p class="text-slate-200">Let's Collaborate
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </p>
                </a>
            </div> -->
            <nav class="mt-12 max-md:hidden md:hidden lg:block" id="menu">
                <a href="#section1" id="link1" class="text-slate-500 text-xs font-bold flex flex-wrap nav-link">
                    <span v-if="portfolioStore.isShowNavSpan1" class="mr-4">------</span>
                    ABOUT
                </a>
                <a href="#section2" id="link2" class="text-slate-500 text-xs font-bold flex flex-wrap mt-4 nav-link">
                    <span v-if="portfolioStore.isShowNavSpan2" class="mr-4">------</span>
                    EXPERIENCE
                </a>
                <a href="#section3" id="link3" class="text-slate-500 text-xs font-bold flex flex-wrap mt-4 nav-link">
                    <span v-if="portfolioStore.isShowNavSpan3" class="mr-4">------</span>
                    PROJECTS
                </a>
            </nav>
        </div>

        <!-- Right Column -->
        <div class="lg:w-1/2 h-full flex flex-col max-sm:pt-0 md:pt-0 max-sm:p-10 sm:p-10 md:p-10 lg:pl-0 lg:p-28 lg:max-h-auto lg:overflow-y-auto">
            <div>
                <h1 class="text-xl font-bold mb-4 text-slate-700 max-sm:text-slate-400 max-md:text-slate-400">ABOUT</h1>
                <section id="section1" class="text-slate-400 text-md section">
                    <div>
                        <p>Back in 2014 - 2018, when I was still studying, I developed an interest in web designing. I create mockups and convert them into HTML and CSS. I even gave myself the title of a front-end designer. However, fast forward, when I started working, my knowledge in front-end development expanded. I realized that it's not just about creating mockups and converting them into HTML and CSS. Front-end development also involves interactions with data. For example, you may need to fetch data to dynamically display it on the front-end side of the system.</p>
                        <p class="mt-7">Currently, I work at <a href="https://www.prolook.com/" target="_blank" class="text-slate-200">Prolook Sports</a>. I've been there for just over 4 years. My responsibilities is to maintain existing projects like emplementing new features and bug fixing. I love non-strict environment because I can think clearly and focus on what I'm doing.</p>
                        <p class="mt-7">When I'm not in front of the computer, especially after finishing work, I go to the gym to exercise. This is very important, especially for us programmers who are always in front of the computer and sitting down.</p>
                    </div>
                </section>

                <h1 class="text-xl font-bold mb-4 text-slate-700 mt-28 max-sm:text-slate-400 max-md:text-slate-400">EXPERIENCE</h1>
                <section id="section2" class="section">
                    <div>
                        <a href="https://www.prolook.com/" target="_blank">
                            <p class="text-slate-200">Prolook Sports
                                <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                <span class="text-slate-400 float-right text-xs">2019 - PRESENT</span>
                            </p>
                        </a>
                        <p class="text-slate-600">Front-End Developer</p>
                        <p class="mt-2 text-sm text-slate-400">Responsible for maintaining existing projects, fixing bugs and implementing new features. Make sure the to implement reusable component and implement <a class="text-slate-200" href="https://pinia.vuejs.org/" target="_blank">pinia</a> for state management. Make sure the code is maintainable and readable.</p>
                        <ul class="flex flex-wrap text-[#5be3d4] text-xs mt-2">
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
                        <a href="https://wordtorque.graxia.dev" target="_blank">
                            <p class="text-slate-200">Wordtorque
                                <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                <span class="text-slate-400 float-right text-xs">2023</span>
                            </p>
                        </a>
                        <p class="text-slate-600">Part Time - Front-End Developer</p>
                        <p class="mt-2 text-sm text-slate-400">Responsible for maintaining existing projects, fixing bugs and user interface enhancement. Make sure the system is mobile responsinve and easy to navigate. </p>
                        <ul class="flex flex-wrap text-[#5be3d4] text-xs mt-2">
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">JavaScript</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">HTML</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">CSS</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">GIT</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Bootstrap</li>
                        </ul>
                    </div>
                    <div class="mt-10">
                        <a href="#" disabled class="cursor-not-allowed">
                            <p class="text-slate-500">Codeeric IT Solution 
                                <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                <span class="text-slate-400 float-right text-xs">2018 - 2019</span>
                            </p>
                        </a>
                        <p class="text-slate-600">Front-End Developer</p>
                        <p class="mt-2 text-sm text-slate-400">Responsible for maintaining existing projects, fixing bugs and implementing new features. Make sure the system is responsive and easy to navigate in mobile.</p>
                        <ul class="flex flex-wrap text-[#5be3d4] text-xs mt-2">
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
                            <p class="text-slate-500">La Verdad Christian College 
                                <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                <span class="text-slate-400 float-right text-xs">2018</span>
                            </p>
                        </a>
                        <p class="text-slate-600">Internship Trainee - Front-End Developer</p>
                        <p class="mt-2 text-sm text-slate-400">Responsible for the development of the project, fixing bugs and implementing features. Make sure the the website is informative, responsive and easy to navigate in mobile.</p>
                        <ul class="flex flex-wrap text-[#5be3d4] text-xs mt-2">
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">JavaScript</li>
                            <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Wix (CMS)</li>
                        </ul>
                    </div>
                    <div class="mt-10">
                        <a href="/jmc-resume.pdf" target="_blank">
                            <p class="text-slate-200">View full resume
                                <i class="fa fa-arrow-right" aria-hidden="true"></i>
                            </p>
                        </a>
                    </div>
                </section>

                <h1 class="text-xl font-bold mb-4 text-slate-700 mt-28 max-sm:text-slate-400 max-md:text-slate-400">PROJECTS</h1>
                <section id="section3" class="mt-6 section">
                    <div class="flex">
                        <div class="max-sm:hidden">
                            <img src="./assets/projects/prolook.png" width="300" height="48" class="rounded-sm"/>
                        </div>
                        <div class="ml-4 max-sm:ml-0">
                            <a href="https://customizer.prolook.com/index" target="_blank">
                                <p class="text-slate-200">Prolook Customizer 
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </p>
                            </a>
                            <p class="text-sm mt-2 text-slate-400">Web app for customizing sports uniform like baseball, apparel, accessories and more. Add application like number and text, patterns, piping, custom logo and more. You can also order your customized uniform.</p>
                            <ul class="flex flex-wrap text-[#5be3d4] text-xs mt-2">
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">JavaScript</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Vue JS</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">TypeScript</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Uikit</li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex mt-10">
                        <div class="max-sm:hidden">
                            <img src="./assets/projects/dsg.png" width="300" height="48" class="rounded-sm"/>
                        </div>
                        <div class="ml-4 max-sm:ml-0">
                            <a href="https://prolookteam.com/" target="_blank">
                                <p class="text-slate-200">Dick's & Sporting Goods Customizer
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </p>
                            </a>
                            <p class="text-sm mt-2 text-slate-400">Web app for customizing sports uniform like baseball, apparel, accessories and more. Add application like number and text, patterns, piping, custom logo and more. You can also order your customized uniform.</p>
                            <ul class="flex flex-wrap text-[#5be3d4] text-xs mt-2">
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">JavaScript</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Vue JS</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">TypeScript</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Uikit</li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex mt-10">
                        <div class="max-sm:hidden">
                            <img src="./assets/projects/pg.png" width="300" height="48" class="rounded-sm"/>
                        </div>
                        <div class="ml-4 max-sm:ml-0">
                            <a href="https://www.pguniforms.com" target="_blank">
                                <p class="text-slate-200">Perfect Game Customizer
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </p>
                            </a>
                            <p class="text-sm mt-2 text-slate-400">Web app for customizing sports uniform like baseball, apparel, accessories and more. Add application like number and text, patterns, piping, custom logo and more. You can also order your customized uniform.</p>
                            <ul class="flex flex-wrap text-[#5be3d4] text-xs mt-2">
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">JavaScript</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Vue JS</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">TypeScript</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Uikit</li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex mt-10">
                        <div class="max-sm:hidden">
                            <img src="./assets/projects/alli.png" width="300" height="48" class="rounded-sm"/>
                        </div>
                        <div class="ml-4 max-sm:ml-0">
                            <a href="https://www.alliteamuniforms.com" target="_blank">
                                <p class="text-slate-200">Alli Customizer
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </p>
                            </a>
                            <p class="text-sm mt-2 text-slate-400">Web app for customizing sports uniform like baseball, apparel, accessories and more. Add application like number and text, patterns, piping, custom logo and more. You can also order your customized uniform.</p>
                            <ul class="flex flex-wrap text-[#5be3d4] text-xs mt-2">
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">JavaScript</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Vue JS</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">TypeScript</li>
                                <li class="bg-slate-700 p-1.5 rounded-full mr-2 mt-2">Uikit</li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-10">
                        <a href="#" @click.prevent="showProjects">
                            <p class="text-slate-200">View full project archive
                                <i class="fa fa-arrow-right" aria-hidden="true"></i>
                            </p>
                        </a>
                    </div>
                </section>
                <section class="mt-20 max-sm:mb-10 md:mb-10 lg:mb-0">
                    <div class="text-slate-500 text-xs">
                        <p>Coded in<a class="text-slate-200" href="https://code.visualstudio.com/" target="_blank"> Visual Studio Code.</a> Built with <a class="text-slate-200" href="https://vuejs.org/" target="_blank">Vue.js</a> and <a class="text-slate-200" href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>, deployed in <a class="text-slate-200" href="https://www.netlify.com/" target="_blank">Netlify.</a> All text is set to <a class="text-slate-200" href="https://fonts.google.com/specimen/Inter?query=inter" target="_blank">Inter</a> font</p>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
<style>
    .loading-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0f172a;
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
</style>