<template>
    <div>
        <h1 class="text-2xl font-bold mb-4 text-slate-700">WORK</h1>
        <h1 class="font-bold mb-4 text-slate-400">Check out some of my work</h1>
        <div class="flex">
            <div class="w-1/2 max-w-sm p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <h5 class="mb-2 font-bold tracking-tight text-slate-700 dark:text-white">CODEERIC IT SOLUTION</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">No Description...</p>
                <a href="#" class="disbaled-btn inline-flex items-center px-3 py-2 text-sm text-center text-white bg-[#4f93ff] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Visit Site
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
            <div class="pl-6 text-xs text-slate-500">2018 - 2019</div>
        </div>
        
        <div class="flex">
            <div class="w-1/2 max-w-sm p-6 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 mt-4">
                <a href="#">
                    <h5 class="mb-2 font-bold tracking-tight text-slate-700 dark:text-white">PROLOOK SPORTS</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Customize baseball uniforms for your team. Design custom baseball jerseys, pants and apparel. Using our Prolook Sports Customizer.</p>
                <a href="https://customizer.prolook.com/index" class="inline-flex items-center px-3 py-2 text-sm text-center text-white bg-[#4f93ff] hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Visit Site
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
            <div class="pl-6 text-xs mt-4 text-slate-500 font-bold">2019 - 2023</div>
        </div>
    </div>
</template>
<script setup>
</script>
<style>
    .disbaled-btn {
        pointer-events: none;
        background-color: #ccc;
    }
</style>