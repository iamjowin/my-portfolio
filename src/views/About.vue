<template>
    <div>
        <h1 class="text-2xl font-bold mb-4 text-slate-700">ABOUT</h1>
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
</template>
<script setup>
import Button from '../components/Button.vue';
import { ref } from 'vue';

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
</script>