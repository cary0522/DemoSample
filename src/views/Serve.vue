<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import UserPage from "@/components/MasterPageUser.vue";
import LeftOptions from "@/components/BaseComponents/LeftOptions.vue";
import Breadcrumb from "@/components/BaseComponents/Breadcrumb.vue";
import Search from "@/components/BaseComponents/Search.vue";
import Button from "@/components/BaseComponents/Button.vue";
import ApiHelper from "@/helpers/ApiHelper";
import PlansJson from "@/assets/Plans.json";
import Table from "@/components/BaseComponents/Table.vue";
import TableContent from "@/components/BaseComponents/TableContent.vue";
import Video from "@/components/AnnouncePage/Video.vue";
import PerformanceTeam from "@/components/ActivityPage/PerformanceTeam.vue";

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
  { Value: "教案", Path: "/plans/video" },
  { Value: "照片", Path: "/plans/language" },
  { Value: "影片", Path: "/plans/digital" },
  { Value: "計畫", Path: "/plans/knowledge" },
  { Value: "補充教材", Path: "/plans/teacherTraining" },
  { Value: "研習公告", Path: "/plans/trinity" },
]);

const ShowContent = ref(true);
const ShowResult = ref(false);
function clickContent() {
  ShowContent.value = true;
  ShowResult.value = false;
}
function clickResult() {
  ShowContent.value = false;
  ShowResult.value = true;
}

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


</script>

<template>
  <UserPage>
    <div class="flex w-full" id="serve">
      <LeftOptions :OptionsList="OptionsList" class="w-1/3" />
      <div class="w-full flex flex-wrap">
        <Search class="w-full" />
        <Breadcrumb :BreadcrumbList="['課程暨教學組', router.currentRoute.value.meta.title]" class="mx-4 w-full" />
        <Video v-if="router.currentRoute.value.meta.title == '影片'"></Video>
        <PerformanceTeam v-else-if="router.currentRoute.value.meta.title == '照片'"></PerformanceTeam>
        <Table v-else :-table-header="TableHeader" v-model:TableData="TableDate" :Pointer="true" class="mx-4"></Table>
        <TableContent v-if="DetailShow"></TableContent>
        <!-- <div class="flex justify-around sm:justify-start w-full md:w-2/3 mx-4">
          <Button :BtnText="'計畫說明'" :-click-function="clickContent"
            :class="ShowContent ? 'scale-125 mx-2' : ''"></Button>
          <Button :BtnText="'計畫成果'" :-click-function="clickResult" :class="ShowResult ? 'scale-125 mx-2' : ''"></Button>
        </div>
        <template v-for="plan in PlansJson">
          <div class="p-8 w-full" v-if="plan.name == router.currentRoute.value.meta.title">
            <div v-if="ShowContent" v-html="plan.content" class="max-w-full w-full">
            </div>
            <div v-if="ShowResult" v-html="plan.result" class="max-w-full w-full min-h-[150px]">
            </div>
          </div>
        </template> -->
      </div>
    </div>
  </UserPage>
</template>

<style>
/* .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

#serve table,
#serve th,
#serve td {
  border: 1px solid black;
  border-collapse: collapse;
}

#serve img {
  object-fit: contain;
} */
</style>
