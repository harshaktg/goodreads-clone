<script setup lang="ts">
import { ref } from 'vue';
import mainFooterData from '../../footerData';

import FooterLinkGroup from './FooterLinkGroup.vue';
import SocialLinks from './SocialLinks.vue';
import AppBadges from './AppBadges.vue';

const footerData = ref(mainFooterData);

const companyLinks = footerData.value.linkGroups.find(group => group.heading === 'Company');
const workLinks = footerData.value.linkGroups.find(group => group.heading === 'Work with us');
const connectLinks = footerData.value.linkGroups.find(group => group.heading === 'Connect');

</script>

<template>
    <footer class="bg-[#f9f8f4] dark:bg-dark-bg-secondary py-[32px] transition-colors duration-200">
        <div class="max-w-[1220px] mx-auto px-[15px]">
            <div class="flex flex-wrap -mx-[15px] box-border">

                <div class="relative w-full min-h-[1px] px-[15px] box-border flex-grow-0 flex-shrink-0 max-w-[66%]">
                    <div class="flex flex-wrap -mx-[15px] box-border">

                        <div
                            class="relative w-full min-h-[1px] px-[15px] box-border flex-grow-0 flex-shrink-0 max-w-[25%]">
                            <FooterLinkGroup v-if="companyLinks" :heading="companyLinks.heading"
                                :links="companyLinks.links" />
                        </div>

                        <div
                            class="relative w-full min-h-[1px] px-[15px] box-border flex-grow-0 flex-shrink-0 max-w-[33%]">
                            <FooterLinkGroup v-if="workLinks" :heading="workLinks.heading" :links="workLinks.links" />
                        </div>

                        <div
                            class="relative w-full min-h-[1px] px-[15px] box-border flex-grow-0 flex-shrink-0 max-w-[41%]">
                            <h3 v-if="connectLinks"
                                class="text-[16px] font-bold leading-[1.15] uppercase text-[#767676] dark:text-dark-text-secondary mb-[8px]">
                                {{ connectLinks.heading }}
                            </h3>
                            <SocialLinks v-if="connectLinks" :social-links="footerData.socialLinks" />
                        </div>

                    </div>
                </div>

                <div class="relative w-full min-h-[1px] px-[15px] box-border flex-grow-0 flex-shrink-0 max-w-[33%]">
                    <div class="flex flex-col h-full">
                        <div class="mb-[14px]">
                            <AppBadges :app-badges="footerData.appBadges" />
                        </div>

                        <ul class="mb-[32px] list-none p-0 m-0 text-[14px]">
                            <li v-for="(item, index) in footerData.metaItems" :key="index" class="leading-[1.5]">
                                <template v-if="item.url">
                                    <a :href="item.url"
                                        class="text-[#382110] dark:text-dark-text-primary hover:underline">{{
                                            item.label }}</a>
                                </template>
                                <template v-else>
                                    <span class="dark:text-dark-text-secondary">{{ item.text }}</span>
                                </template>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </footer>
</template>
