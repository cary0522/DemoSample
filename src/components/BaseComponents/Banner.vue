<script setup>
import ApiHelper from "@/helpers/ApiHelper";
import { onMounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SettingJson from "@/assets/Setting.json";
const DataJson = ref(SettingJson);
import BannerJson from "@/assets/Banner.json";

const Type = import.meta.env.VITE_APP_TYPE;
console.log(Type);


import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();


const BannerData = ref([]);
const Title = ref("");
// 取得輪播圖資料
function GetPageData() {
  if (Type == 'locale') {
    console.log('true')
    BannerData.value = BannerJson;
  } else {
    console.log('false')
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
    <!-- <img src="/images/ScienceBanner.webp" alt="" class="w-full 2xl:w-4/5 mx-auto opacity-60" id="BannerImg" /> -->
    <div
      class="w-full text-center font-black text-7xl tracking-widest text-transparent hidden md:block absolute bottom-0"
      id="pageTitle">
      {{ t('WebTitle') }}
    </div>
  </div>
</template>
<style>
#pageTitle {
  -webkit-text-stroke: 2px rgb(108, 105, 105);
}
</style>
