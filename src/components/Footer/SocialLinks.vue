<script setup lang="ts">
import { defineProps } from 'vue';

interface SocialLink {
    alt: string;
    src: string;
    url: string;
}

const props = defineProps<{
    socialLinks: SocialLink[];
}>();

const socialLinkRows: SocialLink[][] = [[], []];
props.socialLinks.forEach((link, index) => {
    socialLinkRows[index % 2].push(link);
});
</script>

<template>
    <div v-for="(row, index) in socialLinkRows" :key="index" class="inline-block mb-2 ">
        <a v-for="(link, linkIndex) in row" :key="linkIndex" :href="link.url" class="inline-block mb-2 mr-2"
            rel="noopener noreferrer" target="_blank">
            <img :alt="link.alt" :src="link.src" class="w-full h-full object-contain">
        </a>
    </div>
</template>
