<script setup>
import Link from './Link.vue';

import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

const props = defineProps(["MenuList"]);
</script>
<template>
  <div id="footer"
    class="hidden lg:flex flex-wrap text-center bg-defaultBg min-h-[200px] h-auto sticky bottom-0 mx-0 pb-4">
    <div class="flex flex-nowrap w-full 2xl:w-[1512px] justify-start sm:ms-4 2xl:mx-auto items-start">
      <div v-for="item in props.MenuList" class="my-2 mx-auto w-auto max-w-[200px] flex flex-wrap text-defaultColor">
        <p
          class="text-base 2xl:text-xl font-black text-center w-full whitespace-pre border-b-4 border-black pb-2 mx-2 cursor-pointer hover:text-[#F28729]">
          <Link :path="item.path || ''">{{ t(`menuList.${item.groupName}`) }}</Link>
        </p>
        <ul class="text-sm 2xl:text-base ms-2 w-9/10 my-2">
          <li v-for="items in item.items" class="text-start">
            <Link :path="items.path || ''" class="hover:text-[#F28729] hover:font-black">{{
              t(`menuList.${items.name}`)
            }}</Link>
          </li>
        </ul>
      </div>
    </div>
    <div class="m-2 w-full">
      <div class="flex flex-wrap text-center w-full justify-center">
        <p class="mx-2">{{ t('桃園市原住民族教育資源中心') }}</p>
        <p class="mx-2">{{ t('地址') }}：{{ t('桃園市大溪區介壽路214號') }}</p>
        <p class="mx-2">{{ t('電話') }}：03-3892762 {{ t('傳真') }}：03-3906990</p>
      </div>
      <p>{{ t('瀏覽器建議') }}</p>
      <div class="mx-auto w-full flex justify-center items-center">
        <p>瀏覽人次：</p>
        <a href="https://cn.web-counter.net" title="計數器">
          <img src="https://www.web-counter.net/count_20091204.php?c=0VaY2nf7Wq2" alt="計數器">
        </a>
      </div>
    </div>
  </div>
</template>
<style>
#footer div ul {
  list-style-type: disc;
  /* 圓點無序列表 */
  padding-left: 25px;
  margin-left: 10px;
}
</style>
