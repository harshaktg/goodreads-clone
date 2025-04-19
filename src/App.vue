<script setup lang="ts">
import Header from './components/Header/HeaderMain.vue'
import MainContentContainer from './components/Body/MainContentContainer.vue'
import Footer from './components/Footer/FooterMain.vue'
</script>

<template>
    <div
        class="min-h-screen bg-white dark:bg-dark-bg-primary dark:text-dark-text-primary transition-colors duration-200">
        <Header />
        <MainContentContainer />
        <Footer />
    </div>
</template>

<style></style>
