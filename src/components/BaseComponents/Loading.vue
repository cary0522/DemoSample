<script setup>
const props = defineProps(['Loading'])
import logoImageUrl from "/images/ShoppingCart.gif";
</script>

<template>
    <!-- 讀取畫面 開始 -->
    <!-- 使用 Teleport 確保讀取畫面在最外層 -->
    <Teleport to="body">
        <div class="Loading" v-if="props.Loading">
            <img :src="logoImageUrl" loading="lazy" class="rounded-full max-w-[200px] mt-[200px]" alt="">
            <!-- <img :src="logoImageUrl" loading="lazy"
            class="rounded-full animate__animated animate__rotateIn animate__fast animate__infinite	max-w-[200px]"
            alt=""> -->
            <p class="w-full text-center text-defaultColor mb-[200px]">Loading ...</p>
        </div>
    </Teleport>
    <!-- 讀取畫面 結束 -->
</template>