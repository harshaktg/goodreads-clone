<script setup lang="ts">
import { ref } from 'vue';
import mainContentData from '../../data';

import SellingPointBox from './SellingPointBox.vue';
import DiscoveryItem from './DiscoveryItem.vue';
import GenreList from './GenreList.vue';
import QuoteItem from './QuoteItem.vue';
import ChoiceAwards from './ChoiceAwards.vue';
import EditorialBlogThumbnail from './EditorialBlogThumbnail.vue';
import ListTeaserItem from './ListTeaserItem.vue';
import AuthorsFeature from './AuthorsFeature.vue';
import AdsPlaceholder from './AdsPlaceholder.vue';

const data = ref(mainContentData);

const activeQuoteIndex = ref(17);

</script>

<template>
    <div class="pt-[15px] pb-[25px]">
        <div class="mx-auto text-left w-[970px] bg-white">
            <div class=" min-h-0 mt-0 ml-[5px] font-size-[12px] bg-white flex">
                <div class="pr-[10px] pl-[8px]">
                    <div class="flex">
                        <SellingPointBox v-for="(sp, index) in data.sellingPoints" :key="'selling-point-' + index"
                            :title="sp.title" :text="sp.text" :class="sp.class" />
                    </div>
                    <div id="discoveryBox" class="w-[625px] rounded-[10px] pt-[15px] pb-[20px] bg-[#f4f2e9]">
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
                                                placeholder="Title / Author / ISBN" spellcheck="false" class="p-[5px] rounded-[5px] bg-white w-[300px] border border-[#999] outline-none text-[13px] placeholder:text-[#767676]
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

                    <div class=" my-[24px] text-[14px]">
                        <h2 class="text-[18px] font-semibold mb-[10px]">
                            Quotes
                        </h2>
                        <div class="__quotesBox flex flex-wrap md:flex-nowrap">
                            <div id="quotes" class="w-full md:w-2/3 mb-4 md:mb-0">
                                <QuoteItem v-for="(quote, index) in data.quotes" :key="'quote-' + index" :quote="quote"
                                    :is-visible="index === activeQuoteIndex" />
                            </div>
                            <div class="__quotesBoxLinks w-full md:w-1/3 text-sm">
                                <a class="hover:underline block hyperlink" :href="data.quoteLinks[0].url">{{
                                    data.quoteLinks[0].label }}</a>
                                <template v-for="link in data.quoteLinks.slice(1)" :key="'quote-link-' + link.url">
                                    <a class="hover:underline block hyperlink" :href="link.url">{{ link.label }}</a>
                                </template>
                                <a class="hover:underline block hyperlink" href="/quotes">More quotes</a>
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
                            <a class="gr-hyperlink hyperlink hover:underline font-medium" href="/list">More book
                                lists</a>
                        </p>
                    </div>

                    <AuthorsFeature :data="data.authorsFeature" />
                </div>
            </div>
        </div>
    </div>
</template>