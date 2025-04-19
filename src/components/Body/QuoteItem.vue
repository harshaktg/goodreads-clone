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
}>();
</script>

<template>
    <div class="flex items-start space-x-4">
        <a v-if="quote.avatar" :href="quote.avatar.url"
            class="flex-shrink-0 w-[56px] h-[56px] rounded-full overflow-hidden">
            <img :alt="quote.avatar.alt" :src="quote.avatar.src" class="w-full h-full object-cover avatar">
        </a>
        <div class="flex-1 quoteText text-gray-800 dark:text-dark-text-primary pr-[5px] pb-[10px]">
            <span class="font-serif text-[14px] leading-[24px] font-semibold">{{ quote.text }}</span>
            <br>
            ―
            <span class="font-bold text-[#333] dark:text-dark-text-secondary">
                <a v-if="quote.author.url" :href="quote.author.url" class="">{{ quote.author.name }}</a>
                <template v-else>{{ quote.author.name }}</template>
            </span>
            <span v-if="quote.work" class="font-bold text-[#333] dark:text-dark-text-secondary">
                , <a class="" :href="quote.work.url">{{ quote.work.title }}</a>
            </span>
        </div>
    </div>
</template>
<style scoped>
.avatar:hover {
    filter: brightness(80%);
}
</style>