<script setup>
import LinkJson from '@/assets/Link.json';
</script>
<template>
    <div class="w-full flex flex-wrap">
        <div v-for="link in LinkJson" class="w-1/2">
            <a :href="link.path" class="flex items-center m-4" target="_blank" rel="noopener noreferrer">
                <img :src="link.image" alt="" class="w-[50px] h-[50px] rounded-full">
                <p class="text-defaultColor font-black text-xl mx-2 hover:text-[#F28729] hover:text-2xl transition-all">
                    {{ link.name }}
                </p>
            </a>
        </div>
    </div>
</template>