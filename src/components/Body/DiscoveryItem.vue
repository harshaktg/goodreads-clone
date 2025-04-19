<script setup lang="ts">
import { defineProps } from 'vue';
import { useLocalStorage } from '@vueuse/core'

interface ItemData {
    actionText: string;
    sourceBooks: {
        url: string;
        alt: string;
        title: string;
        src: string;
    }[];
    resultBook: {
        url: string;
        alt: string;
        title: string;
        src: string;
        width: number;
        descriptors: string;
        actionText: string;
    };
    arrowImgSrc: string;
}

const isModernUX = useLocalStorage('modern-ux-enabled', false)
const props = defineProps<{
    item: ItemData
}>();
</script>

<template>
    <div
        class="mt-5 h-[170px] bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAoCAYAAAA%2FtpB3AAAAOElEQVQIW2M6uG%2FlfyZGRkYGdIIBCKAsRgYMWXSCAU5gUYzVAAaELA5tCHUQAxjQZIFir16%2FhXAByw8GmnhQCm8AAAAASUVORK5CYII%3D')] dark:bg-none bg-repeat-x bg-bottom flex">
        <div class="ml-[15px] overflow-hidden md:overflow-auto">
            <p class="mt-0 mb-[18px] text-[12px]">
                {{ props.item.actionText }}
            </p>
            <div class="flex items-center overflow-x-auto md:overflow-x-hidden">
                <a v-for="(book, index) in props.item.sourceBooks" :key="index" :href="book.url"
                    class="block w-20 h-[120px] mr-[12px] flex-shrink-0">
                    <img :alt="book.alt" :title="book.title" :src="book.src" class="w-full h-full object-cover">
                </a>
            </div>
        </div>

        <template v-if="!isModernUX">
            <div class="flex-shrink-0 mr-[10px] mt-[80px]">
                <img :alt="'→'" :src="props.item.arrowImgSrc" class="w-[21px] h-[28px]">
            </div>

            <div class="flex-1 mr-[10px]">
                <p class="mt-0 mb-[18px] text-[12px]">
                    {{ props.item.resultBook.actionText }}
                </p>
                <div class="flex">
                    <a :href="props.item.resultBook.url"
                        class="inline-block mr-[10px] flex-shrink-0 flex-grow-0 w-[80px]">
                        <img :alt="props.item.resultBook.alt" :title="props.item.resultBook.title"
                            :width="props.item.resultBook.width" :src="props.item.resultBook.src"
                            class="reflected w-full h-auto object-cover block border-0">
                    </a>
                    <p class="text-[12px] text-[#000] dark:text-dark-text-primary font-semibold mb-1">
                        {{ props.item.resultBook.descriptors }}
                    </p>
                </div>
            </div>
        </template>
    </div>
</template>