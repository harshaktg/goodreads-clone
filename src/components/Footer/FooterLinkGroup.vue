<script setup lang="ts">
import { defineProps } from 'vue';

interface Link {
  label: string;
  url: string;
}

defineProps<{
  heading: string
  links: Link[]
}>();


</script>

<template>
  <div>
    <h3 class="text-[16px] font-bold leading-[1.15] uppercase text-[#767676] mb-[8px]">
      {{ heading }}
    </h3>
    <ul class="list-none p-0 m-0 leading-[18px] mb-[32px]">
      <li v-for="(link, index) in links" :key="index" class="text-[14px] leading-[1.5]">
        <a :href="link.url" class="hover:underline text-[#382110]">
          {{ link.label }}
        </a>
      </li>
    </ul>
  </div>
</template>