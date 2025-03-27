<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import UserPage from "@/components/MasterPageUser.vue";
import LeftOptions from "@/components/BaseComponents/LeftOptions.vue";
import Breadcrumb from "@/components/BaseComponents/Breadcrumb.vue";
import Search from "@/components/BaseComponents/Search.vue";
import Button from "@/components/BaseComponents/Button.vue";
import ApiHelper from "@/helpers/ApiHelper";

import Contact from "@/components/ServePage/Contact.vue";
import Accommodation from "@/components/ServePage/Accommodation.vue";
import Gift from "@/components/ServePage/Gift.vue";
import Traffic from "@/components/ServePage/Traffic.vue";
import Parking from "@/components/ServePage/Parking.vue";
import TrafficFloorPlan from "@/components/ServePage/TrafficFloorPlan.vue";
import Shuttle from "@/components/ServePage/Shuttle.vue";
import ShuttleMap from "@/components/ServePage/ShuttleMap.vue";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import Loading from "@/components/BaseComponents/Loading.vue";
const show = ref(true);
function clickBtn() {
  show.value = !show.value;
}
const LoadingValue = true;

const router = useRouter();

const OptionsList = ref([
  { Value: "影音紀錄", Path: "/serve/contact" },
  { Value: "課後族語班", Path: "/serve/accommodation" },
  { Value: "原住民族教育數位平台", Path: "/serve/gift" },
  { Value: "原住民族知識體系", Path: "/serve/traffic" },
  { Value: "師資培訓", Path: "/serve/parking" },
  { Value: "三一教學", Path: "/serve/trafficFloorPlan" },
  { Value: "多元方案", Path: "/serve/shuttle" },
  { Value: "教材編輯", Path: "/serve/shuttleMap" },
]);

const ExplainData = ref()
const ResultData = ref()


</script>

<template>
  <UserPage>
    <div class="flex">
      <LeftOptions :OptionsList="OptionsList" class="w-1/3" />
      <div class="w-full flex flex-wrap">
        <Search class="w-full" />
        <Breadcrumb :BreadcrumbList="['各子計畫', router.currentRoute.value.meta.title]" class="mx-4 w-full" />
        <div class="flex justify-start w-2/3 mx-4">
          <Button :BtnText="'計畫說明'"></Button>
          <Button :BtnText="'計畫成果'"></Button>
        </div>
        <div class="p-8">

        </div>

        <Contact v-if="router.currentRoute.value.path === '/serve/contact'" />
        <Accommodation v-if="router.currentRoute.value.path === '/serve/accommodation'" />
        <Gift v-if="router.currentRoute.value.path === '/serve/gift'" />
        <Traffic v-if="router.currentRoute.value.path === '/serve/traffic'" />
        <Parking v-if="router.currentRoute.value.path === '/serve/parking'" />
        <TrafficFloorPlan v-if="router.currentRoute.value.path === '/serve/trafficFloorPlan'" />
        <Shuttle v-if="router.currentRoute.value.path === '/serve/shuttle'" />
        <ShuttleMap v-if="router.currentRoute.value.path === '/serve/shuttleMap'" />
      </div>
    </div>
  </UserPage>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
