<script setup>
const props = defineProps(["title", "content", "img", "link"]);
</script>
<template>
  <div class="p-4 m-4 cursor-pointer">
    <p class="text-base font-black text-center">{{ props.title }}</p>
    <img loading="lazy" :src="props.img" alt="" class="max-w-[100px]" />
    <p>{{ props.content }}</p>
  </div>
</template>
