<script setup>
import ApiHelper from "@/helpers/ApiHelper";
import { onMounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import BannerJson from "@/assets/Banner.json";

const Type = import.meta.env.VITE_APP_TYPE;

import { useI18n } from "vue-i18n";
const { t } = useI18n();

// 取得輪播圖資料
const BannerData = ref([]);
function GetPageData() {
  if (Type == 'locale') {
    BannerData.value = BannerJson;
  } else {
    ApiHelper.Axios(
      "api/Home/BannerData",
      "GET",
      null,
      (res) => {
        if (res.status == 200) {
          BannerData.value = res.data;
        }
      },
      (err) => {
        ApiHelper.ProcessErrMsg(err);
      }
    );
  }
}

// 設定動畫
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  GetPageData();
  gsap.to("#BannerImg", {
    scrollTrigger: {
      trigger: "#BannerImg",
      start: "top 10%",
      end: "bottom 10%",
      scrub: 2,
    },
    y: "-25vh",
  });
  gsap.fromTo(
    "#pageTitle",
    {
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: "#BannerImg",
        start: "top center",
        end: "center top",
        scrub: 2,
      },
      y: "-60vh",
      opacity: 1,
    }
  );
});
</script>

<template>
  <div class="relative my-4">
    <v-carousel cycle v-if="BannerData.length > 0" id="BannerImg" next-icon='$next' height="60vh" width="100%">
      <template v-for="item in BannerData">
        <v-carousel-item :id="item.id" :src="item.image" cover>
        </v-carousel-item>
      </template>
    </v-carousel>
    <div
      class="w-full text-center font-black text-7xl tracking-widest text-transparent hidden md:block absolute bottom-0"
      id="pageTitle">
      {{ t('WebTitle') }}
    </div>
  </div>
</template>
<style>
#pageTitle {
  -webkit-text-stroke: 2px rgb(255, 255, 255);
}
</style>
