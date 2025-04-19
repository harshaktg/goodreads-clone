<template>
    <div class="relative min-h-[370px] w-full bg-gradient-to-r from-amber-800 to-orange-700 font-sans overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute -inset-[10px] opacity-50">
                <div
                    class="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/30 rounded-full filter blur-3xl animate-float">
                </div>
                <div
                    class="absolute top-1/4 right-1/3 w-96 h-96 bg-orange-500/30 rounded-full filter blur-3xl animate-float-delayed">
                </div>
            </div>
        </div>

        <div class="relative">
            <div class="bg-white/5 backdrop-blur-sm border-b border-white/10">
                <div class="container-responsive">
                    <div class="h-16 flex items-center justify-between">
                        <div class="flex-shrink-0 animate-fade-in">
                            <a href="/" class="block">
                                <img alt="Goodreads: Book reviews, recommendations, and discussion"
                                    src="https://s.gr-assets.com/assets/home/header_logo-8d96d7078a3d63f9f31d92282fd67cf4.png"
                                    class="invert w-auto h-8 hover:opacity-80 transition-opacity">
                            </a>
                        </div>
                        <div class="flex items-center space-x-4 animate-fade-in">
                            <DarkModeToggle />
                            <UXModeToggle />
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-responsive py-12">
                <div class="flex flex-col md:flex-row items-center justify-between relative z-10">
                    <div class="md:w-1/2 text-white space-y-6 animate-slide-up">
                        <h1 class="text-4xl md:text-5xl font-bold leading-tight">
                            Your Next Great Read Awaits
                        </h1>
                        <p class="text-lg md:text-xl opacity-90 leading-relaxed">
                            Join millions of readers discovering their next favorite book, sharing thoughts, and
                            connecting with a
                            vibrant community of book lovers.
                        </p>
                    </div>
                    <div class="md:w-1/2 flex justify-center mt-8 md:mt-0 animate-slide-up"
                        style="animation-delay: 200ms;">
                        <div class="relative w-full max-w-md">
                            <div
                                class="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl filter blur">
                            </div>
                            <AuthBox
                                class="relative bg-white/10 backdrop-blur rounded-2xl border border-white/20 text-white shadow-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import AuthBox from './AuthBox.vue';
import DarkModeToggle from './DarkModeToggle.vue';
import UXModeToggle from './UXModeToggle.vue';
</script>

<style scoped>
.btn {
    @apply px-6 py-3 rounded-xl font-medium transition-all duration-300;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0) scale(1);
    }

    50% {
        transform: translateY(-20px) scale(1.05);
    }
}

@keyframes float-delayed {

    0%,
    100% {
        transform: translateY(0) scale(1);
    }

    50% {
        transform: translateY(20px) scale(1.05);
    }
}

.animate-float {
    animation: float 8s ease-in-out infinite;
}

.animate-float-delayed {
    animation: float-delayed 8s ease-in-out infinite;
    animation-delay: -4s;
}

.container-responsive {
    @apply px-4 mx-auto max-w-7xl sm:px-6 lg:px-8;
}
</style>