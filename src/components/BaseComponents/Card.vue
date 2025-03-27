<script setup>
const props = defineProps(["title", "content", "img", "link"]);
</script>
<template>
  <div class="border p-4 m-4 cursor-pointer">
    <p>{{ props.title }}</p>
    <img :src="props.img" alt="" />
    <p>{{ props.content }}</p>
  </div>
</template>
