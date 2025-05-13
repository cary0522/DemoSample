<script setup>
import { ref, reactive, onMounted, watch, nextTick } from "vue";
import { useRouter } from "vue-router";
import UserPage from "@/components/MasterPageUser.vue";
import ApiHelper from "@/helpers/ApiHelper";
import Table from "@/components/BaseComponents/Table.vue";
import TableContent from "@/components/BaseComponents/TableContent.vue";
import LeftOptions from "@/components/BaseComponents/LeftOptions.vue";
import Search from "@/components/BaseComponents/Search.vue";
import LatestNews from "@/components/AnnouncePage/LatestNews.vue";
import Highlights from "@/components/AnnouncePage/Highlights.vue";
import Moments from "@/components/AnnouncePage/Moments.vue";
import Video from "@/components/AnnouncePage/Video.vue";
import Breadcrumb from "@/components/BaseComponents/Breadcrumb.vue";
import LatestNewsJson from '@/assets/LatestNews.json'

const router = useRouter();

const OptionsList = ref([
  { Value: "中心最新消息", Path: "/announce/latestNews" },
  { Value: "原委會最新消息", Path: "/announce/cip" },
  { Value: "原民局最新消息", Path: "/announce/dia" },
  { Value: "原視新聞", Path: "/announce/titv" },
]);

// 搜尋資料
const SearchData = reactive({
  KeyWord: "",
  SortColumn: "",
  SortMethod: "ASC",
  Page: 1,
  Fetch: 5,
  Identities: [],
});
// 頁面資料
const PageData = ref({
  TotalCount: 0,
  MaxPage: 0,
  DataList: [],
});
const TableData = ref([]);
const DetailShow = ref(false);
function GetPageData() {
  DetailShow.value = false;
  PageData.value = LatestNewsJson
  nextTick(() => {
    if (PageData.value.DataList.length > 0) {
      TableData.value = PageData.value.DataList.filter((item) => item.Category == router.currentRoute.value.meta.title);
      if (router.currentRoute.value.path == "/announce/latestNews") {
        TableData.value = PageData.value.DataList.filter((item) => item.Category == router.currentRoute.value.meta.title);
      } else if (router.currentRoute.value.path == "/announce/cip") {
        TableData.value = PageData.value.DataList.filter((item) => item.Category == router.currentRoute.value.meta.title);
      } else if (router.currentRoute.value.path == "/announce/dia") {
        TableData.value = PageData.value.DataList.filter((item) => item.Category == router.currentRoute.value.meta.title);
      } else if (router.currentRoute.value.path == "/announce/titv") {
        TableData.value = PageData.value.DataList.filter((item) => item.Category == router.currentRoute.value.meta.title);
      }
    }
  })
}

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
const DetailHeader = [
  {
    Key: "StartTime",
    Value: "日期",
  },
  {
    Key: "Title",
    Value: "標題",
  },
  {
    Key: "Content",
    Value: "內容",
  },
  {
    Key: "Top",
    Value: "置頂",
  },
];
const DetailData = ref([])
function DetailFunction(id) {
  DetailShow.value = true;
  DetailData.value = PageData.value.DataList.find((item) => item.ID == id);
}

onMounted(() => {
  GetPageData();
})

watch(
  () => router.currentRoute.value.path,
  () => {
    GetPageData()
  }
);
</script>
<template>
  <div>
    <UserPage>
      <div class="flex w-full justify-between mx-4">
        <LeftOptions :OptionsList="OptionsList" :select="false" class="w-1/3"></LeftOptions>
        <div class="w-full flex flex-wrap">
          <Search class="w-full"></Search>
          <Breadcrumb :-breadcrumb-list="['最新消息', router.currentRoute.value.meta.title]" class="w-full"></Breadcrumb>
          <TableContent v-if="DetailShow" :DetailHeader="DetailHeader" :GetPageData="GetPageData"
            :DetailData="DetailData" v-model:ShowValue="DetailShow"></TableContent>
          <template v-else>
            <Table v-if="TableData.length > 0" :TableHeader="TableHeader" :GetPageData="GetPageData"
              v-model:TableData="TableData" :DetailFunction="DetailFunction" :Pointer="true">
            </Table>
          </template>
        </div>
      </div>
    </UserPage>
  </div>
</template>
