<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'

const toggleTheme = (evt) => {
    const isChecked = evt.target.checked;
    const mainBody = document.querySelector('.main-body');
    const hasDarkThemeClass = mainBody.classList.contains('dark-theme');

    if (hasDarkThemeClass && !isChecked) {
        mainBody.classList.remove('dark-theme');
    } else {
        mainBody.classList.add('dark-theme');
    }
};

const hideLoadingPage = () => {
    const loadingContainer = document.querySelector('.loading-container');
    loadingContainer.style.display = 'none';
}

onMounted(() => {
    setTimeout(hideLoadingPage, 4000);
})
</script>
<template>
    <div class="loading-container">
        <img src="./assets/bean-eater.svg">
    </div>
    <div class="fixed top-4 right-4 z-10">
        <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" @change="toggleTheme" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
        </label>
    </div>
    <div class="lg:flex h-screen main-column-div">
        <div class="lg:w-1/2 h-full flex flex-col p-10 left-column-div">
            <div class="flex flex-row items-center">
                <!-- <img src="./assets/my-profile-old.png" class="rounded-full" width="50" height="50" alt="profile"> -->
                <h1 class="text-3xl font-bold text-slate-700 mt-1">JOWIN CUETO</h1>
            </div>
            <h1 class="text-xl font-bold text-slate-400 mt-1">Frond-End Developer</h1>
            <p class="w-full lg:w-1/2 mt-4">Optimizing the user experience using HTML, JAVASCRIPT and CSS to bring concepts to life</p>
            <nav class="mt-10">
                <RouterLink id="route1" class="text-slate-400 text-xs font-bold flex flex-col" to="/">HOME</RouterLink>
                <RouterLink id="route2" class="text-slate-400 text-xs font-bold flex flex-col mt-4" to="/about">ABOUT</RouterLink>
                <RouterLink id="route3" class="text-slate-400 text-xs font-bold flex flex-col mt-4" to="/work">WORK</RouterLink>
                <RouterLink id="route4" class="text-slate-400 text-xs font-bold flex flex-col mt-4" to="/contact">CONTACT</RouterLink>
            </nav>
        </div>
        <Transition>
            <RouterView class="lg:w-1/2 h-full flex flex-col right-column-div p-10"/>
        </Transition>
    </div>
    <div>
        
    </div>
    <div class="fixed bottom-4 left-10 social-footer">
            <ul class="list-none p-0 mt-6 flex flex-row social-footer-ul">
                <li class="mr-3">
                    <a href="https://www.facebook.com/jowin.cueto.12/">
                        <i class="fab fa-facebook text-[#4f93ff] hover:text-blue-600 text-2xl"></i>
                    </a>
                </li>
                <li class="mr-3">
                    <a href="https://github.com/iamjow">
                        <i class="fab fa-github text-[#4f93ff] hover:text-blue-500 text-2xl"></i>
                    </a>
                </li>
                <li class="mr-3">
                    <a href="https://www.instagram.com/iamjowinmc/">
                        <i class="fab fa-instagram text-[#4f93ff] hover:text-pink-600 text-2xl"></i>
                    </a>
                </li>
                <li class="mr-3">
                    <a href="https://www.linkedin.com/in/jowin-cueto-09150867456/">
                        <i class="fab fa-linkedin text-[#4f93ff] hover:text-blue-800 text-2xl"></i>
                    </a>
                </li>
            </ul>
        </div>
</template>
<style>
    .nav-link {
        font-weight: bold;
        color: #4f93ff;
    }

    .dark-theme {
        background-color: #000; 
    }

    .loading-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff; /* Background color */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }

    .loading-text {
        color: #fff; /* Text color */
        font-size: 24px; /* Text size */
    }

    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }

    .right-column-div {
        max-height: auto; 
        overflow-y: auto; 
    }
</style>