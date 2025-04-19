<template>
    <div id="newAccountBox"
        class="w-[250px] mt-[14px] mr-[6px] mb-0 ml-0 font-serif sticky p-[24px] bg-white dark:bg-dark-bg-secondary border border-[#D8D8D8] dark:border-dark-border rounded-[10px]">
        <h2 class="mb-[10px] text-[18px] pt-[4px] pb-[14px] text-center clear-both margin-[20px_0_10px_0] text-[#000] dark:text-dark-text-primary font-semibold"
            :class="isModernUX ? 'text-white' : ''">
            Discover & read more
        </h2>

        <div>
            <div id="signInUsingContent">
                <a href="https://www.goodreads.com/ap/signin?identityProvider=LoginWithAmazon&language=en_US&openid.assoc_handle=amzn_goodreads_web_lwa&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.goodreads.com%2Fap-handler%2Fsign-in%3FIDP%3DLoginWithAmazon&relyingParty=GOODREADS&siteState=eyJyZXR1cm5fdXJsIjoiaHR0cHM6Ly93d3cuZ29vcmVhZHMuY29tLzifQ%3D%3D"
                    class="rounded-[3px] border cursor-pointer no-underline py-[8px] px-[12px] text-[14px] font-sans leading-loose bg-[#f5d47a] hover:bg-[#F8C15D] text-[#333333] border-[#B38B22] font-normal w-full text-center box-border flex items-center justify-center mb-[14px]">
                    <i
                        class="w-[21px] h-[21px] mr-2 -ml-2 bg-[url('https://s.gr-assets.com/assets/gr/icons/icon-amazon-a.svg')] bg-no-repeat bg-[length:100%_100%]" />
                    Continue with Amazon
                </a>

                <a href="https://www.goodreads.com/ap/signin?identityProvider=APPLE&language=en_US&openid.assoc_handle=amzn_goodreads_web_apple&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.goodreads.com%2Fap-handler%2Fsign-in%3FIDP%3DAPPLE&relyingParty=GOODREADS&siteState=eyJyZXR1cm5fdXJsIjoiaHR0cHM6Ly93d3cuZ29vcmVhZHMuY29tLzifQ%3D%3D"
                    class="rounded-[3px] border cursor-pointer no-underline py-[8px] px-[12px] text-[14px] font-sans leading-loose text-[#333333] dark:text-dark-text-primary bg-[#fff] dark:bg-[#000] dark:hover:bg-[#111] border-[#000] dark:border-dark-border w-full text-center box-border flex items-center justify-center mb-[14px]">
                    <i
                        class="w-[31px] h-[31px] -ml-2 bg-[url('https://s.gr-assets.com/assets/gr/share_module/share_apple_circle.svg')] bg-no-repeat bg-[length:100%_100%] dark:invert" />
                    Continue with Apple
                </a>

                <a href="https://www.goodreads.com/ap/register?language=en_US&openid.assoc_handle=amzn_goodreads_web_na&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.goodreads.com%2Fap-handler%2Fregister&siteState=eyJyZXR1cm5fdXJsIjoiaHR0cHM6Ly93d3cu goodreads.com%2FifQ%3D%3D"
                    class="rounded-[3px] border cursor-pointer no-underline py-[8px] px-[12px] text-[14px] font-sans leading-loose text-[#fff] bg-[#382110] hover:bg-[#58371F] dark:bg-dark-button dark:hover:bg-dark-button-hover dark:text-dark-text-primary border-[#382110] dark:border-dark-border w-full text-center box-border font-bold flex items-center justify-center mb-[16px]">
                    Sign up with email
                </a>
            </div>
        </div>

        <div id="legal"
            class="text-[12px] text-center font-sans text-[#999999] dark:text-dark-text-secondary pr-[24px] font-medium">
            <div class="legalMessage" :class="isModernUX ? 'text-white' : ''">
                By creating an account, you agree to the Goodreads
                <a target="_blank" class="gr-hyperlink text-[#00635d] dark:text-dark-link no-underline"
                    :class="isModernUX ? 'text-amber-200' : ''" rel="noopener noreferrer"
                    href="https://www.goodreads.com/about/terms">Terms of Service</a>
                and
                <a target="_blank" class="gr-hyperlink text-[#00635d] dark:text-dark-link no-underline"
                    :class="isModernUX ? 'text-amber-200' : ''" rel="noopener noreferrer"
                    href="https://www.goodreads.com/about/privacy">Privacy Policy</a>.
            </div>
        </div>

        <div id="signIn" class="text-[16px] text-center font-sans pt-[24px]">
            <div class="border-t border-[#D8D8D8] dark:border-dark-border">
                <div class="mt-6">
                    Already a member?
                    <a class="gr-hyperlink text-[#00635d] dark:text-dark-link no-underline"
                        :class="isModernUX ? 'text-amber-200' : ''" href="https://www.goodreads.com/user/sign_in">Sign
                        In</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'

const isModernUX = useLocalStorage('modern-ux-enabled', false)
</script>
