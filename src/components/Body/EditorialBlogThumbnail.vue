<script setup lang="ts">
import { defineProps } from 'vue';

interface BlogData {
    header: string;
    blogPostUrl: string;
    title: string;
    imageUrl: string;
    imageAlt: string;
    likesCountText: string;
    commentsCountText?: string | null;
}

const { data } = defineProps<{
    data: BlogData
}>();
</script>

<template>
    <section class="rounded shadow-sm">
        <article>
            <h3 class="text-[16px] font-medium text-[#382110] dark:text-dark-text-primary mb-[4px]">
                {{ data.header }}
            </h3>
            <a :href="data.blogPostUrl"
                class="text-[12px] font-serif font-[800] hyperlink hover:underline block my-[16px]">{{
                    data.title }}</a>
            <a :href="data.blogPostUrl" class="block mb-2">
                <img class="w-full h-auto object-cover" :src="data.imageUrl" :alt="data.imageAlt">
            </a>
            <div class="text-[12px] text-gray-500 my-[8px]">
                <span class="mr-2">{{ data.likesCountText }}</span>
                <span v-if="data.commentsCountText">{{ data.commentsCountText }}</span>
            </div>
        </article>
    </section>
</template>
