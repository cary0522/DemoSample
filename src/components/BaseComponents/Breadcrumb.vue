<script setup>
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

const props = defineProps(["BreadcrumbList"]);
</script>
<template>
  <div
    class="text-sm md:text-xl font-bold text-defaultColor p-1 md:p-4 my-4 mx-0 md:m-4 transition-all hover:bg-gradient-to-r from-gray-200/40 to-white/40 border-l-2 border-defaultColor hover:border-white flex">
    <ul class="flex flex-wrap">
      <template v-for="(item, index) in props.BreadcrumbList">
        <li class="hover:underline underline-offset-8">
          {{ t(`menuList.${item}`) }}
        </li>
        <p v-if="index < props.BreadcrumbList.length - 1">／</p>
      </template>
    </ul>
  </div>
</template>
<style></style>
