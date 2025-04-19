<script setup lang="ts">
import { defineProps, computed } from 'vue';

interface Genre {
    label: string;
    url: string;
}

const props = withDefaults(defineProps<{
    genres: Genre[]
    columns: number
}>(), {
    columns: 4
});

const genreColumns = computed(() => {
    const cols: Genre[][] = [];
    const itemsPerColumn = Math.ceil(props.genres.length / props.columns);
    for (let i = 0; i < props.columns; i++) {
        cols.push(props.genres.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn));
    }
    return cols;
});
</script>

<template>
    <div class="flex flex-wrap text-gray-700 leading-relaxed">
        <div v-for="(column, colIndex) in genreColumns" :key="colIndex" class="w-1/2 md:w-1/4">
            <template v-for="genre in column" :key="genre.url">
                <a class="hover:underline block hyperlink text-[14px] leading-[1.5]" :href="genre.url">{{ genre.label
                    }}</a>
            </template>
            <a v-if="colIndex === columns - 1" class="hover:underline block hyperlink text-[14px] leading-[1.5]"
                href="/genres">More
                genres</a>
        </div>
    </div>
</template>