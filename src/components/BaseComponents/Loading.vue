<script setup>
import { ref } from 'vue';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
const props = defineProps(['Loading'])
import logoImageUrl from "/images/logo.jpg";
</script>

<template>
    <!-- 讀取畫面 開始 -->
    <div class="Loading mt-[200px]" v-if="props.Loading">
        <img :src="logoImageUrl" loading="lazy" 
            class="rounded-full animate__animated animate__rotateIn animate__fast animate__infinite	max-w-[200px]"
            alt="">
        <p class="w-full text-center text-defaultColor mb-[200px]">Loading ...</p>
    </div>
    <!-- 讀取畫面 結束 -->
</template>