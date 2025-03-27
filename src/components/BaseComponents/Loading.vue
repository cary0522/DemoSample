<script setup>
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
const props = defineProps(['Loading'])
</script>

<template>
    <!-- 讀取畫面 開始 -->
    <div class="Loading mt-[80px] h-full" v-if="props.Loading">
        <DotLottieVue autoplay loop src="/images/opener-loading.json" class="w-3/5 mx-auto">
        </DotLottieVue>
        <div class="w-full text-center text-[#3e6ea8] mb-[40px]">Loading ...</div>
    </div>
    <!-- 讀取畫面 結束 -->
</template>