<script setup lang="ts">
import { useLocalStorage, usePreferredDark } from '@vueuse/core';
import { computed, watch } from 'vue';

// Use system preference
const systemDark = usePreferredDark();

// Store user preference in localStorage, null means use system preference
const userPreference = useLocalStorage<'dark' | 'light' | null>('color-scheme', null);

// Computed property to determine if dark mode should be active
const isDark = computed(() => {
    // If user has set a preference, use that
    if (userPreference.value !== null) {
        return userPreference.value === 'dark';
    }
    // Otherwise use system preference
    return systemDark.value;
});

// Watch for changes and update document class
watch(isDark, (dark) => {
    if (dark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}, { immediate: true });

// Toggle theme and store in localStorage
const toggleTheme = () => {
    // If currently using system preference
    if (userPreference.value === null) {
        // Set initial value opposite to system preference
        userPreference.value = systemDark.value ? 'light' : 'dark';
    } else {
        // Toggle between light and dark
        userPreference.value = userPreference.value === 'dark' ? 'light' : 'dark';
    }
};

// Reset to system preference
const resetToSystem = () => {
    userPreference.value = null;
};
</script>

<template>
    <div class="flex items-center space-x-2">
        <!-- System preference indicator -->
        <button v-if="userPreference !== null" @click="resetToSystem"
            class="p-2 rounded-full transition-colors duration-200 hover:bg-gr-button-grey dark:hover:bg-dark-button-hover"
            title="Reset to system preference">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        </button>

        <!-- Theme toggle button -->
        <button @click="toggleTheme"
            class="p-2 rounded-full transition-colors duration-200 hover:bg-gr-button-grey dark:hover:bg-dark-button-hover"
            :title="userPreference === null ? 'Using system preference' : 'Toggle theme'">
            <!-- Sun icon for light mode -->
            <svg v-if="!isDark" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <!-- Moon icon for dark mode -->
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        </button>
    </div>
</template>