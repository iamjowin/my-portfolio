<template>
    <button class="w-40 inline-flex items-center px-3 py-2 text-sm text-center text-white bg-[#4f93ff] hover:bg-blue-500">
        <p v-if="processing">{{ processingText }}</p>
        <p v-else>{{ text }}</p>
    </button>
</template>
<script setup>
defineProps({
    text: {
        String,
        default: 'Button Text'
    },
    processing: {
        Boolean,
        default: false
    },
    processingText: {
        String,
        default: ''
    },

})
</script>