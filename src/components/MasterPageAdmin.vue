<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "../assets/style/MasterPageAdmin.css";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

//接受參數MenuItem
const props = defineProps(['MenuList']);

//選單 1.標題 2.連結 3.分隔線
const MenuList = reactive([
  {
    groupName: "首頁",
    showGroupName: false,
    Items: [
      {
        Name: "後台首頁",
        Icon: ["fas", "house-chimney"],
        Type: "2",
        Path: "/dp_index",
      },
      {
        Name: '統計資訊',
        Icon: ['fas', 'square-poll-horizontal'],
        Path: '/statistics'
      },
      {
        Name: '訂單管理',
        Icon: ['fas', 'square-poll-horizontal'],
        Path: '/statistics'
      },
      {
        Name: '商品管理',
        Icon: ['fas', 'square-poll-horizontal'],
        Path: '/statistics'
      },
    ],
  },
  {
    groupName: "使用者帳號管理",
    showGroupName: true,
    Items: [
      {
        Name: "帳號管理",
        Icon: ["fas", "user"],
        Path: "#",
      },
      // {
      //   Name: "角色管理",
      //   Icon: ["fas", "fingerprint"],
      //   Path: "#",
      // },
    ],
  },
]);

// if (props.MenuList != null) {
//   MenuList = props.MenuList;
// }

//控制Menu顯示
const toggleMenuVisibility = () => {
  isMenuVisible.value = !isMenuVisible.value;
};

//選單控制
let isMenuVisible = ref(false);
//Logo位置
import logoImageUrl from "/images/logo.png";

//從VueRouter取得PageName
const router = useRouter();
const currentRouteName = ref(router.currentRoute.value.name);
document.getElementsByTagName("Title").innerHtml = currentRouteName.value;

//監聽當頁面大小改變時，關閉選單
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    isMenuVisible.value = true;
  } else {
    isMenuVisible.value = false;
  }
});
//頁面載入完成後判斷要不要關閉選單
window.addEventListener("load", () => {
  if (window.innerWidth >= 768) {
    isMenuVisible.value = true;
  } else {
    isMenuVisible.value = false;
  }
});
</script>

<template>
  <div id="adminPage">
    <!--Header Start-->
    <header>
      <!--Title Start-->
      <div class="AdminHeaderTitle">
        <!--選單控制 開始-->
        <div v-if="MenuList.length > 0" @click="toggleMenuVisibility" class="AdminMenuBar">
          <v-icon icon="mdi-menu" />
        </div>
        <!--選單控制 結束-->
        <div class="mx-6 min-w-[50px] max-w-[60px] object-contain">
          <router-link to="/">
            <img loading="lazy" class="mx-4 rounded-full object-contain" :src="logoImageUrl"
              alt="桃園市政府原住民族教育資源中心logo" />
          </router-link>
        </div>
        <div>
          <div class="ms-2">{{ t(`WebTitle`) }}<br />後臺首頁</div>
        </div>
      </div>
      <!--Title End-->
    </header>
    <!--Header End-->
    <main class="h-screen flex">
      <!--選單開始-->
      <div v-show="isMenuVisible" class="AdminMenuBox">
        <!--選單內容 開始-->
        <div v-for="(Group, Index) in MenuList" :key="'Group_' + Group.Index">
          <div class="AdminMenuGroupTitle" v-text="Group.groupName"></div>
          <router-link v-for="Item in Group.Items" :to="`${Item.Path}`"
            :class="{ MenuActive: currentRouteName == Item.Name }" class="AdminMenuItem">
            <font-awesome-icon :icon="Item.Icon" class="min-w-[20px]" />
            <span v-text="Item.Name"></span>
          </router-link>
          <hr v-if="Index + 1 < MenuList.length" />
        </div>
        <!--選單內容 結束-->
      </div>
      <!--選單結束-->
      <!--內容開始-->
      <div class="AdminContentBox">
        <slot></slot>
      </div>
      <!--內容結束-->
    </main>
  </div>
</template>
