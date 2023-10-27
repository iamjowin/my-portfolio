<template>
    <div>
        <div id="div1" class="scroll-div">
            <!-- <p class="text-slate-700">Hi, my name is,</p>
            <h1 class="text-2xl font-bold mb-4 text-slate-700">JOWIN M CUETO</h1> -->
            <h1 class="font-bold mb-4 text-slate-400">I'm a Front End Developer</h1>
            <p class="text-slate-700 border p-4">Optimizing the user experience using HTML, JAVASCRIPT and CSS to bring concepts to life. Developing and maintaining the user interface, Implementing design on mobile websites, fixing bugs and testing for usability.</p>
            <h1 class="font-bold mb-4 text-slate-400 mt-8">Technologies I've work with</h1>
            <ul class="list-none p-0 mt-6 flex flex-row flex-wrap technologies-list">
                <li class="w-1/3 md:w-1/6">
                    <img src="../assets/javascript-icon.png" alt="Image 1" class="rounded-lg" height="50" width="50">
                </li>
                <li class="w-1/3 md:w-1/6">
                    <img src="../assets/typescript-icon.png" alt="Image 2" class="" height="50" width="50">
                </li>
                <li class="w-1/3 md:w-1/6">
                    <img src="../assets/vue-icon.png" alt="Image 3" class="" height="50" width="50">
                </li>
                <li class="w-1/3 md:w-1/6">
                    <img src="../assets/html-icon.png" alt="Image 4" class="" height="50" width="50">
                </li>
                <li class="w-1/3 md:w-1/6">
                    <img src="../assets/css-icon.png" alt="Image 4" class="" height="50" width="50">
                </li>
            </ul>
        </div>

        <div id="div2" class="mt-20 scroll-div">
            <h1 class="text-xl font-bold mb-4 text-slate-700">ABOUT</h1>
            <h1 class="font-bold mb-4 text-slate-400">Hi. I'm Jowin, nice to meet you, Please take a look around.</h1>
            <p class="text-slate-700 border p-4">Currently, I work at PROLOOK SPORTS. I've been there for just over 4 years. My responsibilities include implementing and maintaining in all existing projects. I love non-strict environment because I can think clearly and focus on what I'm doing.</p>
            <h1 class="font-bold mb-4 text-slate-400 mt-4">More about me</h1>
            <div>
                <Button 
                    @click="downloadResume('/jmc-resume.pdf')" 
                    :text="`Get My Resume`" 
                    :processing-text="`Downloading...`" 
                    :processing="downloading"
                />
            </div>
        </div>

        <div id="div3" class="mt-20 scroll-div">
            <h1 class="text-xl font-bold mb-4 text-slate-700">WORK</h1>
            <h1 class="font-bold mb-4 text-slate-400">Check out some of my work</h1>
            <div class="flex">
                <div class="max-w-sm p-6 bg-white border">
                    <div class="text-right text-xs text-[#4f93ff] font-bold work-date">2018 - 2019</div>
                    <a href="#">
                        <h5 class="mb-2 font-bold tracking-tight text-slate-700">CODEERIC IT SOLUTION</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700npm">Analyzing data and providing feedback from consumers and employees and then proposing solutions in order to finalize the designs.</p>
                    <a href="#" class="disbaled-btn inline-flex items-center px-3 py-2 text-sm text-center text-white bg-[#4f93ff] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Visit Site
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
            
            <div class="flex">
                <div class=" max-w-sm p-6 bg-white border mt-4">
                    <div class="text-right text-xs text-[#4f93ff] font-bold work-date">2019 - current</div>
                    <a href="#">
                        <h5 class="mb-2 font-bold tracking-tight text-slate-700">PROLOOK SPORTS</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700">Customize baseball uniforms for your team. Design custom baseball jerseys, pants and apparel. Using our Prolook Sports Customizer.</p>
                    <a href="https://customizer.prolook.com/index" class="inline-flex items-center px-3 py-2 text-sm text-center text-white bg-[#4f93ff] hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Visit Site
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div id="div4" class="mt-20 scroll-div contact-div">
            <h1 class="text-xl font-bold mb-4 text-slate-700">CONTACT</h1>
            <h1 class="font-bold mb-4 text-slate-400">Shoot me an email!</h1>
            <form  method="POST" action="https://getform.io/f/1bcd007d-e944-4a72-b433-1172397bffb9">
                <div class="flex flex-wrap -mx-2">
                    <div class="w-full sm:w-1/2 px-2">
                        <input placeholder="Name" type="text" id="name" name="name" class="text-sm block w-full p-2 text-slate-700 border">
                    </div>
                    <div class="w-full sm:w-1/2 px-2 sm:mt-0 mt-2">
                        <input placeholder="Email" type="text" id="email" name="email" class="text-sm block w-full p-2 text-slate-700 border">
                    </div>
                </div>
                <div class="mt-2">
                    <textarea id="message" name="message" rows="4" class="mt-4 block p-2.5 w-full text-sm text-slate-700 border border-gray-200 focus:ring-blue-500 focus:border-blue-500  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a message..."></textarea>
                </div>
                <button type="submit" class="mt-6 inline-flex items-center px-3 py-2 text-sm text-center text-white bg-[#4f93ff] hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Let's Collaborate</button>
            </form>
        </div>
    </div>
</template>
<script setup>
import Button from '../components/Button.vue';
import { handleIntersect } from '../plugins/observer';
import { ref, onMounted } from 'vue';

const downloading = ref(false);

const downloadResume = url => {
    downloading.value = true;

    setTimeout(() => {
        const link = document.createElement('a');

        link.href = url;
        link.download = 'jowin_cueto_resume.pdf';
        link.click();

        downloading.value = false;
    }, 3000);
}

onMounted(() => {
    const divs = document.querySelectorAll(".scroll-div");

    divs.forEach((div) => {
        const observer = new IntersectionObserver(handleIntersect, { threshold: 0.5 });
        observer.observe(div);
    });
});
</script>
<style>
    .scroll-div {
        opacity: 0;
        transition: opacity 1.5s ease; /* CSS transition for opacity */
    }

    .add-opacity {
        opacity: 1;
    }
</style>