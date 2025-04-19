<template>
    <div :class="{ 'modern-ux': isModernUI }">
        <div v-if="isModernUI" class="shelf-header">
            <h2 class="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                My Shelf
                <span class="text-sm font-normal text-gray-600 dark:text-gray-400 ml-2">
                    ({{ shelfCount }} books)
                </span>
            </h2>
        </div>

        <div class="block sm:hidden">
            <div class="relative">
                <div class="flex gap-4 overflow-x-auto pb-4 px-1 -mx-1 scrollbar-hide scroll-smooth"
                    ref="mobileScrollContainer">
                    <BookCard v-for="book in myShelf" :key="book.id" :book="book" :isModernUI="isModernUI" />
                </div>
                <div v-if="shelfCount > 0"
                    class="absolute left-0 top-0 bottom-4 w-4 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none">
                </div>
                <div v-if="shelfCount > 0"
                    class="absolute right-0 top-0 bottom-4 w-4 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none">
                </div>
            </div>
        </div>

        <div class="hidden sm:block">
            <div class="relative group">
                <div class="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth" ref="scrollContainer">
                    <BookCard v-for="book in myShelf" :key="book.id" :book="book" :isModernUI="isModernUI"
                        :isCompact="isCompact" />
                </div>
                <div
                    class="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none">
                </div>
                <div
                    class="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none">
                </div>

                <button v-if="shelfCount > 0" @click="scrollLeft"
                    class="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white dark:hover:bg-gray-700">
                    <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button v-if="shelfCount > 0" @click="scrollRight"
                    class="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white dark:hover:bg-gray-700">
                    <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>

        <div v-if="shelfCount === 0" class="empty-shelf">
            <p class="text-gray-600 dark:text-gray-400 text-center py-6 px-4 text-sm sm:text-base">
                Your shelf is empty. Start adding books by clicking the + button on books.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useShelf } from '../../composables/useShelf'
import BookCard from './BookCard.vue'

defineProps<{
    isModernUI?: boolean
    isCompact?: boolean
}>()

const { myShelf } = useShelf()
const scrollContainer = ref<HTMLElement | null>(null)
const mobileScrollContainer = ref<HTMLElement | null>(null)
const shelfCount = computed(() => myShelf.value?.length ?? 0)

const scrollLeft = () => {
    if (scrollContainer.value) {
        scrollContainer.value.scrollBy({ left: -200, behavior: 'smooth' })
    }
}

const scrollRight = () => {
    if (scrollContainer.value) {
        scrollContainer.value.scrollBy({ left: 200, behavior: 'smooth' })
    }
}
</script>

<style scoped>
.shelf-header {
    @apply border-b border-gray-200 dark:border-gray-700 pb-2 sm:pb-4 mb-4 sm:mb-6;
}

.modern-ux .shelf-header {
    @apply border-amber-100 dark:border-amber-900;
}

.empty-shelf {
    @apply bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 mt-2;
}

.modern-ux .empty-shelf {
    @apply bg-amber-50/50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scroll-smooth {
    scroll-behavior: smooth;
}
</style>