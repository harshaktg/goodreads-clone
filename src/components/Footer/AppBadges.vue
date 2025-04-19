<script setup lang="ts">
import { defineProps } from 'vue';

interface AppBadge {
    alt: string;
    src: string;
    url: string;
    srcset?: string;
}

defineProps<{
    appBadges: AppBadge[];
}>();
</script>

<template>
    <div class="flex flex-col space-y-4">
        <div class="flex space-x-4">
            <a v-for="(badge, index) in appBadges" :key="index" :href="badge.url" class="inline-block h-10">
                <img :alt="badge.alt" :src="badge.src" :srcset="badge.srcset" class="h-full w-auto">
            </a>
        </div>
    </div>
</template>
