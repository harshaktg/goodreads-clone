<template>
    <main class="py-8 sm:py-12 bg-gradient-to-b from-purple-700/5 to-transparent">
        <div class="container-responsive">
            <section class="mb-8 sm:mb-16 animate-slide-up" style="animation-delay: 100ms;">
                <h2 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">Editorial Picks
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <EditorialBlogThumbnail v-for="blog in editorialBlogs" :key="blog.id" :data="blog"
                        class="modern-card" />
                </div>
            </section>

            <section class="mb-8 sm:mb-16 animate-slide-up" style="animation-delay: 200ms;">
                <h2 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">Inspiring Quotes
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <QuoteItem v-for="quote in quotes" :key="quote.id" :quote="quote" :is-visible="true"
                        class="modern-quote" />
                </div>
            </section>

            <section class="mb-12">
                <MyShelf :isModernUI="true" />
            </section>

            <section class="mb-12">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Popular This Week
                </h2>
                <div class="block sm:hidden">
                    <div class="grid grid-cols-2 gap-4">
                        <BookCard v-for="book in popularBooks" :key="book.id" :book="book" :isModernUI="true" />
                    </div>
                </div>
                <div class="hidden sm:block">
                    <div class="relative group">
                        <div class="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
                            ref="scrollContainer">
                            <BookCard v-for="book in popularBooks" :key="book.id" :book="book" :isModernUI="true" />
                        </div>
                        <div
                            class="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none">
                        </div>
                        <div
                            class="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none">
                        </div>

                        <button @click="scrollLeft"
                            class="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white dark:hover:bg-gray-700">
                            <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button @click="scrollRight"
                            class="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white dark:hover:bg-gray-700">
                            <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            <section class="mb-8 sm:mb-16 animate-slide-up" style="animation-delay: 300ms;">
                <h2 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">Discover More</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <DiscoveryItem v-for="item in discoveryItems" :key="item.id" :item="item"
                        class="modern-discovery" />
                </div>
            </section>

            <section class="mb-8 sm:mb-16 animate-slide-up" style="animation-delay: 400ms;">
                <ChoiceAwards :awards-data="awardsData" class="modern-awards" />
            </section>

            <section class="animate-slide-up" style="animation-delay: 500ms;">
                <h2 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">Featured Authors
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    <AuthorsFeature v-for="author in authors" :key="author.id" :data="author" class="modern-author" />
                </div>
            </section>

            <section class="mb-8 sm:mb-16 animate-fade-in">
                <h2 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">Explore Genres
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-4">
                    <GenreList :genres="genres" :columns="4" class="modern-genre-list" />
                </div>
            </section>
        </div>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { popularBooks } from '../../constants/books';
import GenreList from './GenreList.vue';
import EditorialBlogThumbnail from './EditorialBlogThumbnail.vue';
import QuoteItem from './QuoteItem.vue';
import DiscoveryItem from './DiscoveryItem.vue';
import ChoiceAwards from './ChoiceAwards.vue';
import AuthorsFeature from './AuthorsFeature.vue';
import MyShelf from './MyShelf.vue'
import BookCard from './BookCard.vue'
import data from '../../data';

const genres = data.genres;

const editorialBlogs = [
    {
        id: 'editorial-blog',
        header: data.editorialBlog.header,
        blogPostUrl: data.editorialBlog.blogPostUrl,
        title: data.editorialBlog.title,
        imageUrl: data.editorialBlog.imageUrl,
        imageAlt: data.editorialBlog.imageAlt,
        likesCountText: data.editorialBlog.likesCountText,
        commentsCountText: data.editorialBlog.commentsCountText
    }
];

const quotes = data.quotes.slice().sort(() => Math.random() - 0.5).slice(0, 2).map((quote, index) => ({
    id: index + 1,
    text: quote.text,
    author: quote.author,
    avatar: quote.avatar,
    work: quote.work
}));

const discoveryItems = data.discoveryItems.map((item, index) => ({
    id: `discovery-${index}`,
    title: item.actionText.replace('Because ', '').replace(' liked…', ''),
    actionText: item.actionText,
    sourceBooks: item.sourceBooks.map(book => ({
        url: book.url,
        alt: book.alt,
        title: book.title,
        src: book.src
    })),
    resultBook: {
        url: item.resultBook.url,
        alt: item.resultBook.alt,
        title: item.resultBook.title,
        src: item.resultBook.src,
        width: item.resultBook.width,
        descriptors: item.resultBook.descriptors,
        actionText: item.resultBook.actionText
    },
    arrowImgSrc: item.arrowImgSrc,
    description: item.resultBook.descriptors
}));

const awardsData = {
    title: data.awards.title,
    logo: data.awards.logo,
    year: new Date().getFullYear(),
    categories: data.awards.categories.slice(0, 3)
};

const authors = [
    {
        id: 'oscar-wilde',
        title: 'Oscar Wilde',
        text: 'Author of The Picture of Dorian Gray',
        image: data.quotes[0].avatar.src,
        links: [
            { label: 'Profile', url: data.quotes[0].author.url || 'https://www.goodreads.com/author/show/3565.Oscar_Wilde', class: 'primary' },
            { label: 'Quotes', url: 'https://www.goodreads.com/author/quotes/3565.Oscar_Wilde', class: 'secondary' }
        ]
    },
    {
        id: 'robert-frost',
        title: 'Robert Frost',
        text: 'Author of The Road Not Taken',
        image: data.quotes[10].avatar.src,
        links: [
            { label: 'Profile', url: data.quotes[10].author.url || 'https://www.goodreads.com/author/show/7715.Robert_Frost', class: 'primary' },
            { label: 'Quotes', url: 'https://www.goodreads.com/author/quotes/7715.Robert_Frost', class: 'secondary' }
        ]
    },
    {
        id: 'maya-angelou',
        title: 'Maya Angelou',
        text: 'Author of I Know Why the Caged Bird Sings',
        image: data.quotes[14].avatar.src,
        links: [
            { label: 'Profile', url: data.quotes[14].author.url || 'https://www.goodreads.com/author/show/3503.Maya_Angelou', class: 'primary' },
            { label: 'Quotes', url: 'https://www.goodreads.com/author/quotes/3503.Maya_Angelou', class: 'secondary' }
        ]
    }
];

const scrollContainer = ref<HTMLElement | null>(null);

const scrollLeft = () => {
    if (scrollContainer.value) {
        scrollContainer.value.scrollBy({ left: -200, behavior: 'smooth' });
    }
};

const scrollRight = () => {
    if (scrollContainer.value) {
        scrollContainer.value.scrollBy({ left: 200, behavior: 'smooth' });
    }
};
</script>

<style scoped>
.container-responsive {
    @apply px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto;
}

.modern-card {
    @apply bg-white dark:bg-gray-800 rounded-lg sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-2;
    @apply overflow-hidden border border-gray-100 dark:border-gray-700;
    @apply transform hover:scale-[1.02] hover:-translate-y-1;
}

.modern-quote {
    @apply bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-2xl p-4 sm:p-6;
    @apply border border-gray-100 dark:border-gray-700;
    @apply hover:transform hover:scale-[1.02] transition-all duration-300;
    @apply hover:shadow-lg;
}

.modern-discovery {
    @apply bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700;
    @apply rounded-lg sm:rounded-2xl p-4 sm:p-6;
    @apply shadow-sm hover:shadow-lg transition-all duration-300;
    @apply transform hover:scale-[1.02] hover:-translate-y-1;
    @apply flex flex-col;
}

.modern-discovery :deep(.discovery-books) {
    @apply flex flex-wrap gap-2 sm:gap-4 justify-start items-center;
}

.modern-discovery :deep(.discovery-book) {
    @apply w-16 sm:w-20 h-24 sm:h-28 object-cover rounded-md sm:rounded-lg;
}

.modern-discovery :deep(.discovery-arrow) {
    @apply w-6 sm:w-8 h-6 sm:h-8 mx-2 sm:mx-4;
}

.modern-discovery :deep(.discovery-result) {
    @apply mt-4 flex items-start gap-4;
}

.modern-awards {
    @apply bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-gray-800 dark:to-gray-700;
    @apply rounded-lg sm:rounded-2xl p-4 sm:p-8;
    @apply shadow-sm hover:shadow-lg transition-all duration-300;
}

.modern-awards :deep(.awards-header) {
    @apply flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-6;
}

.modern-awards :deep(.awards-logo) {
    @apply w-24 sm:w-32 h-auto;
}

.modern-awards :deep(.awards-categories) {
    @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4;
}

.modern-author {
    @apply bg-white dark:bg-gray-800 rounded-lg sm:rounded-2xl p-4 sm:p-6;
    @apply shadow-sm hover:shadow-lg transition-all duration-300;
    @apply border border-gray-100 dark:border-gray-700;
    @apply transform hover:scale-[1.02] hover:-translate-y-1;
}

.modern-author :deep(.author-image) {
    @apply w-20 sm:w-24 h-20 sm:h-24 rounded-full mx-auto mb-4;
    @apply object-cover object-center;
}

.modern-author :deep(.author-links) {
    @apply flex flex-wrap gap-2 justify-center mt-4;
}

.modern-genre-list {
    @apply bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl;
    @apply hover:bg-white dark:hover:bg-gray-700 transition-all duration-300;
    @apply border border-gray-100 dark:border-gray-700;
    @apply p-2 sm:p-4;
}

.modern-genre-list :deep(.genre-link) {
    @apply text-sm sm:text-base py-1 px-2 sm:px-3 rounded-md;
    @apply hover:bg-gray-100 dark:hover:bg-gray-700;
    @apply transition-colors duration-200;
}

/* Hide scrollbar but keep functionality */
.scrollbar-hide {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari and Opera */
}

/* Add smooth scrolling to the container */
.scroll-smooth {
    scroll-behavior: smooth;
}
</style>