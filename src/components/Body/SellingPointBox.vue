<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    title: string;
    text: string;
    class: string;
}>();

</script>

<template>
    <div :class="props.class">
        <h2 class="mb-[10px] text-[18px] font-semibold">
            {{ props.title }}
        </h2>
        <p class="text-[#333333] dark:text-dark-text-primary text-[14px] my-[18px]">
            {{ props.text }}
        </p>
    </div>
</template>