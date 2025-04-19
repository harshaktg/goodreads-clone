<script setup lang="ts">
import ClassicHeader from './components/Header/HeaderMain.vue'
import ModernHeader from './components/Header/ModernHeader.vue'
import ClassicMainContent from './components/Body/MainContentContainer.vue'
import ModernMainContent from './components/Body/ModernMainContent.vue'
import ClassicFooter from './components/Footer/FooterMain.vue'
import ModernFooter from './components/Footer/ModernFooter.vue'
import { useLocalStorage } from '@vueuse/core'

const isModernUX = useLocalStorage('modern-ux-enabled', false)
</script>

<template>
    <div :class="[
        'min-h-screen transition-all duration-500',
        isModernUX ? 'modern-ux' : '',
        'bg-white dark:bg-dark-bg-primary dark:text-dark-text-primary'
    ]">
        <Transition name="fade" mode="out-in">
            <ClassicHeader v-if="!isModernUX" :key="'classic'" />
            <ModernHeader v-else :key="'modern'" />
        </Transition>

        <Transition name="fade" mode="out-in">
            <ClassicMainContent v-if="!isModernUX" :key="'classic'" />
            <ModernMainContent v-else :key="'modern'" />
        </Transition>

        <Transition name="fade" mode="out-in">
            <ClassicFooter v-if="!isModernUX" :key="'classic'" />
            <ModernFooter v-else :key="'modern'" />
        </Transition>
    </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Ensure transitions are smooth */
* {
    transition-property: background-color, border-color, color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}

/* Smooth scroll behavior */
html {
    scroll-behavior: smooth;
}

/* Modern UI specific transitions */
.modern-ux * {
    transition-duration: 200ms;
}
</style>
