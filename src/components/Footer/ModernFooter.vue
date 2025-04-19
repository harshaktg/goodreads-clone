<template>
    <footer class="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div class="container-responsive py-16">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
                <!-- Company Info -->
                <div class="space-y-4">
                    <img src="https://s.gr-assets.com/assets/home/header_logo-8d96d7078a3d63f9f31d92282fd67cf4.png"
                        alt="Goodreads" class="h-8 dark:invert">
                    <p class="text-gray-600 dark:text-gray-400">
                        The world's largest site for readers and book recommendations.
                    </p>
                    <div class="flex space-x-4">
                        <a v-for="social in footerData.socialLinks" :key="social.alt" :href="social.url"
                            :aria-label="social.alt" class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                            <span class="sr-only">{{ social.alt }}</span>
                            <img :src="social.src" :alt="social.alt" class="h-6 w-6">
                        </a>
                    </div>
                </div>

                <!-- Link Groups -->
                <div v-for="group in footerData.linkGroups" :key="group.heading" class="space-y-4">
                    <h3 v-if="group.heading !== 'Connect'"
                        class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                        {{ group.heading }}
                    </h3>
                    <ul class="space-y-2">
                        <li v-for="link in group.links" :key="link.label">
                            <a :href="link.url"
                                class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200">
                                {{ link.label }}
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- App Badges -->
                <div class="space-y-4">
                    <h3 class="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                        Mobile Apps
                    </h3>
                    <div class="flex flex-col space-y-2">
                        <a v-for="badge in footerData.appBadges" :key="badge.alt" :href="badge.url">
                            <img :src="badge.src" :srcset="badge.srcset" :alt="badge.alt" class="h-10">
                        </a>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    <p class="text-gray-500 dark:text-gray-400">
                        {{ footerData.metaItems[0].text }}
                    </p>
                    <a v-if="footerData.metaItems[1].url" :href="footerData.metaItems[1].url"
                        class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                        {{ footerData.metaItems[1].label }}
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import footerData from '../../footerData';
</script>

<style scoped>
.container-responsive {
    @apply px-4 mx-auto max-w-7xl sm:px-6 lg:px-8;
}
</style>