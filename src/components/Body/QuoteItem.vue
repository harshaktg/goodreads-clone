<script setup lang="ts">
import { defineProps } from 'vue';

interface Quote {
    avatar: {
        url: string;
        alt: string;
        src: string;
    };
    text: string;
    author: {
        name: string;
        url: string | null;
    };
    work: {
        title: string;
        url: string;
    } | null;
}

defineProps<{
    quote: Quote;
    isVisible: boolean;
}>();
</script>

<template>
    <div v-show="isVisible" class="flex items-start space-x-4 bg-white">
        <a v-if="quote.avatar" :href="quote.avatar.url"
            class="flex-shrink-0 w-[56px] h-[56px] rounded-full overflow-hidden">
            <img :alt="quote.avatar.alt" :src="quote.avatar.src" class="w-full h-full object-cover">
        </a>
        <div class="flex-1 quoteText text-gray-800 pr-[5px] pb-[10px]">
            <span class="font-serif text-[14px] leading-[24px] font-semibold">{{ quote.text }}</span>
            <br>
            ―
            <span class="font-bold text-[#333]">
                <a v-if="quote.author.url" :href="quote.author.url" class="">{{ quote.author.name }}</a>
                <template v-else>{{ quote.author.name }}</template>
            </span>
            <span v-if="quote.work" class="font-bold text-[#333]">
                , <a class="" :href="quote.work.url">{{ quote.work.title }}</a>
            </span>
        </div>
    </div>
</template>