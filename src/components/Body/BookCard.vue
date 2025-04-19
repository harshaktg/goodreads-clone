<template>
    <div class="relative group" :class="{ 'modern-ux': isModernUI }">
        <div class="book-card" :class="{ 'compact': isCompact }">
            <div class="aspect-[2/3] overflow-hidden rounded-t-lg">
                <img :src="book.cover" :alt="book.title"
                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
            </div>
            <div class="p-3">
                <h3 class="font-semibold text-gray-900 dark:text-gray-100 text-sm line-clamp-2">{{ book.title }}</h3>
                <p class="text-xs text-gray-600 dark:text-gray-400 mt-1">{{ book.author }}</p>
            </div>
        </div>

        <button @click="toggleShelf" class="add-to-shelf-btn" :class="{
            'modern': isModernUI,
            'in-shelf': isInShelf(book)
        }" :title="isInShelf(book) ? 'Remove from Shelf' : 'Add to Shelf'">
            <span class="sr-only">{{ isInShelf(book) ? 'Remove from Shelf' : 'Add to Shelf' }}</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!isInShelf(book)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>
</template>

<script setup lang="ts">
import { useShelf, type Book } from '../../composables/useShelf'

const props = defineProps<{
    book: Book
    isModernUI?: boolean
    isCompact?: boolean
}>()

const { addToShelf, removeFromShelf, isInShelf } = useShelf()

const toggleShelf = () => {
    if (isInShelf(props.book)) {
        removeFromShelf(props.book.id)
    } else {
        addToShelf(props.book)
    }
}
</script>

<style scoped>
.book-card {
    @apply bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-all duration-200 w-[160px];
}

.book-card.compact {
    @apply w-[120px];
}

.modern-ux .book-card {
    @apply hover:shadow-xl;
}

.add-to-shelf-btn {
    @apply absolute top-2 right-2 p-1.5 bg-white/90 hover:bg-green-600/90 hover:text-white dark:bg-gray-800/90 rounded-full shadow-md transition-all duration-200 hover:scale-110 text-gray-600 dark:text-gray-300;
    @apply sm:opacity-0 sm:group-hover:opacity-100;
}

.add-to-shelf-btn.modern {
    @apply bg-amber-700/90 text-white hover:bg-green-600/90;
}

.add-to-shelf-btn.in-shelf {
    @apply sm:opacity-100 bg-red-600/90 text-white hover:bg-red-600/90;
}

.modern-ux .add-to-shelf-btn.in-shelf {
    @apply bg-amber-800/90 hover:bg-red-600/90;
}
</style>