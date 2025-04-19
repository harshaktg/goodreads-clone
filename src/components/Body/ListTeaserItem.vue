<script setup lang="ts">
interface ListItem {
    title: {
        label: string;
        url: string;
    };
    metaText: string;
    bookImages: {
        alt: string;
        title: string;
        src: string;
        url: string;
    }[];
}

defineProps<{
    item: ListItem
}>();
</script>

<template>
    <div class="w-full min-h-[40px] m-0 py-[2px] border-b border-[#ebece7] border-r-0 border-t-0 border-l-0 flex">
        <div class="w-[60%]">
            <div class="flex-1 listTitle">
                <a :href="item.title.url" class="text-[14px] font-medium hyperlink hover:underline">{{ item.title.label
                }}</a>
            </div>
            <div class="w-full text-[#999999] text-[11px] leading-[14px]">
                {{ item.metaText }}
            </div>
        </div>
        <div class="flex space-x-1 flex-shrink-0 listImg ml-auto">
            <a v-for="(book, index) in item.bookImages" :key="index" :href="book.url" class="block h-auto md:h-auto">
                <img :alt="book.alt" :title="book.title" :src="book.src" class="w-full h-auto max-h-[40px]">
            </a>
        </div>
    </div>
</template>