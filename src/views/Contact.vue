<template>
    <div>
        <h1 class="text-2xl font-bold mb-4 text-slate-700">CONTACT</h1>
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
</template>
<script setup>
import Button from '../components/Button.vue';
</script>