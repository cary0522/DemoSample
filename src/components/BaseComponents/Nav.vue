<script setup>
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import "animate.css"
import logoImageUrl from "/images/logo.jpg";
import Link from "@/components/BaseComponents/Link.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const LocaleList = [{ key: '中文', value: 'ch' }, { key: 'English', value: 'en' }, { key: '賽考利克泰雅語', value: 'SaikolikAtayal' }]

const router = useRouter();
const currentRouteName = ref(router.currentRoute.value.name);

const model = defineModel("SettingJson");

//控制Menu顯示
const toggleMenuVisibility = () => {
  isMenuVisible.value = !isMenuVisible.value;
};
const LastScrollYData = ref(0);

//選單控制
let isMenuVisible = ref(false);
//監聽當頁面大小改變時，關閉選單
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    isMenuVisible.value = true;
    window.addEventListener("scroll", () => {
      const header = document.getElementsByTagName("header")[0];
      if (window.scrollY > LastScrollYData.value && window.scrollY > 150) {
        header.classList.add("animate__animated", "animate__fadeOutUp");
        header.classList.remove("animate__fadeInDown");
        LastScrollYData.value = window.scrollY;
      } else if (window.scrollY < LastScrollYData.value) {
        header.classList.remove("animate__fadeOutUp");
        header.classList.add("animate__fadeInDown");
        LastScrollYData.value = window.scrollY;
      }
    });
  } else {
    isMenuVisible.value = false;
  }
});
//頁面載入完成後判斷要不要關閉選單
window.addEventListener("load", () => {
  if (window.innerWidth >= 768) {
    isMenuVisible.value = true;
    window.addEventListener("scroll", () => {
      const header = document.getElementsByTagName("header")[0];
      if (window.scrollY > LastScrollYData.value && window.scrollY > 150) {
        header.classList.add("animate__animated", "animate__fadeOutUp");
        header.classList.remove("animate__fadeInDown");
        LastScrollYData.value = window.scrollY;
      } else if (window.scrollY < LastScrollYData.value) {
        header.classList.remove("animate__fadeOutUp");
        header.classList.add("animate__fadeInDown");
        LastScrollYData.value = window.scrollY;
      }
    });
  } else {
    isMenuVisible.value = false;
  }
});

onMounted(() => {
  if (window.innerWidth >= 768) {
    isMenuVisible.value = true;
    window.addEventListener("scroll", () => {
      const header = document.getElementsByTagName("header")[0];
      if (window.scrollY > LastScrollYData.value && window.scrollY > 150) {
        header.classList.add("animate__animated", "animate__fadeOutUp");
        header.classList.remove("animate__fadeInDown");
        LastScrollYData.value = window.scrollY;
      } else if (window.scrollY < LastScrollYData.value) {
        header.classList.remove("animate__fadeOutUp");
        header.classList.add("animate__fadeInDown");
        LastScrollYData.value = window.scrollY;
      }
    });
  } else {
    isMenuVisible.value = false;
  }
})

// 變更路由時判斷選單開啟或關閉
watch(() => router.currentRoute.value.path, () => {
  if (window.innerWidth >= 768) {
    isMenuVisible.value = true;
    window.addEventListener("scroll", () => {
      const header = document.getElementsByTagName("header")[0];
      if (window.scrollY > LastScrollYData.value && window.scrollY > 150) {
        header.classList.add("animate__animated", "animate__fadeOutUp");
        header.classList.remove("animate__fadeInDown");
        LastScrollYData.value = window.scrollY;
      } else if (window.scrollY < LastScrollYData.value) {
        header.classList.remove("animate__fadeOutUp");
        header.classList.add("animate__fadeInDown");
        LastScrollYData.value = window.scrollY;
      }
    });
  } else {
    isMenuVisible.value = false;
  }
})

</script>
<template>
  <header>
    <div class="HeaderTitle w-full">
      <div v-if="model.menuList.length > 0" @click="toggleMenuVisibility" class="MenuBar">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </div>
      <div class="flex justify-center items-center w-3/4 md:w-full">
        <router-link to="/" class="flex items-center">
          <img loading="lazy"
            class="mx-2 h-14 object-contain rounded-full animate__animated animate__rollIn animate__fast"
            :src="logoImageUrl" alt="logo" />
          <div class="text-start mx-2 w-auto animate__animated animate__fadeInLeft animate__fast">
            <p class="text-base md:text-2xl leading-0">
              {{ t(`WebTitle`) }}</p>
            <p class="font-normal leading-0 tracking-tighter text-xs md:text-lg w-full">
              {{ t(`SideTitle`) }}
            </p>
          </div>
        </router-link>
      </div>
      <!--電腦選單內容 開始-->
      <div v-show="isMenuVisible"
        class="hidden md:flex flex-row flex-wrap md:justify-center text-defaultColor text-base 2xl:text-lg w-full text-center h-100% mx-4 animate__animated animate__fadeInLeft animate__fast">
        <div v-for="(Group, Index) in model.menuList" :key="'Group_' + Index" @mouseover="Group.ShowItem = true"
          @mouseleave="Group.ShowItem = false" class="transition-all mx-1 relative py-4">
          <div :class="{ 'hover:bg-gray-300': Group.items.length == 0 }"
            class="hover:bg-gray-300 cursor-pointer me-2 my-1 py-2" @click="Group.ShowItem = !Group.ShowItem">
            <Link :path="Group.path || ''">
            <div>
              <font-awesome-icon :icon="Group.icon" />
              {{ t(`menuList.${Group.groupName}`) }}
              <font-awesome-icon :icon="['fas', 'caret-down']" v-if="Group.items.length > 0" />
            </div>
            </Link>
            <div v-if="Group.ShowItem && Group.items.length > 0"
              class="flex flex-col md:absolute top-16 left-[50%] translate-x-[-50%] min-w-[160px] z-10 w-auto bg-defaultBg/90 rounded-b-lg px-2 py-4 mx-2 animate__animated animate__fadeIn animate__fast">
              <Link v-for="Item in Group.items" :path="Item.path || ''"
                :class="{ MenuActive: currentRouteName == Item.name }" class="my-2 hover:bg-gray-300 text-start flex">
              <font-awesome-icon :icon="Item.icon" class="min-w-[20px]" />
              <p class="ms-1 w-auto inline-block whitespace-nowrap">
                {{ t(`menuList.${Item.name}`) }}
              </p>
              </Link>
            </div>
          </div>
        </div>
        <!-- <a href="/login" class="transition-all hover:bg-gray-300 cursor-pointer me-2 my-1">
          <font-awesome-icon :icon="['fas', 'right-to-bracket']" />
          系統登入</a> -->
        <v-select v-model="locale" :items="LocaleList" item-title="key" item-value="value" variant="underlined"
          max-width="150" class="mx-2 mt-2"></v-select>
        <!-- <div v-if="locale == 'ch'" class="hidden lg:block mx-1 my-2 py-4">
          <span @click="locale = 'ch'" @keydown.enter="locale = 'ch'"
            class="hover:underline underline-offset-8 underline" tabindex="0">中文</span>
          <span>/</span>
          <span @click="locale = 'en'" @keydown.enter="locale = 'en'" class="hover:underline underline-offset-8"
            tabindex="0">English</span>
        </div>
        <div v-if="locale == 'en'" class="hidden lg:block mx-1 my-2 py-4">
          <span @click="locale = 'ch'" @keydown.enter="locale = 'ch'" class="hover:underline underline-offset-8"
            tabindex="0">中文</span>
          <span>/</span>
          <span @click="locale = 'en'" @keydown.enter="locale = 'en'"
            class="hover:underline underline-offset-8 underline" tabindex="0">English</span>
        </div> -->
      </div>
      <!--電腦選單內容 結束-->
      <!--手機選單內容 開始-->
      <div v-show="isMenuVisible" id="mobileMenu"
        class="md:hidden flex flex-col justify-start absolute my-[105px] pb-[80px] top-0 left-[-2rem] text-defaultColor text-xl w-full text-start bg-defaultBg/90 rounded overflow-x-auto overflow-y-scroll animate__animated animate__fadeInLeft animate__fast z-50">
        <div v-for="(Group, Index) in model.menuList" :key="'Group_' + Index" class="transition-all">
          <div class="cursor-pointer my-3" @click="Group.ShowItem = !Group.ShowItem">
            <Link :path="Group.path || ''" class="relative">
            <div>
              <font-awesome-icon class="pl-5" :icon="Group.icon" />
              {{ t(`menuList.${Group.groupName}`) }}
              <font-awesome-icon :icon="['fas', 'caret-down']" v-if="Group.items.length > 0" />
            </div>
            <div v-if="Group.ShowItem && Group.items.length > 0"
              class="flex flex-col md:absolute top-0 left-0 min-w-[160px] w-auto text-defaultColor rounded-b-lg px-2 pt-2 mt-2 ms-8 animate__animated animate__fadeInLeft animate__fast">
              <Link v-for="Item in Group.items" :path="Item.path || ''"
                :class="{ MenuActive: currentRouteName == Item.name }" class="my-2 text-start flex">
              <font-awesome-icon :icon="Item.icon" />
              <p class="ms-1 w-auto inline-block whitespace-nowrap">
                {{ t(`menuList.${Item.name}`) }}
              </p>
              </Link>
            </div>
            </Link>
          </div>
        </div>
        <!-- <router-link to="/login" class="transition-all hover:bg-gray-300 cursor-pointer me-2 my-1">
          <font-awesome-icon :icon="['fas', 'right-to-bracket']" />
          系統登入</router-link> -->
      </div>
      <!--手機選單內容 結束-->
      <!-- 手機板切換語言 開始 -->
      <div
        class="fixed top-[-70px] left-[-35px] w-full h-auto flex justify-center px-2 text-sm 2xl:text-base font-bold text-black md:hidden">
        <v-select v-model="locale" :items="LocaleList" item-title="key" item-value="value" variant="underlined"
          max-width="150" class="ms-auto me-2"></v-select>
        <!-- <a href="" class="mx-1" @click.prevent="locale = 'en'"
          :class="locale == 'en' ? 'underline underline-offset-4' : ''">English</a>
        <a href="" class="mx-1" @click.prevent="locale = 'ch'"
          :class="locale == 'ch' ? 'underline underline-offset-4' : ''">中文</a> -->
        <!-- <a href="/LogOut" class="mx-1" v-if="AdminStore.AdminData.ID">{{
          t('登出')
        }}</a>
        <a href="/Login" class="mx-1" v-else>{{
          t('登入')
        }}</a> -->
      </div>
      <!-- 手機板切換語言 結束 -->
    </div>
  </header>
</template>
<style>
#mobileMenu {
  height: 80vh;
}
</style>