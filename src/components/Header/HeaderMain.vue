<template>
    <div id="signedOutHome"
        class="min-w-[970px] h-[370px] p-0 border-0 bg-[#DEE7E9] bg-[url('https://s.gr-assets.com/assets/home/homepage_promos/reading_challenge_2025/HomepageMasthead_Desktop.png')] bg-[center_75px] bg-no-repeat bg-[auto_295px] font-sans">
        <div class="h-[65px] pt-[10px] pb-[10px] border-0 bg-center bg-repeat-x bg-[#f4f2e9]">
            <Container>
                <div id="navBar" class="h-[65px] pt-[10px]">
                    <div id="logo">
                        <a href="/">
                            <img alt="Goodreads: Book reviews, recommendations, and discussion"
                                src="https://s.gr-assets.com/assets/home/header_logo-8d96d7078a3d63f9f31d92282fd67cf4.png" />
                        </a>
                    </div>
                </div>
                <div class="absolute h-[370px] z-10 right-0 top-0">
                    <AuthBox />
                </div>

                <a href="https://www.goodreads.com/readingchallenges" class="block h-[295px] relative w-[688px]">
                    <div></div>
                </a>
            </Container>
        </div>
    </div>
</template>

<script setup lang="ts">
import Container from './Container.vue';
import AuthBox from './AuthBox.vue';
</script>

<style scoped></style>
