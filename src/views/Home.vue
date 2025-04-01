<script setup>
import { nextTick, onMounted, ref, watchEffect } from "vue";
import UserPage from "/src/components/MasterPageUser.vue";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import Banner from "@/components/BaseComponents/Banner.vue";
import Table from "@/components/BaseComponents/Table.vue";
import Breadcrumb from "@/components/BaseComponents/Breadcrumb.vue";
import Button from "@/components/BaseComponents/Button.vue";
import AreaTitle from "@/components/BaseComponents/AreaTitle.vue";
import Moments from "@/components/AnnouncePage/Moments.vue";
import Highlights from "@/components/AnnouncePage/Highlights.vue";
import Video from "@/components/AnnouncePage/Video.vue";
import ApiHelper from "@/helpers/ApiHelper";
import Activity from '@/views/Activity.vue'
import Swal from "sweetalert2";
import LatestNewsJson from '@/assets/LatestNews.json'
import EBooks from '@/assets/EBooks.json'

const type = import.meta.env.VITE_APP_TYPE;

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

import { useAdminStore } from "@/stores/useAdminStore";
import { useFeatureToggle } from "@/stores/useFeatureToggle";

const Loading = ref(false);
const LastScrollYData = ref(0);

// 監聽當頁面大小改變時動畫參數改變
window.addEventListener("resize", () => {
  gsapFunction();
  if (window.innerWidth >= 768) {
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
  }
});
// 頁面載入完成後判斷動畫參數
window.addEventListener("load", () => {
  if (window.innerWidth >= 768) {
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
  }
});
// 表格欄位
const TableHeader = [
  {
    Key: "StartTime",
    Value: "日期",
  },
  {
    Key: "Title",
    Value: "標題",
  },
  {
    Key: "Top",
    Value: "置頂",
  },
];
const TableDate = ref([]);
// 取得最新消息資料
function GetPageData() {
  if (type == 'locale') {
    TableDate.value = LatestNewsJson.DataList;
    nextTick(() => {
      gsapFunction();
    });
  } else {
    ApiHelper.Axios(
      "api/LatestNews/GetPageData",
      "GET",
      null,
      (res) => {
        if (res.status == 200) {
          TableDate.value = res.data.DataList;
        }
      },
      (err) => {
        ApiHelper.ProcessErrMsg(err);
      }
    );
  }
}

gsap.registerPlugin(ScrollTrigger);
const TimeLine = gsap.timeline();
function gsapFunction() {
  TimeLine.fromTo(
    ".sliderHeight",
    {
      scale: '.8'
    },
    {
      scrollTrigger: {
        trigger: "#announceTable",
        start: "center center",
        end: "bottom 40%",
        scrub: 2,
      },
      scale: '1'
    }
  )
    // .fromTo(
    //   ".sliderHeight",
    //   {
    //     scale: '.8'
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: ".sliderMoment",
    //       start: "bottom center",
    //       end: "bottom 40%",
    //       scrub: 2,
    //     },
    //     scale: '1'
    //   }
    // )
    .fromTo(
      ".sliderVideo",
      {
        scale: '.8'
      },
      {
        scrollTrigger: {
          trigger: ".sliderHeight",
          start: "bottom center",
          end: "bottom 40%",
          scrub: 2,
        },
        scale: '1'
      }
    );
}

onMounted(() => {
  GetPageData();

  if (window.navigator.userAgent.toLocaleLowerCase().indexOf("line") >= 0) {
    Swal.fire(
      {
        title: "不支援此瀏覽器",
        html: `<span class="text-red-700">不支援此瀏覽器<br>請按下確認鍵使用預設瀏覽器開啟</span><br>(建議使用Chrome、Firefox、Edge、Safari瀏覽器開啟本網站)`,
        icon: "warning",
        confirmButtonText: "確定",
      }
    ).then((res) => {
      if (res.isConfirmed) {
        window.location.href = "https://expogame.sssh.tyc.edu.tw/?openExternalBrowser=1";
      }
    });
  }

});
</script>
<template>
  <UserPage>
    <Banner id="BannerImg"></Banner>
    <div id="announceTable" class="w-4/5 mx-auto" v-if="TableDate.length > 0">
      <Table :-table-header="TableHeader" v-model:TableData="TableDate"></Table>
    </div>
    <div class="w-full justify-start mb-16" id="sliderArea">
      <!-- <div
        class="sliderMoment w-4/5 min-h-96 h-auto border-dashed border-4 mx-auto my-4 rounded-xl text-center items-start justify-start flex flex-wrap">
        <div class="flex flex-wrap items-end justify-between w-full">
          <Breadcrumb :-breadcrumb-list="['原住民族相關訊息']" class="mx-4 w-full"></Breadcrumb>

          <router-link to="/announce"
            class="bg-defaultButton rounded p-4 m-4 cursor-pointer hover:scale-105">MORE</router-link>
        </div>
      </div> -->
      <div
        class="sliderHeight w-4/5 min-h-96 h-auto border-dashed border-4 mx-auto my-4 rounded-xl text-center items-start justify-start flex flex-wrap">
        <Breadcrumb :-breadcrumb-list="['教材資源']" class="mx-4 w-full"></Breadcrumb>
        <div class="flex items-end justify-between w-full">
          <div v-for="book in EBooks" class="m-4 hover:scale-105 transition-all">
            <router-link :to="book.link" class="cursor-pointer">
              <img :src="book.image" alt="">
              <p>{{ book.title }}</p>
            </router-link>
          </div>
          <router-link to="/competition/schedule"
            class="bg-defaultButton rounded p-4 m-4 cursor-pointer hover:scale-105">MORE</router-link>
        </div>
      </div>
      <div
        class="sliderVideo w-4/5 min-h-96 h-auto border-dashed border-4 mx-auto my-4 rounded-xl text-center items-start justify-start flex flex-wrap">
        <Breadcrumb :-breadcrumb-list="['認識我們', '聯絡我們']" class="mx-4"></Breadcrumb>
        <div class="flex flex-wrap items-end justify-between w-full p-4">
          <Activity></Activity>
          <router-link to="/activity"
            class="bg-defaultButton rounded p-4 m-4 cursor-pointer hover:scale-105">MORE</router-link>
        </div>
      </div>
    </div>
    <!-- 讀取畫面 開始 -->
    <div class="Loading" v-if="Loading">
      <div>
        <DotLottieVue autoplay loop src="https://lottie.host/315be978-26b4-48d4-900a-cd80a370a705/4NUZQSMH1n.json">
        </DotLottieVue>
        <div class="w-full text-center text-defaultColor">Loading ...</div>
      </div>
    </div>
    <!-- 讀取畫面 結束 -->
  </UserPage>
</template>