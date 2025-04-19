<template>
    <div class="flex items-center space-x-2">
        <button @click="toggleUXMode"
            class="relative inline-flex items-center px-3 py-1.5 rounded-full transition-colors duration-300" :class="{
                'bg-amber-600 text-white hover:bg-amber-800': !isModernUX,
                'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600': isModernUX
            }">
            <span class="flex items-center space-x-2">
                <svg v-if="!isModernUX" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span class="text-sm font-medium">{{ !isModernUX ? 'Modern UI' : 'Classic UI' }}</span>
            </span>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useLocalStorage } from '@vueuse/core'

const isModernUX = useLocalStorage('modern-ux-enabled', false)

const toggleUXMode = () => {
    isModernUX.value = !isModernUX.value
    document.documentElement.classList.toggle('modern-ux', isModernUX.value)
}

// Initialize on mount
watch(isModernUX, (newValue) => {
    document.documentElement.classList.toggle('modern-ux', newValue)
}, { immediate: true })
</script>