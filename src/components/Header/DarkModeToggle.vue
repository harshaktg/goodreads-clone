<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

const isDark = ref(false);

onMounted(() => {
    // Check if user has a dark mode preference saved
    const darkMode = localStorage.getItem('darkMode');
    isDark.value = darkMode === 'true';
    updateTheme();
});

watch(isDark, () => {
    updateTheme();
    localStorage.setItem('darkMode', isDark.value.toString());
});

const updateTheme = () => {
    if (isDark.value) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};
</script>

<template>
    <button @click="isDark = !isDark"
        class="p-2 rounded-full transition-colors duration-200 hover:bg-gr-button-grey dark:hover:bg-dark-button-hover">
        <!-- Sun icon for light mode -->
        <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <!-- Moon icon for dark mode -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
    </button>
</template>