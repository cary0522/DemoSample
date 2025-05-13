<script setup>
import LottieScr from '/images/UpArrow.png'
function ToTheTop() {
    const html = document.getElementsByTagName('html')
    html[0].scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
    <div class="text-center z-50 fixed right-0 bottom-2 hover:translate-y-[-15%] cursor-pointer transition-all animate__animated animate__fadeIn"
        style="width: 60px;" @click="ToTheTop">
        <!-- <p>Top</p> -->
        <img loading="lazy" :src="LottieScr" alt="To the Top">
    </div>
</template>