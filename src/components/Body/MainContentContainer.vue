<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import mainContentData from '../../data';
import { popularBooks } from '../../constants/books';

import SellingPointBox from './SellingPointBox.vue';
import DiscoveryItem from './DiscoveryItem.vue';
import GenreList from './GenreList.vue';
import QuoteItem from './QuoteItem.vue';
import ChoiceAwards from './ChoiceAwards.vue';
import EditorialBlogThumbnail from './EditorialBlogThumbnail.vue';
import ListTeaserItem from './ListTeaserItem.vue';
import AuthorsFeature from './AuthorsFeature.vue';
import AdsPlaceholder from './AdsPlaceholder.vue';
import MyShelf from './MyShelf.vue'
import BookCard from './BookCard.vue'
import { useShelf } from '../../composables/useShelf'


const { myShelf } = useShelf()
const shelfCount = computed(() => myShelf.value?.length ?? 0)
const data = ref(mainContentData);

function getRandomQuoteIndex() {
    const quotes = data.value.quotes;
    return quotes && quotes.length ? Math.floor(Math.random() * quotes.length) : 0;
}

const activeQuoteIndex = ref(getRandomQuoteIndex());

let quoteInterval: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
    quoteInterval = setInterval(() => {
        let newIndex = getRandomQuoteIndex();
        while (data.value.quotes.length > 1 && newIndex === activeQuoteIndex.value) {
            newIndex = getRandomQuoteIndex();
        }
        activeQuoteIndex.value = newIndex;
    }, 10000);
});

onUnmounted(() => {
    if (quoteInterval) clearInterval(quoteInterval);
});

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

<template>
    <div class="pt-[15px] pb-[25px]">
        <div class="mx-auto text-left w-[970px]">
            <div class=" min-h-0 mt-0 ml-[5px] font-size-[12px] flex">
                <div class="pr-[10px] pl-[8px]">
                    <div class="flex">
                        <SellingPointBox v-for="(sp, index) in data.sellingPoints" :key="'selling-point-' + index"
                            :title="sp.title" :text="sp.text" :class="sp.class" />
                    </div>
                    <div id="discoveryBox"
                        class="w-[625px] rounded-[10px] pt-[15px] pb-[20px] bg-[#f4f2e9] dark:bg-dark-bg-secondary">
                        <h2 class="text-lg font-semibold mb-[15px] ml-[15px]">
                            What will <em class="italic">you</em>
                            discover?
                        </h2>
                        <DiscoveryItem v-for="(item, index) in data.discoveryItems" :key="'discovery-item-' + index"
                            :item="item" :class="'sourceBooks' + item.sourceBooks.length" />
                    </div>

                    <div id="browseBox" class="my-[25px]">
                        <h2 class="text-[18px] font-medium mb-[10px]">
                            Search and browse books
                        </h2>

                        <div id="searchBox" itemscope itemtype="https://schema.org/WebSite" class="my-3">
                            <meta itemprop="url" content="https://goodreads.com/">
                            <div id="sitesearch" itemtype="https://schema.org/SearchAction" itemprop="potentialAction"
                                itemscope class="inline-block zoom-1 relative float-none margin-0">
                                <div itemprop="target" itemscope itemtype="https://schema.org/EntryPoint">
                                    <div itemprop="urlTemplate"
                                        content="https://www.goodreads.com/search?q={search_term_string}" />
                                </div>
                                <div itemprop="query-input" itemscope
                                    itemtype="https://schema.org/PropertyValueSpecification">
                                    <div itemprop="valueRequired" content="http://schema.org/True" />
                                    <div itemprop="valueName" content="search_term_string" />
                                    <form id="headerSearchForm" action="/search" accept-charset="UTF-8" method="get"
                                        class="">
                                        <input name="utf8" type="hidden" value="✓">
                                        <div class="auto_complete_field_wrapper flex-1">
                                            <input id="sitesearch_field" type="text" name="query"
                                                placeholder="Title / Author / ISBN" spellcheck="false" class="p-[5px] rounded-[5px] bg-white dark:bg-dark-bg-secondary w-[300px] border border-[#999] outline-none text-[13px] placeholder:text-[#767676]
                                                focus:shadow-[0_0_4px_rgba(185,173,153,0.5)] h-[16px]">
                                            <div id="sitesearch_autocomplete" />
                                            <img id="sitesearch_field_loading" style="display: none"
                                                class="loading w-6 h-6"
                                                src="https://s.gr-assets.com/assets/loading-trans-ced157046184c3bc7c180ffbfc6825a4.gif"
                                                alt="Loading trans">
                                        </div>
                                        <button type="submit" class="text-[14px] leading-[1.5] flex"
                                            style="border: none; background: none; cursor: pointer;">
                                            <img width="16" title="Title / Author / ISBN" alt="search"
                                                src="https://s.gr-assets.com/assets/layout/magnifying_glass-a2d7514d50bcee1a0061f1ece7821750.png"
                                                class="absolute top-[6px] right-[5px]">
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <GenreList :genres="data.genres" :columns="4" />
                    </div>

                    <div class="md:w-[625px] my-[24px] text-[14px]">
                        <h2 class="text-[18px] font-semibold mb-[10px]">
                            Quotes
                        </h2>
                        <div class="flex flex-wrap md:flex-nowrap">
                            <div id="quotes" class="w-full md:w-2/3 mb-4 md:mb-0">
                                <transition name="fade" mode="out-in">
                                    <QuoteItem v-if="data.quotes.length" :key="activeQuoteIndex"
                                        :quote="data.quotes[activeQuoteIndex]" />
                                </transition>
                            </div>
                            <div class="w-full md:w-1/3 text-sm">
                                <a class="hover:underline block hyperlink" :href="data.quoteLinks[0].url">{{
                                    data.quoteLinks[0].label }}</a>
                                <template v-for="link in data.quoteLinks.slice(1)" :key="'quote-link-' + link.url">
                                    <a class="hover:underline block hyperlink" :href="link.url">{{ link.label }}</a>
                                </template>
                                <a class="hover:underline block hyperlink" href="https://www.goodreads.com/quotes">More
                                    quotes</a>
                            </div>
                        </div>
                    </div>

                    <ChoiceAwards :awards-data="data.awards" />
                </div>

                <div class="rightContainer w-[300px] md:w-2/5 md:pl-[18px] md:pt-[125px]">
                    <AdsPlaceholder class="pb-[32px]" />
                    <div class="u-paddingBottomMedium pb-[16px]">
                        <EditorialBlogThumbnail :data="data.editorialBlog" />
                    </div>

                    <div id="listsTeaserBox" class=" my-[24px] text-[14px]">
                        <h2 class=" font-semibold mb-[10px] text-[18px]">
                            Love lists?
                        </h2>
                        <ListTeaserItem v-for="(item, index) in data.listTeasers" :key="'list-teaser-' + index"
                            :item="item" />
                        <p class="my-[18px]">
                            <a class="gr-hyperlink hyperlink hover:underline font-medium"
                                href="https://www.goodreads.com/list">More
                                book
                                lists</a>
                        </p>
                    </div>

                    <AuthorsFeature :data="data.authorsFeature" />

                    <div class="content-section">
                        <h2 class="section-title text-[18px] font-medium mb-[10px]">My Shelf ({{ shelfCount }})</h2>
                        <MyShelf isCompact />
                    </div>

                    <div class="content-section">
                        <h2 class="section-title text-[18px] font-medium mb-[10px]">Popular Books</h2>
                        <div class="block sm:hidden">
                            <div class="relative">
                                <div class="flex gap-4 overflow-x-auto pb-4 px-1 -mx-1 scrollbar-hide scroll-smooth">
                                    <BookCard v-for="book in popularBooks" :key="book.id" :book="book" isCompact />
                                </div>
                                <div
                                    class="absolute left-0 top-0 bottom-4 w-4 bg-gradient-to-r from-[#f4f2e9] dark:from-dark-bg-secondary to-transparent pointer-events-none">
                                </div>
                                <div
                                    class="absolute right-0 top-0 bottom-4 w-4 bg-gradient-to-l from-[#f4f2e9] dark:from-dark-bg-secondary to-transparent pointer-events-none">
                                </div>
                            </div>
                        </div>
                        <!-- Desktop View: Horizontal scroll -->
                        <div class="hidden sm:block">
                            <div class="relative group">
                                <div class="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
                                    ref="scrollContainer">
                                    <BookCard v-for="book in popularBooks" :key="book.id" :book="book" isCompact />
                                </div>
                                <div
                                    class="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-[#f4f2e9] dark:from-dark-bg-secondary to-transparent pointer-events-none">
                                </div>
                                <div
                                    class="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-[#f4f2e9] dark:from-dark-bg-secondary to-transparent pointer-events-none">
                                </div>

                                <!-- Scroll buttons -->
                                <button @click="scrollLeft"
                                    class="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white dark:hover:bg-gray-700">
                                    <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button @click="scrollRight"
                                    class="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white dark:hover:bg-gray-700">
                                    <svg class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none"
                                        stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.content-section {
    @apply max-w-[970px] mx-auto px-4 sm:px-0 my-8;
}

.section-title {
    @apply text-[#382110] dark:text-gray-100;
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