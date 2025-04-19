<script setup lang="ts">
interface AwardData {
    title: string;
    logo: {
        url: string;
        alt: string;
        title: string;
        src: string;
    };
    categories: {
        label: string;
        url: string;
    }[];
}

defineProps<{
    awardsData: AwardData
}>();
</script>

<template>
    <div id="choiceAwardCategories" class="my-[24px] w-[625px]">
        <h2 class="text-[18px] font-medium mb-[10px]">
            {{ awardsData.title }}
        </h2>
        <div class="flex">
            <div class="text-center mb-4">
                <a :href="awardsData.logo.url" class="inline-block">
                    <img id="choiceLogo" :alt="awardsData.logo.alt" :title="awardsData.logo.title"
                        :src="awardsData.logo.src" class="pt-[10px] pr-[20px]">
                </a>
            </div>
            <div class="text-[#333] text-[14px] leading-[18px]">
                <ul class="list-none p-0 m-0 columns-2">
                    <li v-for="(category, index) in awardsData.categories" :key="index" class="mb-3">
                        <a class="hyperlink hover:underline" :href="category.url">{{ category.label }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>