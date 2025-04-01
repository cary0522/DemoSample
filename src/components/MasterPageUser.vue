<script setup>
import "../assets/style/MasterPageUser.css";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Nav from "./BaseComponents/Nav.vue";
import Footer from "./BaseComponents/Footer.vue";
import ToTheTop from "./BaseComponents/ToTheTop.vue";
import SettingJson from "@/assets/Setting.json";
const DataJson = ref(SettingJson);

// 從VueRouter取得PageName
const router = useRouter();
const currentRouteName = ref(router.currentRoute.value.name);
document.getElementsByTagName("Title").innerHtml = currentRouteName.value;

</script>
<template>
  <Nav v-model:SettingJson="DataJson"></Nav>
  <main>
    <!--內容開始-->
    <div class="ContentBox">
      <slot></slot>
    </div>
    <ToTheTop></ToTheTop>
    <Footer :MenuList="DataJson.menuList"></Footer>
    <!--內容結束-->
  </main>
</template>
