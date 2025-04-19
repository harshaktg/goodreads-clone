<script setup lang="ts">
import { defineProps } from 'vue';
import { useLocalStorage } from '@vueuse/core';


interface AuthorData {
    title: string;
    text: string;
    links: {
        label: string;
        url: string;
        class: string;
    }[];
}

defineProps<{
    data: AuthorData
}>();
const isModernUX = useLocalStorage('modern-ux-enabled', false);
</script>

<template>
    <div id="authorsTeaserBox" class="pr-4 my-[24px]">
        <h2 class="text-[18px] font-semibold mb-[10px]">
            {{ data.title }}
        </h2>
        <p class="leading-[18px] my-[18px] text-[14px]">
            {{ data.text }}
        </p>
        <div class="text-center space-x-4 text-[#333333] text-[11px]" :class="isModernUX ? 'dark:text-amber-600' : ''">
            <a v-for="(link, index) in data.links" :key="index" :href="link.url" :class="link.class">
                {{ link.label }}
            </a>
        </div>
    </div>
</template>